import styles from "./styles.module.css"

function RoadmapItem({ item, dir }) {
    return <div className={`flex h-fit sm:w-[50%] w-full items-start sm:mb-[45px] mb-[10px] ${styles.item} ${dir === 'left' ? `sm:float-left sm:flex-row-reverse flex-row sm:translate-x-[10px] translate-x-0 ${styles.left}` : `sm:float-right sm:translate-x-[-11px] translate-x-0 ${styles.right}`}`}>
        <div className={`flex items-center sm:min-w-[18%] min-w-[10%] ${dir === 'left' ? "sm:flex-row-reverse flex-row" : ""} ${styles.cursor}`}>
            <div className={`md:w-[22px] md:h-[22px] w-[18px] h-[18px] flex justify-center items-center bg-[#000014] rounded-[4.5px] ${styles.dot}`}>
                <div className="md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-[#7DBB60] rounded-[4.5px]"></div>
            </div>
            <div className={`bg-gradient-to-r ${dir === 'left' ? "from-[#2C3E32] to-[#7DBB60]" : "from-[#7DBB60] to-[#2C3E32]"} h-[1.5px] flex-grow`}></div>
        </div>
        <div className={`sm:p-[30px] py-[15px] px-[30px] rounded-[30px] h-fit w-full ${styles.content}`}>
            <h3 className="sm:text-[22px] text-[18px] sm:leading-[27px] leading-[22px] sm:mb-[15px] mb-[10px] font-semibold text-[#F9898E] capitalize">{item.date}</h3>
            <ul>
                {
                    item.content.map((text, idx) => (
                        <li key={idx} className={`opacity-[0.7] text-white text-[14px] leading-[22px] font-normal relative flex items-center gap-x-[10px] ${dir === 'left' ? "justify-start sm:flex-row-reverse flex-row" : "flex-row"}`}>
                            <div className="w-[5px] h-[5px] bg-[#f9898e] rounded-full"></div><span>{text}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>;
}

export default RoadmapItem;

