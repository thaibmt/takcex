import React from "react";

import ReasonList from "../../../../../data/reasonList.json";
import ChooseReasonItem from "./ChooseReasonItem";

ContactBox.propTypes = {};

function ContactBox(props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 sm:gap-x-10 gap-y-[30px] justify-center mt-[30px] sm:mt-20 relative z-[2]">
      <div className="min-w-[40%]">
        <div className="w-[80%] max-w-[418px] md:mr-0 mx-auto backdrop-blur-[21px] rounded-full overflow-hidden">
          <img
            src="/Earth.svg"
            alt="Global Image"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        {ReasonList.map((reason, index) => {
          const { iconSrc, title, desc } = reason;
          return (
            <ChooseReasonItem
              key={index}
              iconSrc={iconSrc}
              title={title}
              desc={desc}
            />
          );
        })}

        <button className="w-[200px] h-[50px] px-[30px] py-3 bg-gradient-to-r from-lime-300 to-rose-400 rounded-xl shadow justify-center items-center gap-2.5 inline-flex">
          <span className="text-slate-950 text-lg font-semibold leading-tight">
            Contact us
          </span>

          <img
            className="w-6 h-6 relative"
            src="/icons/arrow-narrow-right.png"
          />
        </button>
      </div>
    </div>
  );
}

export default ContactBox;
