import React from "react";

const Leetcode = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 pb-44">
      <h1 className="text-6xl font-bold">Leetcode</h1>
      <p className="text-3xl font-normal text-slate-600 w-[330px] text-center lg:w-[650px] leading-relaxed">
        Here my Leetcode Profile Solving 100+ questions on LeetCode has helped
        me improve my logic-building skills and strengthen my programming
        fundamentals. Click this image to go to my LeetCode profile.
      </p>
      <a href="https://leetcode.com/u/Tarun_Bharti/" target="_blank">
        <img
          className="w-[300px] rounded-lg lg:w-[800px] "
          src="/leetcode.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default Leetcode;
