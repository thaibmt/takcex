import styles from "./styles.module.css";
import roadmapList from "../../../../data/roadmap.json"
import RoadmapItem from "./Item";

function Roadmap() {
    return (
        <div className={`pt-[80px] flex justify-center xl:px-0 px-[15px] relative ${styles.roadmap}`} id="roadmap">
            <div className="flex justify-between items-center md:max-w-[1240px] w-full z-[2] relative">
                <div>
                    <h2 className="text-white text-[30px] md:text-[45px] md:leading-[70px] leading-[37px] capitalize font-bold text-center title">
                        Roadmap
                    </h2>
                    <div className="relative mt-[25px]">
                        <div className="absolute top-0 sm:left-[50%] left-0 sm:translate-x-[-50%] translate-x-[8.5px] opacity-[0.5] w-[2px] h-full" id={styles.line}></div>
                        <div className="relative">
                            {
                                roadmapList.map((item, idx) => (
                                    <RoadmapItem key={idx} item={item} dir={idx % 2 === 1 ? "left" : "right"} />
                                ))
                            }
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 z-[-1] w-full h-full flex items-end justify-center overflow-hidden">
                <img src="/images/roadmap-bg.png" alt="Roadmap bg" className="sm:block hidden object-contain 2xl:object-bottom object-center 2xl:min-w-full md:min-w-[120%] sm:min-w-[130%] 2xl:h-auto h-full" />
                <img src="/images/roadmap-bg-mb.png" alt="Roadmap bg" className="sm:hidden block object-fill w-full h-full" />
            </div>
        </div>
    );
}

export default Roadmap;
