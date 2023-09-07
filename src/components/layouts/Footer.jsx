import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className=" mt-24 bg-[#F6F6F7] pt-16">
      <div className="container mx-auto">
        <div className="block lg:grid grid-cols-4 gap-20 mb-16">
          <div>
            <h3 className=" text-xl font-semibold text-[#696A75] mb-3">
              About
            </h3>
            <p className="text-[#696A75] mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex">
              <h4 className="font-semibold">Email : </h4>
              <p className="text-[#696A75]">Joemayinzi@gmail.com</p>
            </div>
            <div className="flex">
              <h4 className="font-semibold">Phone : </h4>
              <p className="text-[#696A75]">0819723232</p>
            </div>
          </div>
          <div>
            <h3 className=" text-xl font-semibold text-[#696A75] mb-3">
              Quick Links
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Achieved
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Author
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </h3>
          </div>
          <div>
            <h3 className=" text-xl font-semibold text-[#696A75] mb-3">
              Category
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    LifeStyle
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Travel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Economy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#696A75] text-base font-normal mb-2"
                  >
                    Sports
                  </Link>
                </li>
              </ul>
            </h3>
          </div>
          <div className=" w-full p-2 rounded-xl bg-white">
            <div className=" text-center">
              <h4 className=" text-xl font-semibold mb-2">Weekly Newsletter</h4>
              <span className="text-[#696A75]">
                Get blog articles and offers via email
              </span>
              <form className=" mt-7">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className=" py-3 px-4 mb-2 border border-[#DCDDDF] focus:border-[#DCDDDF] outline-none  rounded-xl w-full"
                  />
                  <svg
                    className="absolute right-3 bottom-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z"
                      fill="#696A75"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z"
                      fill="#696A75"
                    />
                  </svg>
                </div>
                <button className="rounded-xl py-3 px-5 text-center w-full bg-[#4B6BFB] text-white font-medium ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-8 block lg:flex justify-between">
          <div className="flex items-center gap-2">
            <img src={FooterLogo} alt="footer logo" />
            <p>
              Meta<span className="text-[#141624] font-semibold ">Blog</span>{" "}
              <br />
              <span>© JS Template 2023. All Rights Reserved.</span>
            </p>
          </div>
          <ul className=" mt-5 lg:mt-0 flex items-center gap-4">
            <li>
              <Link to="/" className="text-[#696A75]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#696A75]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="text-[#696A75]">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
