import React from "react";

export default function Card({ image, display, description }) {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="px-4 py-6 rounded-md bg-white shadow-sm flex flex-col gap-2">
        {/* <img src={image} alt="" className="h-12 mb-5" /> */}
        {this.props.image}
        <h2 className="title-font font-medium text-3xl text-gray-900">
          {display}
        </h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
