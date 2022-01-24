import React from "react";
import Button from "../../common/button";
import { useWeb3 } from "../../providers";
import { useAccount } from "../../hooks/web3/useAccount";
import { useNetwork } from "../../hooks/web3/useNetwork";

export default function Header() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();

  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <header className="bg-white border-b  border-gray-200  px-4 py-5 lg:w-full lg:top-0 lg:left-0 flex justify-end">
      {isLoading ? (
        <Button disabled={true} onClick={connect}>
          Connecting...
        </Button>
      ) : isWeb3Loaded ? (
        account.data ? (
          <Button hoverable={false} className="cursor-default">
            Connected {account.isAdmin && "Admin"}
          </Button>
        ) : (
          <Button onClick={connect}>Connect to Metamask</Button>
        )
      ) : (
        <Button
          onClick={() => openInNewTab("https://metamask.io/download.html")}
        >
          Install Metamask
        </Button>
      )}
      {account.data && <div>{account.data}</div>}
    </header>
  );
}

// Avoiding the use of _blank as security risk
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
