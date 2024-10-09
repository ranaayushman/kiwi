import React from "react";
import Navbar from "./Navbar";
import MaxWidthWrapper from "./mmw";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="shadow-b-lg text-5xl">
        <Navbar />
      </div>

      <div>
        <MaxWidthWrapper>
          <div>
            <h1 className="text-2xl font-bold">Add Members</h1>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default RightBar;
