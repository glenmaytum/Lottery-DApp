import React from "react";

export default function Button({
  children,
  className,
  hoverable = true,
  variant = "blue",
  ...rest
}) {
  const variants = {
    blue: `text-white bg-meta-mask-blue ${hoverable && "hover:bg-blue-500"}`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 font-semibold text-center rounded-md ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
