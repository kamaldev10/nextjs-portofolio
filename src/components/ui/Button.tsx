"use client";

// components/ui/Button.tsx
import React from "react";
import { clsx } from "clsx"; // Utility untuk menggabungkan class secara kondisional

// 1. Definisikan Props untuk Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  fullWidth?: boolean;
}

// 2. Buat Komponen Button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary", // Default variant
      size = "md", // Default size
      leftIcon,
      rightIcon,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    // 3. Definisikan Style untuk setiap variant dan size
    // Ini membuat kustomisasi menjadi sangat mudah
    const baseStyles =
      "inline-flex items-center align-middle justify-center font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ";

    const variantStyles = {
      primary:
        "bg-slate-200 hover:bg-slate-300 dark:bg-indigo-700 dark:hover:bg-indigo-700/30 border-accent dark:border-indigo-800 text-gray-800   hover:text-gray-900 focus:ring-primary",
      secondary:
        "border-gray-600 text-gray-600 hover:bg-gray-300 hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-100/50 focus:ring-gray-500",
      danger:
        "border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2 text-base gap-2",
      lg: "px-7 py-3 text-lg gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full", // Terapkan 'w-full' jika fullWidth true
          className // Memungkinkan penambahan class dari luar
        )}
        {...props} // Meneruskan sisa props seperti onClick, type, disabled, dll.
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
