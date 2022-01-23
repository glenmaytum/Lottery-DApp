import React from "react";
import Button from "../../common/button";
import { useWeb3 } from "../../providers";

export default function Header() {
  const { connect, isWeb3Loaded } = useWeb3();

  return (
    <header className="bg-white border-b  border-gray-200  px-4 py-5 lg:w-full lg:top-0 lg:left-0 flex justify-end">
      {isWeb3Loaded ? (
        <button
          onClick={connect}
          className="px-4 py-2 font-semibold text-center text-white rounded-md bg-primary bg-meta-mask-blue hover:bg-blue-500"
        >
          Connect Account
        </button>
      ) : (
        <button
          onClick={connect}
          className="px-4 py-2 font-semibold text-center text-white rounded-md bg-primary bg-meta-mask-blue hover:bg-blue-500"
        >
          Install Metamask
        </button>
      )}
    </header>
  );
}
