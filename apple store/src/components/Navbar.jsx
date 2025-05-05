import React from "react";
import { navItems } from "../data/index";

const Navbar = ({activePage,handleNavClick}) => {
  return (
    <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#884d4d] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
      <a
        href="#"
        className="2xl:text-2xl xl:text-xl font-light text-white mb-14 tracking-wide"
      >
        Apple Products
      </a>
      <div className="flex flex-col flex-grow">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
            onClick={() => {
              handleNavClick(index);
            }}
          >
            <i className={`bx ${item.icon} text-xl text-pink-500`}></i>
            <span className="text-sm text-dark mr-auto mx-2.5  tracking-wider">
              {item.label}
            </span>
            <i
              className={`text-lg text-yellow-400 bx ${
                activePage === index ? item.activeIcon : item.inactiveIcon
              }`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
