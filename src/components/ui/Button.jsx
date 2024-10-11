import React from "react";

const Button = () => {
  return (
    <div className="text-white flex flex-col gap-y-4 mt-40">
      <button className="flex justify-center items-center w-full bg-[#789336] hover:bg-[white] hover:text-black hover:border border-[#789336] transition-all h-12 rounded-xl">
        Submit
      </button>
      <button className="flex justify-center items-center w-full border border-[#789336] hover:bg-[#789336] hover:text-white h-12 rounded-xl text-black transition-all">
        Preview
      </button>
    </div>
  );
};

export default Button;
