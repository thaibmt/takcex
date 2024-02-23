import React from "react";

import CurrentFeatureItem from "./CurrentFeatureItem";

CurrentFeatureList.propTypes = {};

const currentFeatureItems = [
  {
    iconSrc: "/current-features/verify.svg",
    title: "High speed and low costs",
    desc: "Immediate funding without third-parties. Smart contracts autonomously perform funding - collect and release payments",
  },
  {
    iconSrc: "/current-features/bitcoin-convert.svg",
    title: "No more middle men",
    desc: "Transactions are verified by distributed nodes, and anyone can join or leave the network as they please without disrupting the network's ability to form consensus on transactions.",
  },
  {
    iconSrc: "/current-features/trade.svg",
    title: "Global p2p trade financing",
    desc: "The peer-to-peer architecture of blockchain allows all cryptocurrencies to be transferred worldwide, without the need of any middle-man or intermediaries or central server",
  },
  {
    iconSrc: "/current-features/shield-search.svg",
    title: "Protection from hacking",
    desc: "On a decentralized platform, all user accounts are independent; if one account is hacked, this won't breach the security of.",
  },
  {
    iconSrc: "/current-features/award.svg",
    title: "Fair deals only",
    desc: "Open-source smart contract ensures fair and transparent deals between merchants and affiliates",
  },
  {
    iconSrc: "/current-features/calendar-tick.svg",
    title: "Real-time database",
    desc: "Every Transaction and Updates are real time and directly pulled from Smart Contracts lying on Blockchain",
  },
  {
    iconSrc: "/current-features/dollar-circle.svg",
    title: "Cost effective",
    desc: "Scale economy through decentralization leading to significant decrease in transaction fees",
  },
  {
    iconSrc: "/current-features/magic-star.svg",
    title: "Easy entry and fair competition",
    desc: "Any one can join, and Fair for everyone without any partiality",
  },
];

const imageURL = "/current-features/bg-img.png";

function CurrentFeatureList(props) {
  return (
    <div className="flex justify-center relative">
      <div className="md:max-w-[1440px] w-full md:px-[100px] px-[15px] md:pt-[59px] pt-[10px] md:pb-[109px] pb-[80px]">
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[40px] gap-[15px] mt-[43px] sm:mt-20">
          {currentFeatureItems.map((item, index) => {
            const { iconSrc, title, desc } = item;
            return (
              <CurrentFeatureItem
                key={`${index}${title}`}
                iconSrc={iconSrc}
                title={title}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 z-[-1] w-full md:h-auto sm:h-[50%] h-auto flex items-end">
        <img src="/images/future-list-bg.png" alt="Future List bg" className="object-cover w-full md:h-auto sm:h-full h-auto sm:block hidden" />
        <img src="/images/future-list-bg-mb.png" alt="Future List bg" className="object-cover w-full md:h-auto sm:h-full h-auto sm:hidden block" />
      </div>
    </div>
  );
}

export default CurrentFeatureList;
