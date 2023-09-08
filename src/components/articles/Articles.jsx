import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utils/context/ThemeContext";

const Articles = ({ title, content, img, authorImg }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <article className="w-full lg:w-[392px] p-4 rounded-xl border border-solid border-[#E8E8EA] shadow-lg mb-5 transition ease-in-out delay-150 hover:scale-110 duration-300">
      <img
        src={img}
        alt="article img"
        className="w-full h-[240px] mb-[24px] "
      />
      <Link
        to="/"
        className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
      >
        Technology
      </Link>
      <h2
        className={`font-semibold ${
          theme === "light" ? "text-[#181A2A]" : "text-white"
        } text-xl mb-5`}
      >
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <img src={authorImg} alt="" />
        <span className=" font-medium text-[#97989F] ">Tracey Wilson</span>
        <span className=" font-medium text-[#97989F] ">August 20, 2022</span>
      </div>
    </article>
  );
};

export default Articles;
