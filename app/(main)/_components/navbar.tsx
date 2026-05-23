'use client'

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Banner } from "./banner";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { Title } from "./title";


interface NavbarProps {
    isCollapsed: boolean;
    onResetWidht: () => void;
};


export const Navbar = ({
    isCollapsed,
    onResetWidht,
}: NavbarProps) => {
    const params = useParams();

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId as Id<"documents">,
    });

    if (document === undefined) {
        return (
            <nav className="w-full border-b border-border/60 bg-background/70 px-3 py-2 backdrop-blur-md supports-[backdrop-filter]:bg-background/50 flex items-center justify-between">
                <Title.Skeleton />
                <div className="flex items-center gap-x-2">
                    <Menu.Skeleton />
                 </div>
            </nav>
        )
    }

    if (document === null) {
        return null;
    }

    return(
        <>
            <nav className="w-full border-b border-border/60 bg-background/70 px-3 py-2 backdrop-blur-md supports-[backdrop-filter]:bg-background/50 flex items-center gap-x-4">
                {isCollapsed && (
                    <MenuIcon
                        role="button"
                        onClick={onResetWidht}
                        className="h-6 w-6 text-muted-foreground"
                    />
                )}
                <div className="flex items-center justify-between w-full">
                    <Title
                    initialData={document}
                    />
                    <div className="flex items-center gap-x-2">
                        <Publish initialData={document}/>
                        <Menu documentId={document._id}/>
                    </div>
                </div>
            </nav>
            {document.isArchived && (
                <Banner
                 documentId={document._id}
                />
            )}
        </>
    )
}
