import React from "react";

import TokenItem from "./TokenItem";
import { tokenomicsList } from "./mock";
import Image from "next/image";

Tokenomics.propTypes = {};

function Tokenomics(props) {
  return (
    <div id="token" className="flex justify-center gap-y-[25px] md:pt-[85px] pt-[60px] relative overflow-hidden">
      <div className="z-[2] flex w-full flex-col px-[15px] md:max-w-[1240px]">
        <div className="flex flex-col items-center gap-y-[20px] sm:gap-y-[25px]">
          <div
            className="text-[30px] md:text-[45px] font-semibold capitalize md:leading-[70px] leading-[37px] text-white"
            style={{
              background:
                "var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tokenomics
          </div>

          <div className="flex flex-col md:gap-y-[25px]">
            {tokenomicsList.map((token, index) => {
              return (
                <div key={index}>
                  <div className="hidden h-[0px] border border-white opacity-10 md:inline md:w-[990px]"></div>
                  <div
                    key={index}
                    className="sm:mb-[25px] flex flex-col justify-between md:flex-row md:gap-x-[70px]"
                  >
                    {token.map((item, index) => {
                      const { title, desc } = item;
                      return (
                        <TokenItem
                          key={`${title}${desc}`}
                          title={title}
                          desc={desc}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-[13px] mt-[5px] sm:mt-0 font-normal leading-tight text-white opacity-50">
            *All above Data is only for Sample
          </div>
        </div>

        <div className="mt-[30px] grid w-full grid-cols-1 justify-between gap-y-[15px] px-[15px] md:mt-0 md:grid-cols-2 md:flex-row md:gap-x-[35px] md:px-0">
          <div className="relative aspect-[1/0.9] w-full sm:aspect-[1/0.5] md:aspect-square">
            <Image
              src="/images/tokenomic-chart.svg"
              alt="TokenomicChart Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-[1/0.9] w-full sm:aspect-[1/0.5] md:aspect-square">
            <Image
              src="/images/fund-allocation-chart.svg"
              alt="FundAllocationChart Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-[-1] sm:w-full w-[140%] max-w-[1024px] h-full">
        <img src="/images/tokenomics-bg.png" alt="Tokenomics bg" className="sm:w-full w-full h-full object-contain object-center" />
      </div>
    </div>
  );
}

export default Tokenomics;
