import React from "react";
import Asidebar from "../components/Sidebar";
import MaxWidthWrapper from "../components/mmw";
import RightBar from "../components/RightBar";

const Page = () => {
  return (
    <div className="flex">
      <div>
        <Asidebar />
      </div>
      <div>
        <MaxWidthWrapper>
          <RightBar />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Page;
