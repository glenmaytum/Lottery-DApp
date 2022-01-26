import { useWeb3 } from "../../../providers/web3/index";
import React from "react";

const StatusBar = ({ address, network }) => {
  const { requireInstall } = useWeb3;
  return (
    <section className="text-white bg-indigo-600">
      <div className="p-8">
        <h1 className="text-2xl">Hello, {address}</h1>
        <h2 className="subtitle mb-5 text-xl">
          I hope you are having a great day!
        </h2>
        <div className="flex justify-between items-center">
          <div>
            {network.hasInitialResponse && !network.isSupported && (
              <div className="bg-red-400 p-4 rounded-lg">
                <div>Connected to wrong network</div>
                <div>
                  Connect to: {` `}
                  <strong className="text-2xl">{network.target}</strong>
                </div>
              </div>
            )}
            {requireInstall && (
              <div className="bg-yellow-500 p-4 rounded-lg">
                Cannot connect to network. Please install Metamask
              </div>
            )}
            {network.data && (
              <div>
                <span>Currently on </span>
                <strong className="text-2xl">{network.data}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusBar;
