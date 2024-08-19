import React from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const menuItems = [
    "NEW",
    "CLOTHING",
    "DRESSES",
    "FEATURED",
    "TOPS",
    "JEANS",
    "PANTS",
    "ACCESSORIES",
  ];
  return (
    <>
      <div className="flex justify-between py-3">
        <div>
          <img
            src="https://www.dynamiteclothing.com/on/demandware.static/Sites-DynamiteGarageCA-Site/-/default/dw4788f1e9/images/svg-icons/logo-dyn.svg"
            alt=""
          />
        </div>
        <div className="flex gap-8">
          {menuItems.map((item) => (
            <button className="text-xs">{item}</button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <PiUserCircleThin className="text-3xl" />
          <div className="text-xs">LOGIN</div>
        </div>
      </div>
      <div className="flex w-[15%] ml-auto items-center gap-2 border-black border-b-2 p-1">
        <CiSearch className="text-2xl" />
        <input className="focus:outline-none w-full" placeholder="Search" type="text" />
      </div>
    </>
  );
};

export default Navbar;
