import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className=" mt-24 bg-[#F6F6F7] pt-16">
      <div className="container mx-auto">
        <div className=" grid grid-cols-4 gap-20 mb-16">
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
                <input
                  style={{ borderColor: "#DCDDDF" }}
                  type="text"
                  placeholder="Your Email"
                  className=" h-12 flex items-center mb-2 border-yellow-200  rounded-xl w-full"
                />
                <button className="rounded-xl py-3 px-5 text-white text-center w-full bg-[#4B6BFB] ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-8 flex justify-between">
          <div className="flex items-center gap-2">
            <img src={FooterLogo} alt="footer logo" />
            <p>
              Meta<span className="text-[#141624] font-semibold ">Blog</span>
            </p>
            <p>© JS Template 2023. All Rights Reserved.</p>
          </div>
          <ul className=" flex items-center gap-4">
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
