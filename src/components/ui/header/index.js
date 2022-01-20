import React from "react";
import Button from "../../common/button";

export default function Header() {
  return (
    <header className="bg-white border-b  border-gray-200  px-4 py-5 lg:w-full lg:top-0 lg:left-0 flex justify-end">
      <Button onclick={""} text={"Connect Account"} />
    </header>
  );
}
