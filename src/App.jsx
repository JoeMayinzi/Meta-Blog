import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const Home = lazy(() => import("./components/pages/homepage/Home"));
const BlogListing = lazy(() => import("./components/pages/blog/BlogListing"));
const Author = lazy(() => import("./components/pages/blog/Author"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage/ErrorPage"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/" element={<Home />} />
            <Route path="/bloglist" element={<BlogListing />} />
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Suspense>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
