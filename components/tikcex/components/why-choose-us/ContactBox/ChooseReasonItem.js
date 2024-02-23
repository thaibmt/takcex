import React from "react";


ChooseReasonItem.propTypes = {};

function ChooseReasonItem({ iconSrc, title, desc }) {
  return (
    <div className="flex sm:gap-x-[25px] gap-x-[15px] items-start">
      <div className="min-w-[60px] h-[80px] justify-center items-center flex relative">
        <img
          className="relative"
          src={iconSrc}
          layout="fill"
          alt={`${title} image`}
        />
      </div>

      <div className="flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-white text-xl font-medium capitalize leading-7">
          {title}
        </div>
        <div className="opacity-70 text-white text-sm font-normal leading-snug">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default ChooseReasonItem;
