"use client";

import { usePreloader } from "@/hooks/use-preloader";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const MarketingPreloader = () => {
  const { isLoading, progress, isComplete } = usePreloader();
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth progress display
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(progress);
    }, 50);
    return () => clearTimeout(timer);
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-600",
        isComplete ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo */}

        {/* Progress Text */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-semibold tabular-nums text-foreground">
            {displayProgress}%
          </div>
          <div className="text-sm text-muted-foreground">
            {progress < 25 && "Initializing workspace..."}
            {progress >= 25 && progress < 50 && "Loading fonts..."}
            {progress >= 50 && progress < 75 && "Preparing canvas..."}
            {progress >= 75 && progress < 100 && "Almost ready..."}
            {progress >= 100 && "Welcome to Jotion"}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 overflow-hidden rounded-full bg-muted/30">
          <div
            className="h-1 rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 ease-out"
            style={{
              width: `${displayProgress}%`,
            }}
          />
        </div>
      </div>

      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};
