import React from "react";

const Button = () => {
  return (
    <div className="text-white flex flex-col gap-y-4 mt-40">
      <button className="flex justify-center items-center w-full bg-[#789336] h-12 rounded-xl">
        Submit
      </button>
      <button className="flex justify-center items-center w-full border border-[#789336] h-12 rounded-xl text-black">
        Preview
      </button>
    </div>
  );
};

export default Button;
