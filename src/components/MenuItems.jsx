import React from "react";

const MenuItems = () => {
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
    <div className="flex gap-8 max-lg:flex-col max-lg:items-start max-lg:absolute max-lg:top-0 max-lg:bg-white max-lg:px-10 max-lg:py-10">
      {menuItems.map((item) => (
        <button className="text-xs">{item}</button>
      ))}
    </div>
  );
};

export default MenuItems;
