import React from "react";
import Sidebar from "../components/Sidebar";
import FormSection from "../components/FormSection";
import FormInput from "../components/FormInput";
import ButtonGroup from "../components/ButtonGroup";
import RightBar from "../components/RightBar";
import MaxWidthWrapper from "../components/mmw";

const AddMember = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AddMember;
