import React from "react";

import FeatureProductCol1 from "./sub-feature-product/FeatureProductCol1";
import FeatureProductCol2 from "./sub-feature-product/FeatureProductCol2";

FutureProducts.propTypes = {};

function FutureProducts(props) {
  return (
    <div className="relative">
      <div className="mx-auto pt-[45px] md:pt-[103px] flex md:max-w-[1240px] sm:max-w-[350px] w-full flex-col items-center gap-y-[25px] md:gap-y-10 relative">
        <div className="flex w-full h-6 items-center justify-between gap-[10px] md:gap-[25px] md:px-4">
          <div className="w-full h-[0px] border border-lime-300 opacity-40 md:w-[413px]"></div>
          <div
            className="text-sm font-semibold uppercase tracking-[4.2px] text-lime-300 md:text-xl md:tracking-[6px] whitespace-nowrap"
            style={{
              backgroundClip: "text",
              background:
                "var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Future Products
          </div>
          <div className="w-full h-[0px] border border-rose-400 opacity-40 md:w-[413px]"></div>
        </div>
        <div className="flex justify-between md:flex-row flex-col md:items-start items-center md:pl-[8%] md:px-0 px-[15px] ">
          <FeatureProductCol1 />
          <FeatureProductCol2 />
          <div className="relative flex-grow md:mt-0 mt-[52px] sm:w-auto w-[350px]">
            <img className="relative md:translate-x-0 translate-x-[-5%]" src="/Group.svg" />
          </div>
        </div>
      </div>
      <div className="absolute sm:top-[50%] top-[70%] w-full overflow-x-hidden flex sm:justify-end justify-center z-[-1]">
        <img
          src="/images/future-bg.png"
          alt="Future Image"
          className="2xl:w-[30%] xl:w-[35%] md:w-[45%] sm::w-[60%] min-w-[600px] w-full object-contain  xl:translate-x-0 sm:translate-x-[10%] translate-x-0"
        />
      </div>
    </div>
  );
}

export default FutureProducts;
