import React from "react";


MeetTikcexIcon.propTypes = {};

function MeetTikcexIcon({ icon, title }) {
  return (
    <div className="flex flex-col items-start">
      {/* <div className="w-[60px] h-[60px] bg-rose-400 bg-opacity-5 rounded-[15px] shadow-inner border-2 flex justify-center items-center"> */}
      {/* <div className="w-10 h-10 flex justify-center items-center"> */}
      <img className="w-[60px] relative" src={icon} />
      {/* </div> */}
      {/* </div> */}
      <div className="w-full text-rose-400 text-lg font-medium leading-[30px]">
        {title}
      </div>
    </div>
  );
}

export default MeetTikcexIcon;
