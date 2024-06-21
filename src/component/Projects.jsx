import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <div
      id="skill"
      className="flex justify-center flex-col items-center gap-10 pb-44 "
    >
      <h1 className="text-6xl font-bold">Projects</h1>
      <p className="text-3xl font-normal text-slate-700 w-[340px] text-center lg:w-[650px] leading-relaxed">
        I have also worked on some small web projects and currently working on bigger projects. Here are some of my projects:
      </p>


      <div className="flex max-w-[1200px] flex-wrap justify-around gap-16 ">
        {projects.map((data, index) => (
          <div key={index} className=" w-[330px] h-[520px] rounded-2xl py-6 px-5 flex flex-col gap-[14px] overflow-hidden border-[0.1px] border-gray-400 shadow-[0_20px_50px_rgba(0,_0,_0,_4)]">
            <img className='border-[0.1px] border-gray-400 rounded-2xl shadow-[0_0_12px_4px_rgba(0,0,0,0.3)]' src={data.image} alt="project" />
            <div className='w-full flex items-center flex-wrap gap-2 mt-1'>
              {data.tags && data.tags.map((item, index) => (
                <p key={index} className='text-2xl py-1 px-4 rounded-2xl bg-slate-300'>
                  {item}
                </p>
              ))}
            </div>

            <div className='w-full flex flex-col px-1'>
              <h1 className='text-[20px] overflow-hidden w-full font-bold'>{data.title}</h1>
              <p className='text-[12px] py-3 text-gray-600'>{data.date}</p>
              <h1 className='text-2xl text-gray-700'>{data.description}</h1>
            </div>
            {/* code live link */}
            <div className='flex justify-around'>
              <a href={data.github} target='_blank'>
                <button className='border-[1px] border-black px-6 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black'>
                  View Code
                </button>
              </a>
              <a href={data.webapp} target='_blank'>
                <button className='border-[1px] border-black px-6 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black'>
                  View Live App
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects