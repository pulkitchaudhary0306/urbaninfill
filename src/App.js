import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));
const Blogs = lazy(() => import("./Component/Blogs"));
const BlogDetails = lazy(() => import("./Component/BlogDetails"));
const Contact = lazy(() => import("./Component/Contact"));
const Architecture = lazy(() => import("./Component/Architecture"));
const Interior = lazy(() => import("./Component/Interior"));
const ProjectManagement = lazy(() => import("./Component/Projectmanagement"));
const ProjectItems = lazy(() => import("./Component/ProjectItems"));
const Interioritems = lazy(() => import("./Component/Interioritems"));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        fontSize: "1rem",
      }}
    >
      Loading...
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/projectmanagement" element={<ProjectManagement />} />
        <Route path="/ProjectItems/:id" element={<ProjectItems />} />
        <Route path="/Interioritems/:id" element={<Interioritems />} />
      </Routes>
    </Suspense>
  );
}

export default App;
