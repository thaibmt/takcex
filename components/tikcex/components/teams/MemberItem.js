import React from "react";


MemberItem.propTypes = {};

function MemberItem({ avatarSrc, name, position, desc }) {
  return (
    <div className="flex flex-col gap-y-[25px] max-w-[250px] sm:w-[25%] w-full">
      <div className="bg-zinc-700 rounded-[20px] justify-center items-center flex">
        <img className="rounded-[20px] w-full h-full object-cover" src={avatarSrc} />
      </div>
      <div className="flex flex-col gap-y-[15px] items-start justify-between">
        <div className="text-center text-white text-[25px] leading-[28px] font-semibold capitalize">
          {name}
        </div>
        <div className="text-[#F9898E] text-[15px] font-semibold leading-[25px]">
          {position}
        </div>
        <div className="opacity-70 text-white text-[14px] leading-[22px] font-normal">
          {desc}
        </div>
      </div>
    </div>
  );
}

export default MemberItem;
