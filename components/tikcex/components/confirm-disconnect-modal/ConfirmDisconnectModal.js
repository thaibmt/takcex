import React from "react";

import { shortenToken } from "../../../../utils/handle-token.util";

ConfirmDisconnectModal.propTypes = {};

function ConfirmDisconnectModal({ isOpen, onClose, onDisconnect, account, balance }) {
  function copyAddress() {
    navigator.clipboard.writeText(account);
    alert("Address Copied to Clipboard");
  }

  return (
    isOpen && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" onClick={onClose}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-auto p-5 transform overflow-hidden rounded-[44px] bg-[#191a1a] text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-lg sm:align-middle">
            <button
              onClick={onClose}
              className="absolute right-4 top-2 h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-xl px-3 py-3 text-xl font-bold text-white backdrop-blur-[42px]"
            >
              <img className="relative h-6 w-6" src="/icons/x-close.svg" />
            </button>

            <div className="my-5 flex flex-col items-center justify-center">
              <div className="my-5 flex flex-col items-center gap-y-5">
                <div className="h-[70px] w-[70px] rounded-full border-4 border-[#191a1a] border-opacity-10 bg-red-900"></div>

                <button
                  onClick={copyAddress}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-[100px] border border-white border-opacity-10 bg-white bg-opacity-10 px-4 py-1.5"
                >
                  <div
                    id="contract-address"
                    className="text-sm font-medium  leading-normal text-white"
                  >
                    {shortenToken(account)}
                  </div>
                  <div className="flex h-[22px] min-w-[22px] items-center justify-center">
                    <img
                      className="relative h-[22px] w-[22px]"
                      src="/icons/copy.svg"
                    />
                  </div>
                </button>

                <div className="flex gap-x-2">
                  <span className="text-sm font-medium leading-tight text-white text-opacity-50">
                    Balance:
                  </span>
                  <span className="flex text-sm font-medium leading-tight text-white">
                    {balance && (
                      <p
                        id="balance-text"
                        className="mr-[2px] text-sm font-bold leading-tight text-white"
                      >{balance}</p>
                    )}
                    BNB
                  </span>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => onDisconnect()}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-900 px-20 py-2 text-base font-medium shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmDisconnectModal;
