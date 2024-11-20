import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react"

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors outline-none decoration-none focus:outline-none focus:ring-1 focus:ring-gray-500 ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isloading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant, size, className, isloading, ...props }) => {
  return (
    <button disabled={isloading} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {isloading ? <Loader2 className=" mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button >
  );
}

export default Button;