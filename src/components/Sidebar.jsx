import { useState } from "react";
import { Icon } from "@iconify/react";
import { Menus } from "../constants";

const Asidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 relative`}
      >
        <img
          src="/img/img1.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-slate-400 rounded-full ${
            !open && "rotate-90"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="text-center">
          <h1
            className={`text-[#789336] origin-left font-medium text-center text-4xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Kiwi
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-slate-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#789336] rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } group`}
            >
              <div className="relative">
                <Icon
                  icon={menu.icon}
                  className="z-10 relative"
                  fontSize={20}
                />

                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-200 z-20"></div>
              </div>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-semibold group-hover:text-white`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Asidebar;