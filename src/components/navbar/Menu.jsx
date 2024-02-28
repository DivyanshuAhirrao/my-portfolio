import React from "react";

const Menu = () => {
  
  return (
    <div className="xs:hidden sm:block lg:block nav-menu">
      <ul className=" flex gap-3 pt-2">
        <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 hover:bg-lime-200 hover:text-blue-950 rounded-[5px] "> Home </li>
        <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 hover:bg-lime-200 hover:text-blue-950 rounded-[5px] "> About </li>
        <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 hover:bg-lime-200 hover:text-blue-950 rounded-[5px] "> Services </li>
        <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 hover:bg-lime-200 hover:text-blue-950 rounded-[5px] "> Projects </li>
        <li className="text-[16px] font-mono hover:cursor-pointer transition-all duration-200 px-2 hover:bg-lime-200 hover:text-blue-950 rounded-[5px] "> Contact </li>
      </ul>
    </div>
  );
};

export default Menu;
