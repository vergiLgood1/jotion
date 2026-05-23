"use client";

import { useConvexAuth } from "convex/react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Logo } from "./logo";

const navItems = [
    { label: "Story", href: "#story" },
    { label: "Workflow", href: "#workflow" },
    { label: "Features", href: "#features" },
];

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-4 z-50 px-3 transition-all duration-300 sm:px-6"
            )}
        >
            <div
                className={cn(
                    "mx-auto flex h-16 items-center justify-between px-4 transition-all duration-300 sm:px-6",
                    scrolled
                        ? "max-w-6xl rounded-full border border-border/40 bg-background/75 shadow-sm backdrop-blur-xl"
                        : "max-w-8xl rounded-2xl bg-transparent"
                )}
            >
                {/* LEFT */}
                <div className="flex items-center">
                    <Logo />

                    <span className="mx-4 hidden text-muted-foreground/40 md:block">
                        /
                    </span>

                    <nav
                        className="hidden items-center md:flex"
                        aria-label="Primary navigation"
                    >
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group relative rounded-full px-3 py-2",
                                        "text-sm font-medium text-muted-foreground",
                                        "transition-all duration-200",
                                        "hover:text-foreground"
                                    )}
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>

                                    <span
                                        className={cn(
                                            "absolute inset-0 rounded-full",
                                            "bg-muted opacity-0",
                                            "transition-opacity duration-200",
                                            "group-hover:opacity-100"
                                        )}
                                    />
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2">
                    {isLoading && <Spinner />}

                    {!isAuthenticated && !isLoading && (
                        <>
                            <SignInButton mode="modal">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "rounded-full px-4",
                                        "text-sm font-medium"
                                    )}
                                >
                                    Log in
                                </Button>
                            </SignInButton>

                            <SignInButton mode="modal">
                                <Button
                                    size="sm"
                                    className={cn(
                                        "hidden rounded-full px-5 sm:inline-flex",
                                        "font-medium shadow-sm"
                                    )}
                                >
                                    Get Jotion free
                                </Button>
                            </SignInButton>
                        </>
                    )}

                    {isAuthenticated && !isLoading && (
                        <>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full px-4"
                                asChild
                            >
                                <Link href="/documents">
                                    Enter Jotion
                                </Link>
                            </Button>

                            <UserButton afterSignOutUrl="/" />
                        </>
                    )}

                    <div className="ml-1">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
