import React, { useContext } from "react";
import HeroImg from "../../../assets/img/m-post-card-overlay.png";
import ArticleImg from "../../../assets/img/Rectangle 38.png";
import AuthorPic from "../../../assets/img/Image.png";
import { Link } from "react-router-dom";
import { useGetPosts } from "../../../utils/hooks/GetPosts";
import { BASE_URL } from "../../../utils/api/BaseUrl";
import Articles from "../../articles/Articles";
import Loader from "../../loader/Loader";
import { ThemeContext } from "../../../utils/context/ThemeContext";

const Home = () => {
  const [posts] = useGetPosts(BASE_URL);
  const [lastPost] = useGetPosts(`${BASE_URL}/${100}`);
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <section className="mb-[48px]">
        <div className="container mx-auto relative">
          <Link to={`/singlePost/${lastPost.id}`}>
            <img src={HeroImg} alt="hero img" className=" w-full h-[500px] " />
            <div
              className={`p-10 ${
                theme === "light" ? "bg-white" : "bg-[#181A2A] "
              } rounded-xl shadow-lg w-full md:w-[598px] absolute bottom-[-50px] left-0 md:left-[90px]`}
            >
              <Link className="bg-[#4B6BFB] text-white py-1 px-3 rounded-md text-xs mb-5">
                Technology
              </Link>
              <h2
                className={`font-semibold ${
                  theme === "light" ? "text-[#181A2A]" : "text-white"
                } text-xl mt-4 mb-5`}
              >
                {lastPost.title}
              </h2>
              <div className="flex items-center gap-3">
                <img src={AuthorPic} alt="" />
                <span className=" font-medium text-[#97989F] ">
                  Tracey Wilson
                </span>
                <span className=" font-medium text-[#97989F] ">
                  August 20, 2022
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="mt-24">
        <div className="container mx-auto">
          <div className=" block lg:grid grid-cols-3 mb-8">
            {posts.length ? (
              posts.map((post) => (
                <Link to={`/singlePost/${post.id}`}>
                  <Articles
                    key={post.id}
                    title={post.title}
                    content={post.body}
                    img={ArticleImg}
                    authorImg={AuthorPic}
                  />
                </Link>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
