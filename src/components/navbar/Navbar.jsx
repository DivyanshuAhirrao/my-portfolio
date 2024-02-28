import React from "react";
import Menu from "./Menu";
import { Button } from "flowbite-react";
import NavSearch from "./NavSearch";
import NavAvatar from "./NavAvatar";
import TemporaryDrawer from "./Sidebar";

const Navbar = () => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/7972814411`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <nav className="bg-gray-800 text-gray-200 flex justify-around items-center h-[11vh] w-[100%]">
      <aside className=" xs:w-[290%]  xs:relative xs:right-12 sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[20%] flex justify-start pl-16">
        <NavAvatar />{" "}
        <span className="opacity-90 uppercase relative top-[12px] left-2 text-emerald-100 font-mono font-bold hover:no-underline transition-all duration-200 cursor-pointer hover:scale-105">
          Divyanshu Ahirrao
        </span>
      </aside>
      <aside className="w-[60%] flex justify-between">
        <Menu />
        <NavSearch />
      </aside>
      <aside className="w-[20%] flex justify-end pr-2">
        <button onClick={handleClick} className="xs:hidden sm:block">
          <Button outline gradientDuoTone="tealToLime">
            Chat Now
          </Button>
        </button>
        <div className="xs:block sm:hidden scale-125 pr-1">
          <TemporaryDrawer />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
