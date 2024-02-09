"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
};

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "primary"
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(
        "rounded-lg border-2 border-sky-400 dark:border-sky-700 dark:text-neutral-200 dark:bg-sky-900 bg-sky-700",
        className
      )}
    >
      {children}
    </Button>
  );
};
