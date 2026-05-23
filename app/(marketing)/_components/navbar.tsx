'use client'

import { useConvexAuth } from "convex/react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollTop();

    return ( 
        <div className={cn(
            "fixed top-0 z-50 flex w-full items-center bg-background/90 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/70",
            scrolled && "border-b border-border shadow-sm"
        )}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner/>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button size="sm">
                            Get jotion for free
                        </Button>
                    </SignInButton>
                    </>
                ) }
            {isAuthenticated && !isLoading && (
                <>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/documents">
                        Enter Jotion
                    </Link>
                </Button>
                <UserButton
                afterSignOutUrl="/" 
                
                />
                
                
                </>
            )}
                <ModeToggle/>
            </div>
        </div>
     );
}
 
export default Navbar;
