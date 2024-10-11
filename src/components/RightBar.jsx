import React from "react";
import Navbar from "./Navbar";
import MaxWidthWrapper from "./mmw";

import DualForm from "./DualForm";

const RightBar = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div>
          <h1 className="text-2xl font-bold">Add Members</h1>
          <div>
            <DualForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RightBar;
