import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Blogs = lazy(() => import("./Component/Blogs"));
const Blog = lazy(() => import("./Component/Blog"));
const Contact = lazy(() => import("./Component/Contact"));
const Architecture = lazy(() => import("./Component/Architecture"));
const Interior = lazy(() => import("./Component/Interior"));
const ProjectManagement = lazy(() => import("./Component/Projectmanagement"));
const UIHomes = lazy(() => import("./Component/UIHomes"));
const Projects = lazy(() => import("./Component/Projects"));
const Interiors = lazy(() => import("./Component/Interiors"));
const Archives = lazy(() => import("./Component/Archives"));
const Career = lazy(() => import("./Component/Career"));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/projectmanagement" element={<ProjectManagement />} />
          <Route path="/uihomes" element={<UIHomes />} />
          <Route path="/Projects/:id" element={<Projects />} />
          <Route path="/Interiors/:id" element={<Interiors />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
