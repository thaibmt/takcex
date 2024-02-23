import React from "react";


CurrentFeatureItem.propTypes = {};

function CurrentFeatureItem({ iconSrc, title, desc }) {
  return (
    <div className="flex items-start md:flex-row flex-col justify-start md:gap-x-[15px] gap-y-[10px]">
      {/* <div className="w-[60px] h-[60px] bg-lime-300 bg-opacity-5 rounded-[15px] shadow-inner border-2 flex items-center justify-center"> */}
      {/* <div className="w-[60px] h-[60px]"> */}
      <img className="w-[60px]  relative" src={iconSrc} />
      {/* </div> */}
      {/* </div> */}

      <div className="flex flex-col gap-y-[10px]">
        <div className="text-white text-base font-semibold capitalize leading-normal">
          {title}
        </div>
        <div className="opacity-70 text-white text-[13px] font-normal leading-tight">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default CurrentFeatureItem;
