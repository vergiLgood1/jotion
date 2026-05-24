'use client'

import { useSettings } from "@/hooks/use-settings"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";

export const SettingsModal = () => {
    const settings = useSettings();

    return(
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose} >
            <DialogContent className="">
                <DialogHeader className="border-b p-0 space-y-0 pb-3">
                    <DialogTitle className="text-lg font-medium">
                        My settings
                    </DialogTitle>
                    <DialogDescription>
                        Manage appearance preferences for your workspace.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground ">
                            Customize how jotion looks on your device
                        </span>
                    </div>
                    <ModeToggle/>
                </div>
            </DialogContent>
        </Dialog>
    );
};
