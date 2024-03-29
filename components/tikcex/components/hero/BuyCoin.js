import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../../../styles/Cover.module.css";
let Web3 = require("web3");

BuyCoin.propTypes = {};

var balance_;
var minPurchase_;
var maxPurchase_;
let bscscanTokenUrl_;
let bscscanContractUrl_;
let tokenImageUrl_;
let percentage_;

function BuyCoin(props) {
  let tokenData = {
    id: "1",
    token: "0xe1F8787b35f76C7C138c8330BE86ada000006c68",
    presaleContract: "0x509e2AfCAF74E6Ad87A9bDD1a80a60Ee630Ae969",
    contractABI: "",
    tokenIconURL: "https://www.kredict.com/kredict-k.png",
    tokenName: "KRDICT",
    tokenSymbol: "KDT",
    tokenForPresaleInitial: "2",
    tokenForPresaleNumberOfZeros: "14",
    totalSupplyInitial: "1",
    totalSupplyNumberOfZeros: "15",
    decimals: "4",
    hardCap: "600",
    rate: "2600000000",
    type: "BEP20",
    presaleRunning: "true",
    kycVerified: "https://github.com/HireCA/audit/blob/main/kredictkyc.pdf",
    smartContractAudit:
      "https://github.com/HireCA/audit/blob/main/kredictaudit.pdf",
  };

  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(null);

  // let abi = JSON.parse(tokenData.contractABI);
  let abi = [
    {
      inputs: [],
      name: "buyTokens",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
      ],
      name: "collectLeftTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
      ],
      name: "collectOwnableAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "OwnerCollectedBNB",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "OwnerCollectedTOKEN",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "startedBy",
          type: "address",
        },
      ],
      name: "PresaleStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "stoppedBy",
          type: "address",
        },
      ],
      name: "PresaleStoped",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "token",
          type: "address",
        },
        {
          internalType: "string",
          name: "tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "rate",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "weiRaised",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minPurchase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxPurchase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "endTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "hardCap",
          type: "uint256",
        },
      ],
      name: "startPresale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "stopPresale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "TokensPurchased",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [],
      name: "_admin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_endTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_hardCap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_maxPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_minPurchase",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_presaleStarted",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_rate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_startTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_token",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tokenName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tokenSymbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_weiRaised",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "holders",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TokenBalanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  let contractAddress = tokenData.presaleContract;

  useEffect(() => {
    let endTime_;

    window.ethereum
      ? ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAddress(accounts[0]);
          let w3 = new Web3(ethereum);
          setWeb3(w3);

          let _balance = w3.eth.getBalance(accounts[0]).then((_balance) => {
            document.getElementById("balance-text").innerHTML = (
              _balance /
              10 ** 18
            )
              .toString()
              .slice(0, 7);
            balance_ = _balance;
          });

          let c = new w3.eth.Contract(abi, contractAddress);
          setContract(c);

          c.methods
            ._totalSupply()
            .call()
            .then((_supply) => {
              _supply = _supply / 10 ** 18;
              document.getElementById("total-supply").innerHTML = _supply;
            })
            .catch((err) => console.log(err));

          c.methods
            ._rate()
            .call()
            .then((_rate) => {
              document.getElementById("rate").innerHTML = _rate;
            })
            .catch((err) => console.log(err));

          c.methods
            ._hardCap()
            .call()
            .then((_hardCap) => {
              _hardCap = _hardCap / 10 ** 18;
              document.getElementById("hard-cap").innerHTML = _hardCap;
            })
            .catch((err) => console.log(err));

          c.methods
            ._weiRaised()
            .call()
            .then((_weiRaised) => {
              let _bnb = _weiRaised / 10 ** 18;
              document.getElementById("amount-raised").innerHTML =
                _bnb + " BNB";
              let percentage = (_bnb / tokenData.hardCap) * 100;
              document.getElementById("bar-percentage").style.width =
                percentage.toString();
              document.getElementById("target-percentage").innerHTML =
                percentage.toString().slice(0, 4) + " %";
              localStorage.setItem("percentage", percentage);

              percentage_ = percentage;
            })
            .catch((err) => console.log(err));

          c.methods
            ._minPurchase()
            .call()
            .then((minAmount) => {
              minPurchase_ = minAmount;
            })
            .catch((err) => console.log(err));

          c.methods
            ._maxPurchase()
            .call()
            .then((maxAmount) => {
              maxPurchase_ = maxAmount;
            })
            .catch((err) => console.log(err));

          c.methods
            ._endTime()
            .call()
            .then((endTime) => {
              endTime_ = endTime;
              const day = document.getElementById("days");
              const hr = document.getElementById("hours");
              const min = document.getElementById("minutes");
              const sec = document.getElementById("seconds");

              const eventDate = endTime * 1000;
              const id = setInterval(() => {
                const now = new Date().getTime();
                const diff = eventDate - now;

                const d = Math.floor(
                  eventDate / (1000 * 60 * 60 * 24) -
                  now / (1000 * 60 * 60 * 24),
                );
                const h = Math.floor(
                  (eventDate / (1000 * 60 * 60) - now / (1000 * 60 * 60)) %
                  24,
                );
                const m = Math.floor(
                  (eventDate / (1000 * 60) - now / (1000 * 60)) % 60,
                );
                const s = Math.floor((eventDate / 1000 - now / 1000) % 60);

                if (diff > 0) {
                  day.innerHTML = d;
                  hr.innerHTML = h;
                  min.innerHTML = m;
                  sec.innerHTML = s;
                } else {
                  day.innerHTML = 0;
                  hr.innerHTML = 0;
                  min.innerHTML = 0;
                  sec.innerHTML = 0;
                }
              }, 1000);
            })
            .catch((err) => console.log(err));

          c.methods
            ._presaleStarted()
            .call()
            .then((_status) => {
              let status;
              if (_status) {
                status = "ACTIVE";
              } else {
                status = "PAUSED";
              }
              document.getElementById("presale-status").innerHTML = status;
            })
            .catch((err) => console.log(err));

          document.getElementById("buy-button").disabled = true;
          document.getElementById("buy-button").style.background = "black";
          document.getElementById("buy-button").style.boxShadow = "none";
          document.getElementById("buy-button").style.cursor = "not-allowed";

          if (tokenData.instagram == "") {
            document.getElementById("instagram").style.display = "none";
          }
          if (tokenData.facebook == "") {
            document.getElementById("facebook").style.display = "none";
          }
          if (tokenData.website == "") {
            document.getElementById("website").style.display = "none";
          }
          if (tokenData.whitepaper == "") {
            document.getElementById("whitepaper").style.display = "none";
          }
          if (tokenData.telegram == "") {
            document.getElementById("telegram").style.display = "none";
          }
          if (tokenData.twitter == "") {
            document.getElementById("twitter").style.display = "none";
          }
          if (tokenData.email == "") {
            document.getElementById("email").style.display = "none";
          }
          if (tokenData.smartContractAudit == "") {
            document.getElementById("audited").style.display = "none";
          }
          if (tokenData.kycVerified == "") {
            document.getElementById("verified").style.display = "none";
          }
          if (tokenData.youtube == "") {
            document.getElementById("youtube").style.display = "none";
          }
        })
        .catch((err) => console.log(err))
      : console.log("Please install MetaMask");
  }, []);

  useEffect(() => { });

  function buyButtonPressed() {
    let value = document.getElementById("quantity").value;
    buyToken(value);
  }

  function validateExchangeAmount(e) {
    // document.getElementById("error-text").style.display = "none";
    // document.getElementById("notice-text").style.display = "none";
    let value = document.getElementById("quantity").value;
    let walletBalance = balance_ / 10 ** 18;
    let minPurchase = minPurchase_ / 10 ** 18;
    let maxPurchase = maxPurchase_ / 10 ** 18;
    var valid = true;
    if (minPurchase_ == 'undefined') {
      minPurchase_ = 0
    }
    if (maxPurchase_ == 'undefined') {
      maxPurchase_ = 0
    }
    if (value > walletBalance) {
      document.getElementById("quantity").value = Number(
        walletBalance.toString().slice(0, 6),
      );
      value = document.getElementById("quantity").value;
      document.getElementById("notice-text").innerHTML =
        "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol;
      document.getElementById("notice-text").style.display = "flex";
      validateExchangeAmount();
    } else if (value < minPurchase) {
      valid = false;
      document.getElementById("error-text").innerHTML =
        "minimum exchnage amount is " + minPurchase + " BNB";
      document.getElementById("error-text").style.display = "flex";
      document.getElementById("buy-button").disabled = true;
      document.getElementById("buy-button").style.background = "black";
      document.getElementById("buy-button").style.boxShadow = "none";
      document.getElementById("buy-button").style.cursor = "not-allowed";
    } else if (value > maxPurchase) {
      valid = false;
      document.getElementById("error-text").innerHTML =
        "maximun exchnage amount is " + maxPurchase + " BNB";
      document.getElementById("error-text").style.display = "flex";
    }
    if (valid && walletBalance > minPurchase) {
      document.getElementById("notice-text").innerHTML =
        "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol;
      document.getElementById("notice-text").style.display = "flex";
      document.getElementById("buy-button").disabled = false;
      document.getElementById("buy-button").style.background =
        "linear-gradient(to bottom, rgb(255,180,60),rgb(146, 90, 0))";
      document.getElementById("buy-button").style.boxShadow =
        "0px 0px 5px rgb(255,180,60)";
      document.getElementById("buy-button").style.cursor = "pointer";
      document.getElementById("buy-button").style.color = "black";
    }
  }

  function buyToken(amount) {
    let _price = web3.utils.toWei(amount);

    let tx = {
      from: address,
      to: contractAddress,
      value: web3.utils.numberToHex(_price),
    };
    let txHash = ethereum
      .request({
        method: "eth_sendTransaction",
        params: [tx],
      })
      .then((hash) => {
        alert("Transaction hash: " + hash);
      })
      .catch((err) => console.log(err));

    return txHash;
  }

  bscscanTokenUrl_ = "https://bscscan.com/token/" + tokenData.token;
  bscscanContractUrl_ =
    "https://bscscan.com/address/" + tokenData.presaleContract;
  tokenImageUrl_ = tokenData.tokenIconURL;
  // audited_ = tokenData.smartContractAudit;
  // verified_ = tokenData.kycVerified;

  var zeros = "";
  for (var i = 0; i < tokenData.totalSupplyNumberOfZeros; i++) {
    zeros += "0";
  }
  // totalSupply_ = tokenData.totalSupplyInitial + zeros;

  zeros = "";
  for (var j = 0; j < tokenData.tokenForPresaleNumberOfZeros; j++) {
    zeros += "0";
  }
  // tokenForPresale_ = tokenData.tokenForPresaleInitial + zeros;

  useEffect(() => {
    percentage_ = localStorage.getItem("percentage");
  });

  function copyAddress() {
    var copyText = document.getElementById("contract-address");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Address Copied to Clipboard");
  }

  return (
    <div className="mt-6 w-full overflow-hidden px-[15px] py-[44px] md:mt-0 md:pr-[60px] xl:px-0">
      <div className="relative mx-auto max-w-[450px] md:ml-auto md:mr-0">
        <img
          className="absolute flex h-[500px] w-full max-w-[inherit] rotate-[-15deg] flex-col items-center justify-center opacity-[0.5] md:h-[550px]"
          src="/images/buycoin-bg.png"
          alt="buy coin bg"
        ></img>
        <div
          className="relative flex w-full max-w-[inherit] flex-col items-center justify-center px-5"
          style={{
            borderRadius: "30px",
            background: "url('/images/buycoin-bg.png')",
            backgroundSize: "cover",
            transform: "rotate(0.059deg)",
            flexShrink: 0,
            paddingBottom: "47px",
          }}
          id="presale-container"
        >
          <div className="flex w-full justify-between py-[30px] md:px-[35px]">
            <div className="flex gap-x-3">
              <div className=" h-[50px] w-[50px] rounded-full bg-zinc-300 opacity-20"></div>
              <div className="flex flex-col">
                <div className="text-xl font-bold text-white">TAKCEX</div>
                <div className="text-[13px] font-medium text-white opacity-60">
                  KDT/BNB
                </div>
                <a
                  target="_blank"
                  href="https://bscscan.com/token/0xe1F8787b35f76C7C138c8330BE86ada000006c68"
                  className=" flex w-full items-center  text-xs font-semibold text-blue-400 underline"
                >
                  <p className=""> View on BSCSCAN</p>
                  <img
                    className="relative h-5 w-5"
                    src="/icons/external-link.svg"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-y-[10px] sm:w-1/4">
              <a
                target="_blank"
                href="https://github.com/kredict/audit/blob/main/kredictaudit.pdf"
                className="inline-flex h-[30px] w-full items-center justify-start gap-1 rounded-[76px] bg-amber-300 bg-opacity-20 px-2.5 py-[3px] sm:w-24"
              >
                <div className="flex items-center justify-center sm:h-[22px] sm:w-[22px]">
                  <img
                    className="relative sm:h-[22px] sm:w-[22px]"
                    src="/icons/flash.svg"
                  />
                </div>
                <div className="text-xs font-semibold leading-tight text-amber-300">
                  Audited
                </div>
              </a>
              <a
                target="_blank"
                href="https://github.com/kredict/audit/blob/main/kredictkyc.pdf"
                className="inline-flex h-[30px] w-full items-center justify-start gap-1 rounded-[76px] bg-lime-300 bg-opacity-20 px-2.5 py-[3px] hover:bg-lime-400 hover:bg-opacity-30 sm:w-24"
              >
                <div className="flex h-[22px] w-[22px] items-center justify-center">
                  <img
                    className="relative h-[22px] w-[22px]"
                    src="/icons/verify.svg"
                  />
                </div>
                <div className="text-xs font-semibold leading-tight text-lime-300">
                  Verified
                </div>
              </a>
            </div>
          </div>
          <div className="h-[0px] w-full border border-lime-200 opacity-30 sm:w-[380px]"></div>

          <div className="flex w-full flex-col items-center gap-y-5 md:px-0">
            <div className="h-2.5 w-[181px] rounded-bl-[10px] rounded-br-[10px] bg-zinc-300"></div>

            <div className="flex h-[41px] justify-between gap-x-5 md:w-[380px]">
              <div className="flex h-[41px] shrink grow basis-0 rounded-[10px] border border-white bg-opacity-30 px-[41px] py-2 hover:cursor-pointer hover:border hover:border-rose-400 hover:bg-rose-400">
                <div className="inline-flex items-center justify-start gap-3">
                  <img
                    className="relative sm:h-[25px] sm:w-[25.02px]"
                    src="icons/bnb.svg"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-base font-semibold text-white">
                      BNB
                    </div>
                    <div className="text-[10px] font-normal uppercase text-white">
                      bep20
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-[41px] shrink grow basis-0 rounded-[10px] border border-white bg-opacity-30 px-[41px] py-2 hover:cursor-pointer hover:border hover:border-rose-400 hover:bg-rose-400">
                <div className="flex items-center justify-center gap-x-3">
                  <img
                    className="relative sm:h-[25px] sm:w-[25.02px]"
                    src="icons/usdt.svg"
                    alt="USDT Icon"
                  />

                  <div className="flex-col items-center justify-center">
                    <div className="text-base font-semibold text-white">
                      USDT
                    </div>
                    <div className="text-[10px] font-normal uppercase text-white">
                      bep20
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[72px] w-full flex-col gap-1.5 rounded-xl border-2 border-white border-opacity-10 px-3 py-2 md:w-full">
              <div className="text-sm font-medium leading-tight text-white opacity-80">
                Exchange Quanity
              </div>

              <div className="flex items-center justify-between">
                <input
                  onChange={validateExchangeAmount}
                  id="quantity"
                  type="number"
                  className="custom-width bg-transparent text-[22px] font-semibold leading-normal text-white opacity-20 sm:w-auto"
                  placeholder="00"
                />
                <div className="flex h-[26px] w-[60px] items-center justify-center gap-2.5 rounded-[5px] bg-blue-400 bg-opacity-20 p-2.5 sm:w-auto">
                  <div className="text-base  font-semibold leading-normal text-blue-400">
                    MAX
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end gap-x-2">
              <span className="text-sm font-medium leading-tight text-white text-opacity-50">
                Balance:
              </span>
              <span className="flex text-sm font-medium leading-tight text-white">
                <p
                  id="balance-text"
                  className="mr-[2px] text-sm font-bold leading-tight text-white"
                ></p>
                BNB
              </span>
            </div>

            <small id="notice-text" className={styles.noticeText}></small>
            <small id="error-text" className={styles.errorText}></small>
            <button
              onClick={buyButtonPressed}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-5 py-3 text-base font-semibold leading-tight text-slate-950 shadow"
            >
              Buy
            </button>

            <div className="inline-flex h-[50px] w-[164px] flex-col items-center justify-start gap-2.5">
              <div className="text-base font-normal leading-tight text-white">
                1BNB = <span id="rate">1000</span> KDT
              </div>
              <div>
                <p className={styles.lowerStatCurrency} id="amount-raised"></p>

                <span className="text-base font-normal leading-tight text-white text-opacity-50">
                  Hard Cap
                </span>
                <span className="text-base font-normal leading-tight text-white">
                  <span id="hard-cap"> 4000</span> BNB
                </span>
              </div>

              {/* <div className={styles.barBlockPrime}>
              <div className={styles.upperStatLine}>
                <p className={styles.upperStatCode} id="presale-status"></p>
                <p
                  className={styles.upperStatPercentage}
                  id="target-percentage"
                ></p>
              </div>
              <div className={styles.barActualPrime}>
                <div className="barRatePrime" id="bar-percentage"></div>
              </div>
              <style jsx>
                {`
                  .barRatePrime {
                    height: 100%;
                    width: 0%;
                    width: ${percentage_}%;
                    border-radius: 10px;
                    background: linear-gradient(
                      to bottom,
                      rgb(255, 180, 60),
                      rgb(146, 90, 0)
                    );
                  }
                `}
              </style>
            </div> */}
            </div>

            <a
              target="_blank"
              href="https://bscscan.com/address/0x509e2AfCAF74E6Ad87A9bDD1a80a60Ee630Ae969"
              className="text-base font-medium leading-tight text-blue-400"
            >
              View Presale smart contract address
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCoin;
