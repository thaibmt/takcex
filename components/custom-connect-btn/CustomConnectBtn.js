import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { shortenToken } from "../../utils/handle-token.util";

function CustomConnectBtn(props) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    id="connect-wallet-btn"
                    onClick={openConnectModal}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
                  >
                    <div className="text-base font-semibold leading-tight text-slate-950 ">
                      <span className="md:hidden">{"Connect"}</span>
                      <span className="hidden md:inline">
                        {"Connect Wallet"}
                      </span>
                    </div>
                    <img className="relative h-6 w-6" src="/wallet.svg" />
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                // <div style={{ display: "flex", gap: 12 }}>
                <button
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
                  onClick={openAccountModal}
                  type="button"
                >
                  <div className="text-base font-semibold leading-tight text-slate-950 ">
                    {shortenToken(account.address)}
                  </div>
                  <img className="relative h-6 w-6" src="/wallet.svg" />
                </button>
                // </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default CustomConnectBtn;
