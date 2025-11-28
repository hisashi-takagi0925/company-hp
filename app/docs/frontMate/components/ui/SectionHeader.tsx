import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  className = "w-full flex flex-col items-center pt-8 pb-4 px-8 md:px-16 text-center",
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-xl text-gray-600 mb-4">{subtitle}</h3>
      )}
      {description && (
        <p className="text-base text-gray-600 max-w-3xl">{description}</p>
      )}
    </div>
  );
};

