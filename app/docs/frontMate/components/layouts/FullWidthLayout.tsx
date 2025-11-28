import React from "react";

interface FullWidthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const FullWidthLayout = ({
  children,
  className = "flex flex-col h-full",
}: FullWidthLayoutProps) => {
  return <div className={className}>{children}</div>;
};
