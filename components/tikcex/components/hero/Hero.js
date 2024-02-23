import BuyCoin from "./BuyCoin";
import Intro from "./Intro";

function Hero() {
    return <div
        className="pt-[140px] flex justify-center"
    >
        <img
            src="/images/hero-img.png"
            alt="Hero Image"
            className="absolute top-0 left-0 w-full sm:block hidden"
        />
        <img
            src="/images/hero-img-mb.png"
            alt="Hero Image"
            className="absolute top-0 left-0 w-full sm:hidden block"
        />
        <div className="flex flex-col md:flex-row justify-between items-center md:max-w-[1240px] w-full z-[2]">
            <Intro />
            <BuyCoin />
        </div>
    </div>;
}

export default Hero;