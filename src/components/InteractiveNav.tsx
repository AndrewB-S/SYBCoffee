import coffeeGif from "/coffee.gif";
import menuOpen from "/bars-solid.svg";
import menuClose from "/x-solid.svg";
import { useState } from "react";
import "../css/InteractiveNav.css";
const navItems = ["Home", "About", "Menu", "Contact"];

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const baseLineStyling = "w-6 h-1 bg-offwhite rounded transition-all ";
  const baseMenuStyling = "hamburger-menu flex flex-col gap-1 ";

  const toggleMenu = () => {
    // if(isMenuOpen){

    // }
    setMenuOpen((s) => !s);
  };

  return (
    <>
      <div className="navbar bg-royal">
        <div className="flex-1">
          <img src={coffeeGif} alt="" className="max-h-6 -mr-2" />
          <a className="btn btn-ghost normal-case text-xl text-offwhite">
            SYB Coffee
          </a>
        </div>
        <div className="flex-none">
          <label
            htmlFor="toggle-menu"
            className="btn btn-square btn-ghost drawer-button z-10"
          >
            <div
              className={
                isMenuOpen ? baseMenuStyling + "open" : baseMenuStyling
              }
              onClick={() => toggleMenu()}
            >
              <div className={baseLineStyling}></div>
              <div className={baseLineStyling}></div>
              <div className={baseLineStyling}></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
