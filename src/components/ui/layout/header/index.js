import React from "react";
import Button from "../../common/button";
import { useWeb3 } from "../../../providers";
import { useAccount, useNetwork } from "../../../hooks/web3/index";
import StatusBar from "../../common/statusBar/index";

// Avoiding the use of _blank as security risk
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Header = () => {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <header className="bg-white border-b  border-gray-200  px-4 py-5 lg:w-full lg:top-0 lg:left-0 flex justify-end">
      <StatusBar
        address={account.data}
        network={{
          data: network.data,
          target: network.target,
          isSupported: network.isSupported,
          hasInitialResponse: network.hasInitialResponse,
        }}
      />

      {isLoading ? (
        <Button disabled={true} onClick={connect}>
          Connecting...
        </Button>
      ) : account.data ? (
        <Button hoverable={false} className="cursor-default">
          Connected {account.isAdmin && "Admin"}
        </Button>
      ) : requireInstall ? (
        <Button
          onClick={() => openInNewTab("https://metamask.io/download.html")}
        >
          Install Metamask
        </Button>
      ) : (
        <Button onClick={connect}>Connect to Metamask</Button>
      )}
    </header>
  );
};

export default Header;
