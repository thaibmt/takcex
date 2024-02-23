import Link from "next/link";

function Intro() {
  function focusPresale() {
    document.getElementById("presale-container").style.boxShadow =
      "0px 0px 10px rgb(255,180,60)";
  }

  return (
    <div className="md:w-[40%] w-full xl:px-0 px-[15px]">
      <div className="flex flex-col gap-y-4 md:mb-[50px] mb-[40px]">
        <div
          className="md:text-[125px] md:leading-[152px] text-[75px] leading-[91px] font-bold w-fit"
          style={{
            backgroundClip: "text",
            background:
              "linear-gradient(93.23deg, #CEFFB3 0%, #CEFFB3 25.2%, #FFA6B8 76.74%, #FFA6B8 96.24%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TAKCEX
        </div>
        <div className="opacity-70 text-white  md:text-lg text-base font-normal md:leading-[29px] leading-[27px]">
          TAKCEX is a decentralized launchpad that allows users to launch their
          token and create their initial token sale with staking benefits to
          their holders and they don't require any Coding Knowledge For this.
        </div>
      </div>

      <div className="flex justify-start gap-x-[15px]">
        <button className="w-[190px] h-[55px] py-3 bg-white bg-opacity-10 rounded-xl shadow justify-center items-center gap-2.5 inline-flex">
          <Link href="#whitepaper">
            <div className="text-lime-300 text-lg font-semibold  leading-tight">
              Whitepaper
            </div>
          </Link>
          <div className="w-6 h-6 relative">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="PDF File">
                <path
                  id="Vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 1.50049C10.2348 1.50054 9.98049 1.60593 9.793 1.79347L3.793 7.79317C3.60545 7.98066 3.50006 8.23496 3.5 8.50014V20.4995C3.5 21.2951 3.81607 22.0582 4.37868 22.6208C4.94129 23.1833 5.70435 23.4994 6.5 23.4994H7.5C7.76522 23.4994 8.01957 23.394 8.20711 23.2065C8.39464 23.019 8.5 22.7646 8.5 22.4994C8.5 22.2342 8.39464 21.9799 8.20711 21.7924C8.01957 21.6048 7.76522 21.4995 7.5 21.4995H6.5C6.23478 21.4995 5.98043 21.3941 5.79289 21.2066C5.60536 21.0191 5.5 20.7647 5.5 20.4995V9.50009H10.5C10.7652 9.50009 11.0196 9.39474 11.2071 9.20721C11.3946 9.01968 11.5 8.76534 11.5 8.50014V3.50039H18.5C18.7652 3.50039 19.0196 3.60574 19.2071 3.79327C19.3946 3.98079 19.5 4.23514 19.5 4.50034V11.5C19.5 11.7652 19.6054 12.0195 19.7929 12.2071C19.9804 12.3946 20.2348 12.4999 20.5 12.4999C20.7652 12.4999 21.0196 12.3946 21.2071 12.2071C21.3946 12.0195 21.5 11.7652 21.5 11.5V4.50034C21.5 3.70473 21.1839 2.94171 20.6213 2.37912C20.0587 1.81654 19.2956 1.50049 18.5 1.50049H10.5ZM9.5 7.50019H6.914L9.5 4.91432V7.50019ZM10.808 24.0624C10.966 24.2574 11.195 24.4163 11.485 24.4753C11.755 24.5313 11.992 24.4803 12.156 24.4203C12.458 24.3103 12.696 24.1034 12.85 23.9504C13.094 23.7104 13.35 23.3844 13.603 23.0164C14.713 22.6334 16.271 22.2815 17.787 22.0595C18.63 21.9365 19.417 21.8595 20.079 21.8335C20.341 22.1435 20.58 22.4084 20.779 22.6094C20.903 22.7354 21.041 22.8664 21.177 22.9664C21.237 23.0114 21.352 23.0914 21.499 23.1484C21.576 23.1784 22.079 23.3704 22.542 22.9964C22.816 22.7764 23.068 22.5294 23.244 22.2525C23.421 21.9725 23.588 21.5465 23.449 21.0625C23.313 20.5875 22.959 20.3225 22.698 20.1846C22.4333 20.0534 22.15 19.9637 21.858 19.9186C21.5818 19.8724 21.3029 19.8441 21.023 19.8336C20.3186 18.95 19.6416 18.045 18.993 17.1197C18.4269 16.3207 17.8925 15.4998 17.391 14.6588C17.436 14.4658 17.473 14.2818 17.503 14.1059C17.553 13.8059 17.583 13.5039 17.576 13.2209C17.5759 12.9094 17.509 12.6015 17.38 12.3179C17.2927 12.1316 17.1659 11.9665 17.0084 11.8341C16.8509 11.7017 16.6665 11.6051 16.468 11.551C16.066 11.443 15.683 11.524 15.389 11.633C14.936 11.8 14.687 12.173 14.601 12.5359C14.5451 12.8059 14.5495 13.0849 14.614 13.3529C14.708 13.7909 14.927 14.2958 15.18 14.7888C15.202 14.8328 15.225 14.8778 15.249 14.9218C15.01 15.7068 14.658 16.6317 14.239 17.5897C13.626 18.9926 12.905 20.3835 12.285 21.3775C11.862 21.5545 11.471 21.7575 11.175 21.9915C10.973 22.1505 10.702 22.4084 10.572 22.7864C10.413 23.2504 10.526 23.7144 10.808 24.0624ZM12.376 23.5944L12.382 23.5874C12.3802 23.5899 12.3782 23.5922 12.376 23.5944ZM17.497 20.0806C16.683 20.2006 15.845 20.3565 15.05 20.5385C15.404 19.8516 15.753 19.1196 16.072 18.3906C16.252 17.9777 16.427 17.5577 16.589 17.1427C16.836 17.5167 17.094 17.8957 17.356 18.2677C17.7528 18.8334 18.1596 19.3921 18.576 19.9436C18.219 19.9816 17.856 20.0286 17.497 20.0806ZM16.561 12.8839V12.8819V12.8839Z"
                  fill="#A8FF78"
                />
              </g>
            </svg>
          </div>
        </button>
        <button
          onClick={focusPresale}
          className="w-[190px] h-[55px] py-3 bg-white bg-opacity-10 rounded-xl shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-rose-400 text-lg font-semibold  leading-tight">
            Buy Now
          </div>
          <div className="w-6 h-6 relative">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="coins-03">
                <path
                  id="Icon"
                  d="M10.101 4.5C11.3636 3.26281 13.0927 2.5 15 2.5C18.866 2.5 22 5.63401 22 9.5C22 11.4073 21.2372 13.1365 19.9999 14.399M16 15.5C16 19.366 12.866 22.5 9 22.5C5.13401 22.5 2 19.366 2 15.5C2 11.634 5.13401 8.5 9 8.5C12.866 8.5 16 11.634 16 15.5Z"
                  stroke="#F9898E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Intro;
