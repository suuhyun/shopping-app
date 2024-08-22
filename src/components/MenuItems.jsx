import React from "react";

const MenuItems = ({ showSidebar }) => {
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
    <div
      className={`flex gap-8 ${
        showSidebar &&
        "flex-col items-start absolute top-0 bg-white px-10 py-10"
      }`}
    >
      {menuItems.map((item) => (
        <button className="text-xs">{item}</button>
      ))}
    </div>
  );
};

export default MenuItems;
