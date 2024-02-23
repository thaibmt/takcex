import React from "react";


Footer.propTypes = {};

const footerIcons = [
  {
    iconSrc: "footer/Mail.svg",
    url: "#",
  },
  {
    iconSrc: "footer/Youtube.svg",
    url: "#",
  },
  {
    iconSrc: "footer/Instagram.svg",
    url: "#",
  },
  {
    iconSrc: "footer/Twitter.svg",
    url: "#",
  },
  {
    iconSrc: "footer/Telegram.svg",
    url: "#",
  },
];

function Footer(props) {
  return (
    <div className="relative flex justify-center py-[50px] mt-[15px]">
      <div className="absolute bottom-0 z-[-1] w-full h-[721px] flex items-end justify-center overflow-hidden">
        <img src="/images/contact-bg.png" alt="contact bg" className="object-cover object-bottom h-full" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-y-[20px] px-[15px] md:gap-y-0 xl:px-[15px] lg:max-w-[1294px] max-w-full w-full">
        <div className="flex justify-between md:gap-x-[15px] gap-x-[10px]">
          <a href="#">
            <img
              className="relative rounded-lg h-10 backdrop-blur-[42px] sm:w-[120px]"
              src="/icons/App_Store_badge.svg"
            />
          </a>
          <a href="#">
            <img
              className="relative rounded-lg h-10 backdrop-blur-[42px] sm:w-[120px]"
              src="/icons/Play_Store_badge.svg"
            />
          </a>
        </div>

        <div className="text-center font-normal text-white opacity-70 md:text-base text-[14px] leading-[26px]">
          © Copyright 2024 Takcex | All Rights Reserved.
        </div>

        <div className="flex gap-x-[10px]">
          {footerIcons.map((icon, index) => {
            return (
              <div
                key={`${index}${icon.iconSrc}`}
                className="inline-flex h-[40px] w-[40px] items-center justify-center"
              >
                <img className="h-full w-full" src={icon.iconSrc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
