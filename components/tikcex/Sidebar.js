import React, { useEffect } from "react";
import { NAVIGATION_ITEMS } from "../../constants";
import DropdownLanguages from "../../components/shared/DropdownLanguages";
import Link from "next/link";
import { shortenToken } from "../../utils/handle-token.util";
import CustomConnectBtn from "../custom-connect-btn/CustomConnectBtn";
const Web3 = require("web3");

Sidebar.propTypes = {};

function Sidebar({
  isOpenSidebar,
  handleToggleSidebar,
  isConnected,
  handleDisconnect,
  account,
  setAccount,
  setIsConnected,
}) {
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
        console.error("Error connecting wallet:", error);
        return false;
      }
    } else {
      // Handle if Metamask is not available
      console.error("Metamask not available");
      return false;
    }
  };

  const handleNavItemClick = () => {
    handleToggleSidebar();
    document.body.style.overflow = "visible";
  };

  return isOpenSidebar ? (
    <div className="fixed right-0 top-0 z-50 h-full w-full bg-slate-950 text-white transition-all duration-300 ease-in-out">
      <div className="z-1 h-full">
        <div className="flex h-[80px] items-center justify-between px-[15px] py-3">
          <div className="text-[35px] font-bold text-white">TAKCEX</div>
          <button
            onClick={handleToggleSidebar}
            style={{
              background:
                "linear-gradient(153deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
            className="h-[45px] w-[45px] cursor-pointer items-center  justify-center rounded-xl px-3 py-3 text-xl font-bold text-white backdrop-blur-[42px]"
          >
            <img className="relative h-6 w-6" src="/icons/x-close.svg" />
          </button>
        </div>
        <nav className="flex max-h-[calc(100vh-80px)] flex-col items-center gap-10 overflow-auto py-8">
          {NAVIGATION_ITEMS.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <a
                onClick={handleNavItemClick}
                className="text-[22px] text-white"
              >
                {item.label}
              </a>
            </Link>
          ))}

          <CustomConnectBtn />
          {/* <DropdownLanguages isOpenSidebar={isOpenSidebar} /> */}
          {/* Connect Wallet button */}

          {/* {isConnected && (
            <button
              onClick={() => {
                handleNavItemClick()
                handleDisconnect()
              }}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
            >
              <div className="text-base font-semibold leading-tight text-slate-950 md:inline">
                {account ? shortenToken(account) : "Connect Wallet"}
              </div>
              <img
                className="relative h-6 w-6"
                src="/wallet.svg"
                alt="wallet"
              />
            </button>
          )}

          {!isConnected && (
            <button
              onClick={() => {
                handleNavItemClick()
                ethEnabled(true)
              }} // Assuming ethEnabled is a function available in your scope
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 shadow"
            >
              <div className="text-base font-semibold leading-tight text-slate-950 md:inline">
                {account ? shortenToken(account) : "Connect Wallet"}
              </div>
              <img
                className="relative h-6 w-6"
                src="/wallet.svg"
                alt="wallet"
              />
            </button>
          )} */}
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] h-full w-full">
        <img
          src="/images/menu-bg-mb.png"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </div>
  ) : null;
}

export default Sidebar;
