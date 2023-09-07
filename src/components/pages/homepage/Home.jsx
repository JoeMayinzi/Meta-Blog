import React from "react";
import HeroImg from "../../../assets/img/m-post-card-overlay.png";
import ArticleImg from "../../../assets/img/Rectangle 38.png";
import AuthorPic from "../../../assets/img/Image.png";
import { Link } from "react-router-dom";
import { useGetPosts } from "../../../utils/hooks/GetPosts";
import { BASE_URL } from "../../../utils/api/BaseUrl";

const Home = () => {
  const [posts, isLoading, error] = useGetPosts(BASE_URL);

  console.log(posts);

  return (
    <>
      <section className="mb-[48px]">
        <div className="container mx-auto relative">
          <img src={HeroImg} alt="hero img" className=" w-full h-[500px] " />
          <div className=" p-10 bg-white rounded-xl shadow-lg w-full md:w-[598px] absolute bottom-[-50px] left-0 md:left-[90px] ">
            <Link className=" bg-[#4B6BFB] text-white py-1 px-3 rounded-md text-xs mb-5">
              Technology
            </Link>
            <h2 className=" font-semibold text-[#181A2A] text-xl mt-4 mb-5">
              The Impact of Technology on the Workplace: How Technology is
              Changing
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
        </div>
      </section>
      <section className="mt-24">
        <div className="container mx-auto">
          <div className=" block lg:grid grid-cols-3 mb-8">
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className="w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
            <article className=" w-full lg:w-[392px] p-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] shadow-lg mb-5">
              <img
                src={ArticleImg}
                alt="article img"
                className="w-full h-[240px] mb-[24px] "
              />
              <Link
                to="/"
                className=" text-sm text-[#4B6BFB] font-medium mb-[20px] bg-[rgba(75, 107, 251, 0.05)] block rounded-md"
              >
                Technology
              </Link>
              <h2 className=" font-semibold text-[#181A2A] text-xl mb-5">
                The Impact of Technology on the Workplace: How Technology is
                Changing
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
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
