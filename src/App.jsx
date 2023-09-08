import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { ThemeContext } from "./utils/context/ThemeContext";

const Home = lazy(() => import("./components/pages/homepage/Home"));
const BlogListing = lazy(() => import("./components/pages/blog/BlogListing"));
const Author = lazy(() => import("./components/pages/blog/Author"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage/ErrorPage"));
const SinglePost = lazy(() => import("./components/pages/blog/SinglePost"));

function App() {
  const [theme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div className={theme === "light" ? " bg-white" : "bg-[#181A2A]"}>
        <Router>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bloglist" element={<BlogListing />} />
              <Route path="/author" element={<Author />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/singlePost/:id" element={<SinglePost />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
