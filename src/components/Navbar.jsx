import { IoMenu,IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsOpenNav] = useState(false);

  function toggleNav() {
    setIsOpenNav(!isNavOpen);
  }
  const navLinks = [
    { name: "program highlights", href: "#highlights" },
    { name: "FAQ", href: "#faq" },
  ];
  return (
    <div className=" p-2 py-3 fixed top-0 left-0 right-0  backdrop-blur-sm z-20 text-violet-800 bg-white/80">
      {/* ---------------------- For mobile 0--------------------- */}
      <div className="maxWidthForSections  sm:hidden flex justify-between items-center">
        {/*logo */}
        <a href="#home" className="flex items-center gap-1">
          {/* <img src="/logo.png" alt="LOGO" width={60} height={60} /> */}
          <p className="font-bold">LOGO</p>

        </a>
        <IoMenu className="size-7" onClick={toggleNav} />

        {/*  Nav Items  */}
        <div
          className={`fixed z-30 left-0 right-0  h-screen w-full top-0 flex justify-end transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleNav}
        >
          <div
            className="h-full px-[3vw]  w-2/3 max-w-75 flex flex-col bg-violet-100/90   items-end justify-start py-3 "
            onClick={toggleNav}
          >
            <IoClose
              className={`close-itemMobile  ${
                isNavOpen ? "icon-is-visible" : "icon-is-hidden"
              } hover:text-(--goldtext) size-9 `}
              onClick={toggleNav}
              style={{ "--i-nav": 0.5 } }
            />
            <ul
              className={` flex flex-col items-center gap-y-6 text-lg w-full mt-6`}
            >
              {navLinks.map((item, index) => (
                <li
                  onClick={toggleNav}
                  key={index}
                  className={`nav-itemMobile nav-item ${
                    isNavOpen ? "is-visible" : "is-hidden"
                  }`}
                  style={{ "--i-nav": index + 1 } }
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
              {/* <li
                onClick={toggleNav}
                key={3}
                className={`nav-itemMobile nav-item ${
                  isNavOpen ? "is-visible" : "is-hidden"
                }`}
                style={
                  { "--i-nav": navLinks.length + 1 } 
                }
              >
                <a
                  className="btn btn-primary"
                  target="blank"
                  href=""
                >
                  Our Instagram
                </a>
              </li> */}
              <li
                onClick={toggleNav}
                key={4}
                className={`nav-itemMobile nav-item ${
                  isNavOpen ? "is-visible" : "is-hidden"
                }`}
                style={
                  { "--i-nav": navLinks.length + 2 } 
                }
              >
                <a
                  className="btn btn-primary"
                  target="blank"
                  href="https://api.whatsapp.com/send/?phone=%2B917003534092&text&type=phone_number&app_absent=0"
                >
                  Our Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  For Desktop Screens */}
      <div className="maxWidthForSections hidden sm:flex justify-between">
        {/*logo */}
        <a href="#home" className="flex items-center gap-1">
          {/* <p className=""><span className="font-semibold text-violet-800">KRAFTING </span>TALES</p> */}
          {/* <img src="/logo.png" alt="LOGO" width={60} height={60} /> */}
          <p className="font-bold">LOGO</p>
        </a>

        {/* NavItems */}
        <div className="flex items-center">
          <ul className="flex font-semibold  uppercase gap-3 ">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-lg transition-all duration-300"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* lets connect  */}
        <div className="flex items-center  ">
          <a
            className="btn-primary btn"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
