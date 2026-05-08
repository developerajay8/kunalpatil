"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#9EFF00] text-black px-6 py-3 hover:brightness-110 shadow-[0_0_24px_#9EFF0066] hover:shadow-[0_0_40px_#9EFF0099]",
    secondary:
      "bg-transparent text-white border border-white/20 px-6 py-3 hover:border-[#9EFF00]/50 hover:text-[#9EFF00] hover:shadow-[0_0_20px_#9EFF0033]",
    ghost: "bg-transparent text-white/70 px-4 py-2 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
}