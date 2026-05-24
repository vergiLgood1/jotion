"use client";

import { useEffect, useState } from "react";
import {
  checkFontsLoaded,
  checkThemeReady,
  checkWebGLReady,
  preloadImages,
  calculateProgress,
  getMarketingImages,
  animateProgress,
  type LoadingProgress,
} from "@/lib/preloader-utils";

interface UsePreloaderReturn {
  isLoading: boolean;
  progress: number;
  isComplete: boolean;
}

export const usePreloader = (): UsePreloaderReturn => {
  const [progress, setProgress] = useState(0);
  const [loadingState, setLoadingState] = useState<LoadingProgress>({
    fonts: false,
    images: false,
    theme: false,
    webgl: false,
  });
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let currentProgress = 0;

    const updateProgress = (newState: Partial<LoadingProgress>) => {
      if (!mounted) return;

      setLoadingState((prev) => {
        const updated = { ...prev, ...newState };
        const targetProgress = calculateProgress(updated);

        // Animate progress smoothly
        animateProgress(currentProgress, targetProgress, 300, (value) => {
          if (mounted) {
            setProgress(value);
            currentProgress = value;
          }
        });

        return updated;
      });
    };

    const loadAssets = async () => {
      try {
        // Phase 1: Theme initialization (fastest)
        checkThemeReady().then(() => {
          updateProgress({ theme: true });
        });

        // Phase 2: Fonts (critical for layout)
        checkFontsLoaded().then(() => {
          updateProgress({ fonts: true });
        });

        // Phase 3: WebGL context
        checkWebGLReady().then(() => {
          updateProgress({ webgl: true });
        });

        // Phase 4: Images (can be slower)
        const images = getMarketingImages();
        preloadImages(images).then(() => {
          updateProgress({ images: true });
        });
      } catch (error) {
        console.error("Preloader error:", error);
        // Continue anyway
        if (mounted) {
          setLoadingState({
            fonts: true,
            images: true,
            theme: true,
            webgl: true,
          });
          setProgress(100);
        }
      }
    };

    loadAssets();

    return () => {
      mounted = false;
    };
  }, []);

  // Check if all assets are loaded
  useEffect(() => {
    const allLoaded =
      loadingState.fonts &&
      loadingState.images &&
      loadingState.theme &&
      loadingState.webgl;

    if (allLoaded && progress >= 100 && !isComplete) {
      // Keep at 100% briefly to show completion
      const timer = setTimeout(() => {
        setIsComplete(true);
        // Wait for exit animation before removing loader
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [loadingState, progress, isComplete]);

  return {
    isLoading,
    progress: Math.min(progress, 100),
    isComplete,
  };
};
