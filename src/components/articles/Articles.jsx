import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ title, content, img, authorImg }) => {
  return (
    <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
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
      <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">{title}</h2>
      <div className="flex items-center gap-3">
        <img src={authorImg} alt="" />
        <span className=" font-medium text-[#97989F] ">Tracey Wilson</span>
        <span className=" font-medium text-[#97989F] ">August 20, 2022</span>
      </div>
    </article>
  );
};

export default Articles;
