import React from "react";

export default function Button({
  children,
  className = "text-white bg-primary bg-meta-mask-blue hover:bg-blue-500",
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 font-semibold text-center rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

//
