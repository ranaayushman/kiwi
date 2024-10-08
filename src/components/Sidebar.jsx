import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "/svg/frame1.svg", href: "" },
    { title: "Add Staff", src: "/img/img2.png", href: "" },
    { title: "Member List", src: "/img/img4.png", href: "" },
    { title: "Staff List", src: "/img/img5.png", href: "" },
    { title: "Batch", src: "/img/img6.png", href: "" },
    { title: "Attendance", src: "/img/img7.png", href: "" },
    { title: "Plans", src: "/img/img8.png", href: "" },
    { title: "Payments", src: "/img/img9.png", href: "" },
    { title: "SMS", src: "/img/img10.png", href: "" },
    { title: "Expenses", src: "/img/img11.png", href: "" },
    { title: "Reports", src: "/img/img12.png", href: "" },
    { title: "Logout", src: "/img/img13.png", href: "", gap: true },
  ];

  return (
    <div className="flex">
      {/* Image present or arrow present on the border This will be removed later on but it's cool */}
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
          {/* <img src="/img/img1.png" className={`cursor-pointer duration-500`} /> */}
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
              }`}
            >
              <img src={menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
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

export default Sidebar;
