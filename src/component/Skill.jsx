import React from "react";
import { skills } from "../data";

const Skill = () => {
  return (
    <>
      <div
        id="skill"
        className="flex justify-center flex-col items-center gap-10 pb-44 "
      >
        <h1 className="text-6xl font-bold">Skills</h1>
        <p className="text-3xl font-normal text-slate-700 w-[340px] text-center lg:w-[650px] leading-relaxed">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>

        <div className="flex max-w-[1200px] flex-wrap justify-around gap-16">


          {skills.map((skill,index) => (
            <div className="max-w-[1100px] " key={index}>
              <div className="w-[320px] lg:h-[250px] lg:w-[500px] border-[0.1px] border-black rounded-3xl ">
                <h1 className="text-center text-5xl font-bold mb-7 mt-12 text-gray-700">{skill.title}</h1>
                <div className="flex justify-center items-center flex-wrap gap-[12px] mb-20">

                  {skill.skills.map((item, idx) => (
                    <div key={idx} className="border-[1px] border-stone-400 flex align-middle items-center px-[16px] py-[12px] rounded-xl gap-3 ">
                      <img
                        className="h-10 w-10"
                        src={item.image}
                        alt="React"
                      />
                      <p className="text-2xl text-slate-500">{item.name}</p>
                    </div>
                  ))}


                </div>
              </div>
            </div>
          ))}

        </div>


      </div>
    </>
  );
};

export default Skill;
