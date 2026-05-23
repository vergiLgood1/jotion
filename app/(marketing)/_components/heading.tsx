"use client";

import { useConvexAuth } from "convex/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <div data-hero-reveal className="mb-5 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
        A calmer workspace for notes, documents, and plans
      </div>
      <h1 data-hero-reveal className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Start with a thought. Leave with a system.
      </h1>
      <p data-hero-reveal className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        Jotion turns loose notes into connected pages you can shape, revisit,
        and publish when they are ready. No noise, no fake urgency, just a clear
        place for work that needs room to grow.
      </p>
      {isLoading && (
        <div data-hero-reveal className="mt-8 flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button data-hero-reveal asChild size="lg" className="mt-8 rounded-full px-7">
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button data-hero-reveal size="lg" className="mt-8 rounded-full px-7">
            Get Jotion Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
