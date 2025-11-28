import React from "react";

interface PointCardProps {
  title: string;
  body: string;
  index?: number;
}

export const PointCard = ({ title, body, index }: PointCardProps) => {
  return (
    <div className="border-l-4 border-blue-600 pl-4 py-3 hover:bg-blue-50/40 transition-colors rounded-r-lg">
      {index !== undefined && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mr-2 mb-2">
          {index}
        </div>
      )}
      <p className="text-lg font-medium mb-1">{title}</p>
      <p className="text-gray-600 text-sm md:text-base">{body}</p>
    </div>
  );
};

