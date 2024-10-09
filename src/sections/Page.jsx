import React from "react";
import Asidebar from "../components/Sidebar";
import MaxWidthWrapper from "../components/mmw";
import RightBar from "../components/RightBar";

const Page = () => {
  return (
    <div className="flex gap-x-0">
      <div className="w-fit">
        <Asidebar />
      </div>
      <div className="w-full">
        {/* <MaxWidthWrapper>
          <RightBar />
        </MaxWidthWrapper> */}
        <RightBar />
      </div>
    </div>
  );
};

export default Page;
