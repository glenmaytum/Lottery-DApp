import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-semibold text-center text-white rounded-md bg-primary bg-meta-mask-blue hover:bg-blue-500"
    >
      {text}
    </button>
  );
}
