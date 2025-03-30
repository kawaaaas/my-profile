import { CareerContentsType } from "@/types/types";
import React from "react";

export const Career: React.FC<CareerContentsType> = ({ date, content }) => {
  return (
    <div className="tb:h-[100px] h-auto flex border-b border-gray-200 text-gray-700 my-auto tb:pb-0 py-2">
      <div className="tb:w-[200px] w-1/4 flex items-center tb:text-base sp:text-sm text-xs">
        {date}
      </div>
      <div className="tb:w-[650px] w-3/4 flex items-center tb:text-lg sp:text-lg text-xs">
        {content}
      </div>
    </div>
  );
};
