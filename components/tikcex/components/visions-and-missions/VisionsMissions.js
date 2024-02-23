import React from "react";

import VisionsMissionsItem from "./VisionMissionItem";

VisionsMissions.propTypes = {};

function VisionsMissions(props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-y-[25px] sm:gap-y-[35px] mt-20 md:max-w-[1440px] w-full xl:px-0 px-[15px]">
        <div className="text-white text-[30px] md:text-[45px] font-semibold capitalize md:leading-[70px] leading-[37px]"
          style={{
            background: 'var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Vision and Mission
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[25px] md:gap-x-10 md:max-w-[1240px] sm:max-w-[350px] w-full">
          <VisionsMissionsItem
            imgSrc={"/visions-missions/vm-1.png"}
            title={"Vision"}
            desc={
              "To be at the forefront of new era of technology and innovations which serves next generation of human life , so they can live with more freedom and less fear."
            }
          />
          <VisionsMissionsItem
            imgSrc={"/visions-missions/vm-2.png"}
            title={"Mission"}
            desc={
              "Up to 45% of a merchant's budget is spent on commissions charged by a number of brokers, including banks, payment systems."
            }
          />
          <VisionsMissionsItem
            imgSrc={"/visions-missions/vm-3.png"}
            title={"Solution"}
            desc={
              "We have planned a ecosystem of new solutions which will help users to save their assets as well as trade and use them for different services in the coming years. Also we will keep on researching on how we can reinvent the wheel in a way that blockchain can be used in most of the areas of day to day life and how it can be used for betterment of humankind and users of the technology."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default VisionsMissions;
