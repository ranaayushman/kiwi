import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { Menus } from "../constants";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="24" height="24" />
        </button>
        <span className="text-lg font-semibold text-gray-800">Kiwi</span>
      </div>

      {isOpen && (
        <div className="bg-white px-4 pt-2 pb-4">
          {Menus.map((menu, index) => {
            const isActive = location.pathname === menu.href;
            return (
              <Link
                key={index}
                to={menu.href}
                className={`block py-2 px-4 rounded-md ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Icon icon={menu.icon} width="20" height="20" />
                  <span>{menu.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;