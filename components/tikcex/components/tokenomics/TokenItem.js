import React from "react";


TokenItem.propTypes = {};

function TokenItem({ title, desc }) {
  return (
    <>
      <div className="inline my-4 md:my-0 md:hidden h-[0px] border border-white opacity-10 md:w-[990px]"></div>

      <div
        key={`${title}${desc}`}
        className="flex flex-col items-center justify-between gap-y-3 md:h-[42px] md:w-[276px] md:items-start md:gap-y-[18px] md:text-left"
      >
        <div className="text-sm font-medium text-rose-400 opacity-80">{title}</div>
        <div className="text-xl font-medium text-white opacity-90">{desc}</div>
      </div>
    </>
  );
}

export default TokenItem;
