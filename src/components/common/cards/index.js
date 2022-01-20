import React from "react";

export default function Card({ image, display, description }) {
  return (
    <div className=" w-full">
      <div className="py-6 rounded-md bg-white shadow-sm grid grid-row-3 gap-2">
        <div className="h-12 flex justify-center">{image}</div>

        <h2 className="title-font font-medium text-3xl text-gray-900">
          {display}
        </h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
