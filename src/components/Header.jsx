import { useState } from "react";
import {disablePageScroll , enablePageScroll} from 'scroll-lock'
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const pathname = useLocation();
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll()
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handeleClick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
        <a
          className="block w-[12rem] xl:mr-8 text-2xl uppercase text-n-1 transition-colors hover:text-color-1 font-semibold py-2 pl-10 font-code"
          href="#hero"
        >
          Anukul
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex  flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handeleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 md:py-8 lg:-m-0.25 lg:text-lg lg:font-semibold py-6 ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-1 "
                    : "lg:text-n-1"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
            <HamburgerMenu />
        </nav>
        <Button
          href="https://drive.google.com/file/d/12mjHCRjMq29P-IUxMlY4A7DAwtvHRMo7/view?usp=sharing"
          className=" hidden lg:flex text-n-1 transition-colors hover:text-color-1 text-[1rem] font-semibold  "
        >
          Resume
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" 
        onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </Button>
      </div>
    </div>
  );
};

export default Header;
