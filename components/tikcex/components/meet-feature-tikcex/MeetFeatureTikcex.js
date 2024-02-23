import React from "react";

import MeetTikcexIcon from "./MeetTikcexIcon";

MeetFeatureTikcex.propTypes = {};

function MeetFeatureTikcex(props) {
  return (
    <div
      id="about-us"
      className="md:pt-[85px] pt-[35px] flex sm:mx-auto flex-col md:gap-x-[80px] sm:gap-x-[30px] items-center md:flex-row md:items-start md:max-w-[1240px] w-full xl:px-0 px-[15px]"
    >
      <div className="relative mx-auto md:w-full w-[80%] max-w-[528px] md:min-w-[unset] min-w-[350px] md:mb-0 mb-[30px]">
        <img
          className="w-full block"
          src="/images/future-img.png"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-10 md:ml-5 md:items-start md:justify-start md:w-full w-[350px]">
        <div className="flex flex-col gap-y-[15px]">
          <div className="title text-3xl font-semibold capitalize text-white md:text-[45px] md:leading-[70px]">
            Meet Future TAKCEX
          </div>
          <div className="text-lg font-normal leading-[30px] text-white opacity-70 md:w-[519px]">
            We will strive to make TAKCEXChain as one of the prominent way
            Blockchain will be used in different areas of business and economy
            as well as social welfare and other major areas of technology
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 w-full justify-between flex-wrap gap-[25px] md:flex-nowrap md:gap-y-0">
          <MeetTikcexIcon
            icon={"/icons/meet-feature-tikcex/box.svg"}
            title={"TAKCEXChain Blockchain"}
          />
          <MeetTikcexIcon
            icon={"/icons/meet-feature-tikcex/wallet.svg"}
            title={"Multicurrency Wallet"}
          />
          <MeetTikcexIcon
            icon={"/icons/meet-feature-tikcex/hierarchy-3.svg"}
            title={"Defi Exchange"}
          />
        </div>
      </div>
    </div>
  );
}

export default MeetFeatureTikcex;
