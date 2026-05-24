"use client";

import { useEffect } from "react";
import Navbar from "./_components/navbar";
import { MarketingPreloader } from "./_components/marketing-preloader";


const MarketingLayout = ({
    children 
}: {
    children: React.ReactNode;
}) => {
    useEffect(() => {
        // Force dark mode for marketing page
        document.documentElement.classList.add("dark");
        
        return () => {
            // Clean up when leaving marketing page
            document.documentElement.classList.remove("dark");
        };
    }, []);

    return ( 
        <>
            <MarketingPreloader />
            <div className="min-h-full bg-background text-foreground">
                <Navbar/>
                <main className="min-h-full">
                    {children}
                </main>
            </div>
        </>
     );
}
 
export default MarketingLayout;
