"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years in Business & Data Science",
  },
  {
    num: 26,
    text: "Projects Delivered Successfully",
  },
  {
    num: 4,
    text: "Key Technologies & Business Mastered",
  },
  {
    num: 500,
    text: "Code Contributions & Deployments",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start min-w-[200px] min-h-[80px]"
                key={index}
              >
                <div className="min-w-[80px] min-h-[50px] flex items-center justify-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;