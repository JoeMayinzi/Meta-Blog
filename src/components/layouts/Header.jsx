import React from "react";
import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5 bg-white">
      <nav className="container mx-auto flex justify-between">
        <div>
          <img src={logo} alt="logo meta blog" />
        </div>
        <ul className="flex gap-[40px] ">
          <li>
            <Link className="text-[#3B3C4A]" to="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-[#3B3C4A]" to="#">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-[#3B3C4A]" to="#">
              Single Post
            </Link>
          </li>
          <li>
            <Link className="text-[#3B3C4A]" to="#">
              Pages
            </Link>
          </li>
          <li>
            <Link className="text-[#3B3C4A]" to="#">
              Contact
            </Link>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F4F4F5] outline-none w-[166px] h-[36px] px-3"
          />
          <svg
            className="absolute right-3 bottom-2.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M10.5718 10.5716L14.0002 14"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
