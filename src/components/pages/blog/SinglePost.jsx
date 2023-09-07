import React from "react";
import AuthorPic from "../../../assets/img/Image.png";
import SingleBlogImg from "../../../assets/img/singleblog.png";

const SinglePost = () => {
  return (
    <section>
      <div className="container mx-auto mt-20 w-full md:w-[804px] ">
        <h2 className=" font-semibold mt-5 mb-5 text-3xl">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex items-center gap-3 mb-9">
          <img src={AuthorPic} alt="" />
          <span className=" font-medium text-[#97989F] ">Tracey Wilson</span>
          <span className=" font-medium text-[#97989F] ">August 20, 2022</span>
        </div>
        <img
          src={SingleBlogImg}
          className="w-full mb-8"
          alt="single blog img"
        />
        <p className=" mb-8 text-xl text-[#3B3C4A] ">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learn ing a few phrases in the local language can also go a long way
          in making connections and showing respect.
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
    </section>
  );
};

export default SinglePost;
