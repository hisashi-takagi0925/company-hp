import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({
  children,
  className = "rounded-lg border border-blue-100 shadow-sm bg-white p-4",
  hover = false,
}: CardProps) => {
  const hoverClasses = hover
    ? "hover:-translate-y-1 hover:shadow-lg transition"
    : "";
  return <div className={`${className} ${hoverClasses}`}>{children}</div>;
};
