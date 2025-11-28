import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({
  children,
  className = "inline-block bg-blue-50 text-blue-600 rounded-full px-3 py-1.5 text-sm font-medium",
}: BadgeProps) => {
  return <span className={className}>{children}</span>;
};

