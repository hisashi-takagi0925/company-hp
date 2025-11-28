import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  className = "bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 py-2.5 text-sm transition-colors",
  type = "button",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

