import React, { useEffect, useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import SearchBox from "./SearchBox";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleLogin = () => {
    setAuthenticate(false);
    !authenticate && navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between py-3">
        <div className="flex items-center">
          <div>
            {showSideBar ? (
              <>
                <div
                  className="text-lg absolute z-10"
                  onClick={() => setShowSideBar(!showSideBar)}
                >
                  X
                </div>
                <MenuItems />
              </>
            ) : (
              <CiMenuBurger
                className="lg:hidden mr-3"
                onClick={() => setShowSideBar(!showSideBar)}
              />
            )}
          </div>
          <div onClick={goToHome} className="cursor-pointer">
            <img
              className="max-w-max"
              src="https://www.dynamiteclothing.com/on/demandware.static/Sites-DynamiteGarageCA-Site/-/default/dw4788f1e9/images/svg-icons/logo-dyn.svg"
              alt=""
            />
          </div>
        </div>
        {!showMenu && <MenuItems />}
        <div
          className="flex items-center gap-1 cursor-pointer max-w-max"
          onClick={handleLogin}
        >
          <PiUserCircleThin className="text-3xl" />
          <div className="text-xs">{authenticate ? "LOGOUT" : "LOGIN"}</div>
        </div>
      </div>
      <SearchBox />
    </>
  );
};

export default Navbar;
