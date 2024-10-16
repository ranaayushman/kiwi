import React from "react";
import MaxWidthWrapper from "./mmw";
import Form from "./Form";

const RightBar = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div>
          <h1 className="text-2xl font-bold">Add Members</h1>
          <div className="drop-shadow-custom pt-4">
            <Form />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RightBar;
