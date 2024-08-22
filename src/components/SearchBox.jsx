import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="flex lg:w-[15%] max-lg:w-[30%]  ml-auto items-center gap-2 border-black border-b-2 p-1 mb-10">
      <CiSearch className="text-2xl" />
      <input
        className="focus:outline-none w-full"
        placeholder="Search"
        type="text"
        onKeyDown={search}
      />
    </div>
  );
};

export default SearchBox;
