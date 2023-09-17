import React, { useContext } from "react";
import AuthorPic from "../../../assets/img/Image.png";
import SingleBlogImg from "../../../assets/img/singleblog.png";
import { useParams } from "react-router-dom";
import { useGetPosts } from "../../../utils/hooks/GetPosts";
import { BASE_URL } from "../../../utils/api/BaseUrl";
import { ThemeContext } from "../../../utils/context/ThemeContext";

const SinglePost = () => {
  const { id } = useParams();
  const [singlePost] = useGetPosts(`${BASE_URL}/${id}`);
  const [theme] = useContext(ThemeContext);

  return (
    <section>
      <div className="container mx-auto mt-20 w-full md:w-[804px] ">
        <h2
          className={`font-semibold mt-5 mb-5 text-3xl ${
            theme === "light" ? "" : "text-white"
          }`}
        >
          {singlePost.title}
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
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p className=" mb-8 text-xl text-[#3B3C4A] ">{singlePost.body}</p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
        <p
          className={`mb-8 text-xl ${
            theme === "light" ? "text-[#3B3C4A]" : " text-white"
          } "`}
        >
          {singlePost.body}
        </p>
      </div>
    </section>
  );
};

export default SinglePost;
