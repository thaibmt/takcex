import React from "react";


VisionMissionItem.propTypes = {};

function VisionMissionItem({ imgSrc, title, desc }) {
  return (
    <div className="flex flex-col gap-y-5">
      <img className="rounded-[20px] px-[42.5px] sm:px-0" src={imgSrc} />

      <div className="flex flex-col gap-y-3">
        <div className="text-center text-[25px] font-semibold capitalize text-white">
          {title}
        </div>
        <div className="text-center text-sm font-normal leading-snug text-white opacity-70">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default VisionMissionItem;
