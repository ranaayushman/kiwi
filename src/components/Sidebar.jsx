import { useState } from "react";
import { Icon } from "@iconify/react";
import { Menus } from "../constants";

const Asidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex sticky inset-0 shadow-2xl z-10">
      <div
        className={`${
          open ? "w-56" : "w-20"
        } duration-300 h-full p-5 pt-8 relative bg-white border-r border-gray-200 shadow-lg`}
      >
        {/* <Icon
          icon={open ? "akar-icons:chevron-left" : "akar-icons:chevron-right"}
          className="absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-slate-400 rounded-full bg-white"
          onClick={() => setOpen(!open)}
        /> */}
        <div
          className={`flex ${
            open ? "justify-center" : "justify-center"
          } items-center mb-6`}
        >
          <Icon
            icon="ci:hamburger"
            className={`w-10 h-10 text-[#789336] cursor-pointer ${
              open ? "hidden" : "block"
            }`}
            onClick={() => setOpen(!open)}
          />
          <h1
            className={`text-[#789336] font-medium text-4xl duration-300 cursor-pointer ${
              !open ? "hidden" : "block"
            } ${open ? "w-full text-center" : ""}`}
            onClick={() => setOpen(!open)}
          >
            Kiwi
          </h1>
        </div>
        <ul className="pt-0">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-slate-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#789336] rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${!open && "justify-center"} group`}
            >
              <div className="relative">
                <Icon
                  icon={menu.icon}
                  className="z-10 relative text-slate-900 group-hover:text-white transition-colors duration-200"
                  fontSize={20}
                />
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
    </div>
  );
};

export default Asidebar;
