import React from "react";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}

export const TwoColumnLayout = ({
  left,
  right,
  leftClassName = "md:w-1/2 print:w-1/2 flex flex-col justify-center pl-8 pr-6 py-8",
  rightClassName = "md:w-1/2 print:w-1/2 flex items-center justify-center pr-8 pl-6 py-8",
}: TwoColumnLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row print:flex-row h-full">
      <div className={leftClassName}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
};
