import React from "react";


WhitePaper.propTypes = {};

function WhitePaper(props) {
  return (
    <div
      id="whitepaper"
      className="xl:px-0 px-[15px] mt-[90px] flex justify-center relative"
    >
      <div className="sm:max-w-[1240px] max-w-[350px] w-full z-[2] flex sm:flex-row flex-col items-center justify-between gap-x-[30px] sm:gap-y-0 md:flex-row md:px-[70px] md:py-[40px] sm:px-[40px] sm:py-[22px] p-[20px]"
        style={{
          borderRadius: "30px",
          background:
            "var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))",
        }}>
        <div className="flex flex-col items-start gap-y-[5px]">
          <div className="text-[25px] sm:text-[45px] font-semibold capitalize sm:leading-[70px] text-slate-950">
            Whitepaper
          </div>
          <div className="sm:max-w-[508px] text-lg font-medium leading-7 text-slate-950 opacity-70">
            Total of 1 quadrillion (1,000,000,000,000,000) TAKCEX will be minted
            through Smart contract and deployed through Binance Smart Chain
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[10px] sm:gap-x-[15px] md:min-w-[380px] sm:min-w-[340px] sm:mt-0 mt-[15px]">
          <button className="inline-flex h-[60px] whitespace-nowrap  items-center justify-center gap-2 sm:gap-2.5 rounded-xl bg-slate-950 px-[30px] sm:px-0 py-3 shadow">
            <div className="text-base md:text-lg font-semibold leading-tight text-white">
              Read Online
            </div>
            <img className="relative h-6 w-6" src="/icons/PDFFile.svg" />
          </button>

          <button className="inline-flex h-[60px] items-center justify-center gap-2 sm:gap-2.5 rounded-xl bg-slate-950 px-[30px] py-3 shadow">
            <div className="text-base md:text-lg font-semibold leading-tight text-white">
              Download
            </div>
            <img className="relative h-6 w-6" src="/icons/coins.svg" />
          </button>
        </div>
      </div>
      <div className="absolute top-[50%] z-[-1] w-full md:h-[252px] sm:h-[212px] h-[126px] flex items-end justify-center overflow-hidden">
        <img src="/images/Vector.png" alt="whitepaper bg" className="object-contain object-bottom sm:w-full min-w-[140%] h-full" />
      </div>
    </div>
  );
}

export default WhitePaper;
