import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export function PopUpModal({
  title,
  onClose,
  className,
  children,
  overlayClickToClose = true,
  ...props
}) {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      onClick={overlayClickToClose ? onClose : undefined}
    >
      <div
        className={cn(
          "w-full max-w-md scale-95 animate-in fade-in zoom-in-95 duration-300",
          className
        )}
        onClick={(e) => e.stopPropagation()} 
        {...props}
      >
        <Card>
          <CardHeader className="flex items-center justify-between border-b">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </CardHeader>
          <CardContent className="pt-4">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
