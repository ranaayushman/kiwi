import React from "react";

const Radio = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Gender*</h4>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name="gender" className="mr-2" />
            <span>Male</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" className="mr-2" />
            <span>Female</span>
          </label>
        </div>
      </div>
      <div className="border-l border-gray-300 mx-6"></div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Status*</h4>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name="status" className="mr-2" />
            <span>Married</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="status" className="mr-2" />
            <span>Unmarried</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
