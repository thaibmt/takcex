export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="md:w-full w-[350px] px-5 pt-[30px] md:pt-10 pb-10 md:pb-[50px] bg-white bg-opacity-5 rounded-[30px] hover:shadow-inner border-[1px] border-transparent hover:border-red-300 hover:border-opacity-20 flex-col justify-start items-center gap-[25px] inline-flex">
      <div>{icon}</div>

      <div className="flex flex-col gap-y-3">
        <div className="text-center text-white text-[22px] font-medium capitalize leading-7">
          {title}
        </div>
        <div className="opacity-60 text-center text-white text-sm font-normal leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
}
