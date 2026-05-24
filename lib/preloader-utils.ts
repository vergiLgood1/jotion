/**
 * Preloader Utilities
 * Handles asset loading detection and progress tracking
 */

export interface LoadingProgress {
  fonts: boolean;
  images: boolean;
  theme: boolean;
  webgl: boolean;
}

/**
 * Check if fonts are loaded
 */
export const checkFontsLoaded = async (): Promise<boolean> => {
  if (typeof document === "undefined") return true;
  
  try {
    await document.fonts.ready;
    return true;
  } catch {
    return true; // Fallback to true if fonts API not supported
  }
};

/**
 * Preload images
 */
export const preloadImages = (imageUrls: string[]): Promise<boolean> => {
  if (typeof window === "undefined") return Promise.resolve(true);
  
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Resolve anyway to not block
      img.src = url;
    });
  });

  return Promise.all(promises).then(() => true);
};

/**
 * Check if theme is initialized
 */
export const checkThemeReady = (): Promise<boolean> => {
  if (typeof window === "undefined") return Promise.resolve(true);
  
  return new Promise((resolve) => {
    // Check if CSS variables are set
    const checkTheme = () => {
      const root = document.documentElement;
      const bgColor = getComputedStyle(root).getPropertyValue("--background");
      
      if (bgColor && bgColor.trim() !== "") {
        resolve(true);
      } else {
        setTimeout(checkTheme, 50);
      }
    };
    
    checkTheme();
  });
};

/**
 * Check if WebGL context can be created
 */
export const checkWebGLReady = (): Promise<boolean> => {
  if (typeof window === "undefined") return Promise.resolve(true);
  
  return new Promise((resolve) => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      resolve(!!gl);
    } catch {
      resolve(true); // Resolve anyway if WebGL not supported
    }
  });
};

/**
 * Calculate overall progress percentage
 */
export const calculateProgress = (progress: LoadingProgress): number => {
  const weights = {
    fonts: 25,
    images: 35,
    theme: 20,
    webgl: 20,
  };

  let total = 0;
  if (progress.fonts) total += weights.fonts;
  if (progress.images) total += weights.images;
  if (progress.theme) total += weights.theme;
  if (progress.webgl) total += weights.webgl;

  return total;
};

/**
 * Get marketing page images to preload
 */
export const getMarketingImages = (): string[] => {
  // Add critical images that should be preloaded
  return [
    "/assets/icons/logo.svg",
    "/assets/icons/logoDark.svg",
    "/assets/icons/logo-secondary.svg",
    "/assets/icons/logo-secondary-dark.svg",
  ];
};

/**
 * Smooth progress animation
 */
export const animateProgress = (
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void
): void => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out-cubic)
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = from + (to - from) * eased;
    
    onUpdate(Math.round(current));
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};
