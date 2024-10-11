import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="p-4 pt-0 shadow-xl w-full">
      <div className="container mx-auto flex items-center pl-10">
        <div className="w-64">
          <div className="relative">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full border-2 text-sm text-gray-700 rounded-lg py-1 pl-8 pr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-5 w-5 top-7 absolute text-gray-400" /> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;