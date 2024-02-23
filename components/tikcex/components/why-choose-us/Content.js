import React from "react";


Content.propTypes = {};

function Content(props) {
  return (
    <div className="flex flex-col gap-y-[15px] items-center">
      <div className="text-[30px] md:text-[45px] md:leading-[70px] leading-[37px] font-semibold capitalize title">
        Why choose us?
      </div>
      <div className="md:max-w-[90%] opacity-70 text-center text-rose-400 text-lg font-normal leading-[30px]">
        As we all know that any company thrives on its Mission and Vision and
        can only become successful when it gets support of the people who
        believe in their Mission and Vision. We have put forward our Vision of
        future in front of you and we are very passionate to make a difference
        for current and future generation of humanity.
      </div>
    </div>
  );
}

export default Content;
