import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import { navItems } from "../constant/data";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container relative flex justify-between items-center text-black">
        <div className="flex-[4] flex items-center gap-[50px]">
          <Link
            to="/"
            className="font-bold text-[20px] flex items-center gap-[10px]"
          >
            <img src="image/logo.png" alt="" className="w-[28px]" />
            <span className=" sm:hidden xl:inline">ExedoEstate</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="hidden sm:block transition-all duration-400 hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex-[2] flex items-center justify-end md:bg-transparent">
          {currentUser ? (
            <div className="hidden sm:flex items-center font-bold">
              <img
                src={currentUser.avatar}
                alt="User avatar"
                className="w-[40px] h-[40px] rounded-full object-cover mr-[20px]"
              />
              <span className="sm:hidden">{currentUser.name}</span>
              <Link
                to="/profile"
                className="py-[12px] px-[24px] bg-[#fece51] cursor-pointer border-none relative ml-[20px]"
              >
                {/* <div className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full w-[26px] h-[26px] flex items-center justify-center">
                  3
                </div> */}
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center">
              {/* Desktop View - Both buttons in one line */}
              <div className="hidden sm:flex">
                <Link
                  to="/sign-in"
                  className="py-[12px] px-[24px] transition-all duration-400 hover:scale-105"
                >
                  Sign in
                </Link>
                <Link
                  to="/sign-up"
                  className="py-[12px] px-[24px] bg-[#fece51] ml-[20px] transition-all duration-400 hover:scale-105 rounded"
                >
                  Sign up
                </Link>
              </div>
              {/* Mobile View - Only Sign up button (smaller size) */}
              <Link
                to="/sign-up"
                className="sm:hidden py-2 px-2 text-sm bg-[#fece51] transition-all duration-400 hover:scale-105 rounded"
              >
                Sign up
              </Link>
            </div>
          )}

          <button
            onClick={handleClick}
            className="sm:hidden z-50 ml-4"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <RiCloseFill size={30} className="text-black" />
            ) : (
              <RiMenuFill size={30} className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
    fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg z-40
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    sm:hidden
  `}
        >
          <div className="p-7 h-full flex flex-col">
            {currentUser && (
              <div className="flex flex-col items-center mb-8">
                <img
                  src={currentUser.avatar}
                  alt="User avatar"
                  className="w-[60px] h-[60px] rounded-full object-cover mb-2"
                />
                <span className="font-semibold text-lg mb-2">
                  {currentUser.name}
                </span>
                <Link
                  to="/profile"
                  className="py-2 px-6 bg-[#fece51] rounded font-medium"
                  onClick={handleClick}
                >
                  Profile
                </Link>
              </div>
            )}
            <ul className="flex flex-col justify-center items-center gap-10 h-full">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="hover:text-[#fece51] transition-colors font-medium text-lg"
                    onClick={handleClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {!currentUser && (
                <>
                  <li>
                    <Link
                      to="/sign-in"
                      className="hover:text-[#fece51] transition-colors font-medium text-lg"
                      onClick={handleClick}
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="hover:text-[#fece51] transition-colors font-medium text-lg"
                      onClick={handleClick}
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
            onClick={handleClick}
          />
        )}
      </div>
    </header>
  );
}
