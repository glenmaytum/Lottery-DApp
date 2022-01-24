import React from "react";
import Button from "../../common/button";
import { useWeb3 } from "../../providers";
import { useAccount } from "../../web3/hooks/useAccount";

export default function Header() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  const { account } = useAccount();
  console.log(account);
  // Avoiding the use of _blank as security risk
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <header className="bg-white border-b  border-gray-200  px-4 py-5 lg:w-full lg:top-0 lg:left-0 flex justify-end">
      {account}
      {isLoading ? (
        <Button disabled={true} onClick={connect}>
          Connecting...
        </Button>
      ) : isWeb3Loaded ? (
        <Button onClick={connect}>Connect to Metamask</Button>
      ) : (
        <Button onClick={() => openInNewTab("https://metamask.io/download/")}>
          Install Metamask
        </Button>
      )}
    </header>
  );
}
