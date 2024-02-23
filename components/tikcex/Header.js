// import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAVIGATION_ITEMS } from "../../constants";
import Sidebar from "./Sidebar";
import ConfirmDisconnectModal from "../../components/tikcex/components/confirm-disconnect-modal/ConfirmDisconnectModal";
import { shortenToken } from "../../utils/handle-token.util";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import CustomConnectBtn from "../custom-connect-btn/CustomConnectBtn";
const Web3 = require("web3");
import { toast } from "react-toastify";

function HeaderTikCex() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    ethEnabled(false);
  }, []);

  const ethEnabled = async (reload) => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        window.web3 = new Web3(window.ethereum);
        setAccount(accounts[0]);
        setIsConnected(true);
        if (reload) {
          // location.reload();
        }
        return true;
      } catch (error) {
        // console.error("Error connecting wallet:", error);
        // toast.error("Error when connecting wallet")
        return false;
      }
    } else {
      // Handle if Metamask is not available
      // console.error("Metamask not available");
      // toast.error("Metamask not available")
      return false;
    }
  };

  const handleDisconnect = () => {
    let w3 = new Web3(window.ethereum);

    w3.eth.getBalance(account).then((_balance) => {
      setBalance((_balance / 10 ** 18).toString().slice(0, 7));
    });
    setIsDisconnectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const confirmDisconnect = async () => {
    setIsDisconnectModalOpen(false);
    setIsConnected(false);
    setAccount(null);

    await window.ethereum.request({
      method: "wallet_revokePermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    document.body.style.overflow = "visible";
  };

  const cancelDisconnect = () => {
    setIsDisconnectModalOpen(false);
    document.body.style.overflow = "visible";
  };

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);

    if (!isOpenSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-20 mx-auto flex  h-[80px] w-full justify-center md:h-auto ${scrolling ? "bg-slate-950" : "bg-transparent"} bg-opacity-70 px-[15px] py-3 xl:px-0`}
      >
        <div className="flex w-full items-center justify-between sm:px-0 md:max-w-[1240px]">
          <div className="mr-3 text-[35px] font-bold text-white sm:mr-0">
            <a href="/">TAKCEX</a>
          </div>
          <nav className="inline-flex h-11 list-none items-center justify-end gap-x-[15px] md:gap-[35px]">
            {NAVIGATION_ITEMS.map((item, idx) => (
              <li key={item.link} className="hidden sm:inline">
                <Link href={item.link}>
                  <a className="text-right text-lg font-medium text-white opacity-90">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}

            <CustomConnectBtn />

            {/* <DropdownLanguages /> */}

            {/* <ConnectButton.Custom>
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
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

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
                              <span className="md:hidden">
                                {account.displayName}
                              </span>
                              <span className="hidden md:inline">
                                {account.displayName}
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
                        <div style={{ display: "flex", gap: 12 }}>
                          <button
                            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
                            onClick={openAccountModal}
                            type="button"
                          >
                            <div className="text-base font-semibold leading-tight text-slate-950 ">
                              {account.displayName}
                            </div>
                            <img className="relative h-6 w-6" src="/wallet.svg" />
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom> */}

            {/* {isConnected && (
              <button
                id="connect-wallet-btn"
                onClick={() => handleDisconnect()}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
              >
                <div className="text-base font-semibold leading-tight text-slate-950 ">
                  <span className="md:hidden">
                    {account ? shortenToken(account) : "Connect"}
                  </span>
                  <span className="hidden md:inline">
                    {account ? shortenToken(account) : "Connect Wallet"}
                  </span>
                </div>
                <img className="relative h-6 w-6" src="/wallet.svg" />
              </button>
            )}

            {!isConnected && (
              <button
                id="connect-wallet-btn"
                onClick={() => ethEnabled(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
              >
                <div className="text-base font-semibold leading-tight text-slate-950 ">
                  <span className="md:hidden">
                    {account ? shortenToken(account) : "Connect"}
                  </span>
                  <span className="hidden md:inline">
                    {account ? shortenToken(account) : "Connect Wallet"}
                  </span>
                </div>
                <img className="relative h-6 w-6" src="/wallet.svg" />
              </button>
            )} */}

            <button
              className="flex h-[45px] w-[45px] items-center justify-center gap-[5px] rounded-xl backdrop-blur-[42px] sm:hidden"
              style={{
                background:
                  "linear-gradient(153deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
              onClick={handleToggleSidebar}
            >
              <img
                className="relative h-6 w-6"
                src="/header/menu-04.svg"
                alt="sidebar-menu"
              />
            </button>
          </nav>
        </div>
      </header>

      <Sidebar
        isOpenSidebar={isOpenSidebar}
        handleToggleSidebar={handleToggleSidebar}
        isConnected={isConnected}
        handleDisconnect={handleDisconnect}
        account={account}
        setAccount={setAccount}
        setIsConnected={setIsConnected}
      />

      {balance && (
        <ConfirmDisconnectModal
          isOpen={isDisconnectModalOpen}
          onClose={cancelDisconnect}
          onDisconnect={confirmDisconnect}
          account={account}
          balance={balance}
        />
      )}
    </>
  );
}

export default HeaderTikCex;
