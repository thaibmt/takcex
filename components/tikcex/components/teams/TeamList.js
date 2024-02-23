import React from "react";

import { teamList } from "./mock";
import MemberItem from "./MemberItem";

TeamList.propTypes = {};
const imageURL = "/teams/team-bg.png";

function TeamList(props) {
  return (
    <div
      id="team"
      className="md:pt-[80px] pt-[25px] relative"
    >
      <div className="absolute top-0 z-[-1] w-full h-full flex items-start justify-center overflow-hidden">
        <img src="/images/team-bg.png" alt="Team bg" className="sm:block hidden object-contain object-top 2xl:min-w-full md:min-w-[120%] sm:min-w-[130%] 2xl:h-auto h-full" />
        <img src="/images/team-bg-mb.png" alt="Team bg" className="sm:hidden block object-fill w-full h-full" />
      </div>

      <div
        className="font-semibold text-center capitalize text-[30px] md:text-[45px] md:leading-[70px] leading-[37px] sm:text-[45px]"
        style={{
          background:
            "var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Team
      </div>

      <div className="flex sm:justify-center justify-around md:gap-x-[80px] sm:gap-x-[40px] sm:gap-y-0 sm:flex-row sm:items-start flex-col items-center gap-y-[15px] md:mt-[25px] mt-[12px] sm:w-[80%] w-full mx-auto">
        {teamList.map((member, index) => {
          const { avatarSrc, name, position, desc } = member;
          return (
            <MemberItem
              avatarSrc={avatarSrc}
              name={name}
              position={position}
              desc={desc}
              key={`${index}${name}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamList;
