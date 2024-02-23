import CardPosIcon from "../../react-icons/CardPosIcon";
import ShareIcon from "../../react-icons/ShareIcon";
import SignalIcon from "../../react-icons/SignalIcon";
import { shortenToken } from "../../../../utils/handle-token.util";
import FeatureCard from "./FeatureCard";

function Contract() {
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

  function copyAddress() {
    var copyText = document.getElementById("contract-address");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Address Copied to Clipboard");
  }
  const imageURL = "/cover.png";

  return (
    <div className="relative">
      <div className="relative z-[2] mt-10 flex w-full flex-col items-center justify-center px-[15px] sm:mx-auto md:max-w-[1240px] xl:px-0">
        <div className="w-[345px] text-center text-xl font-medium leading-[35px] text-white md:w-[538px] md:text-[25px] md:leading-10">
          You can buy KDT also by sending BNB directly to Presale Contract
        </div>

        <div className="mt-[22px] grid grid-cols-2 justify-center gap-x-[10px] md:gap-x-5">
          <button className="inline-flex h-9 items-center justify-center gap-2 rounded-[100px] border border-white border-opacity-10 bg-white bg-opacity-10 px-4 py-1.5">
            <div className="h-5 w-5 rounded-full bg-white bg-opacity-20"></div>
            <div className="flex-grow text-sm font-medium  uppercase leading-normal tracking-widest text-white">
              Buy KDT
            </div>
          </button>

          <button
            onClick={copyAddress}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-[100px] border border-white border-opacity-10 bg-white bg-opacity-10 px-4 py-1.5"
          >
            <div
              id="contract-address"
              className="text-sm font-medium uppercase  leading-normal text-white"
            >
              {shortenToken(tokenData.presaleContract)}
            </div>
            <div className="flex h-[22px] min-w-[22px] items-center justify-center">
              <img
                className="relative h-[22px] w-[22px]"
                src="/icons/copy.svg"
              />
            </div>
          </button>
        </div>

        <div className="mt-[40px] flex flex-col gap-y-[10px] sm:mt-[55px] md:flex-row md:gap-x-10 md:gap-y-0">
          <FeatureCard
            icon={<ShareIcon />}
            title={"Decentralised system"}
            description={
              "A technical failure can paralyze all affiliate networks on a centralized platfotrm, until the cause is detected and rectified the system."
            }
          />
          <FeatureCard
            icon={<CardPosIcon />}
            title={"Banks payment systems"}
            description={
              "Up to 45% of a merchant's budget is spent on commissions charged by a number of brokers, including banks, payment systems."
            }
          />
          <FeatureCard
            icon={<SignalIcon />}
            title={"CPA networks"}
            description={
              "Affiliate networks have to pay for using existing platforms on a monthly basis or spend money on developing proprietary platforms."
            }
          />
        </div>
      </div>
      <img
        src="/images/contract-bg.png"
        alt="Contract Image"
        className="sm::w-[60%] absolute left-[-30%] top-[18%] w-full object-contain sm:left-[-10%] sm:top-[15%] md:top-[5%] md:w-[45%] xl:left-0 xl:w-[35%] 2xl:w-[30%] "
      />
    </div>
  );
}

export default Contract;
