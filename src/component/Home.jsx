import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  // Create a reference to store the DOM element
  const typedElement = useRef(null);

  useEffect(() => {
    // Options for the Typed instance
    const options = {
      strings: ["Fronted Developer", "Programmer", "Student"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Create a Typed instance
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance during cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pb-44 pt-36 lg:pt-72 flex flex-col-reverse items-center justify-center gap-10 lg:gap-0 lg:justify-around lg:flex-row">
      <div className=" flex flex-col items-center justify-center px-8 gap-5 lg:w-[600px] lg:block ">
        <h1 className="text-6xl font-[800] lg:text-7xl ">Hi, I am</h1>
        <h1 className="text-6xl font-extrabold lg:text-7xl lg:pt-7">
          Tarun Bharti
        </h1>
        <h1 className="text-4xl font-semibold py-4 lg:text-5xl lg:pt-9">
          I am a <span className="text-slate-500" ref={typedElement}></span>
        </h1>
        <p className="text-3xl text-gray-500 leading-relaxed text-center lg:text-left lg:text-4xl lg:leading-relaxed lg:pt-6">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <button className="text-3xl bg-black text-white px-8 py-4 rounded-xl font-bold my-6 lg:ml-[300px] lg:my-0 border-2 hover:text-black hover:bg-white hover:border-2 hover:border-black">
          {" "}
          <a href="https://drive.google.com/file/d/1E_yvJ0LI_--gfxMJ-j-jxq2Nn6wPaRoa/view?usp=drivesdk" target="_blank">Resume</a>{" "}
        </button>
      </div>

      <div>
        <img
          className="w-[300px] lg:w-[400px] rounded-full border-2 border-black "
          src="/profile_photo1.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
