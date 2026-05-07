import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

const Home = lazy(() => import(/* webpackChunkName: "page-home" */ "./Component/Home"));
const About = lazy(() => import(/* webpackChunkName: "page-about" */ "./Component/About"));
const Blogs = lazy(() => import(/* webpackChunkName: "page-blogs" */ "./Component/Blogs"));
const Blog = lazy(() => import(/* webpackChunkName: "page-blog" */ "./Component/Blog"));
const Contact = lazy(() => import(/* webpackChunkName: "page-contact" */ "./Component/Contact"));
const Architecture = lazy(() => import(/* webpackChunkName: "page-architecture" */ "./Component/Architecture"));
const Interior = lazy(() => import(/* webpackChunkName: "page-interior" */ "./Component/Interior"));
const ProjectManagement = lazy(() => import(/* webpackChunkName: "page-project-management" */ "./Component/Projectmanagement"));
const UIHomes = lazy(() => import(/* webpackChunkName: "page-ui-homes" */ "./Component/UIHomes"));
const ArchitectureProjects = lazy(() => import(/* webpackChunkName: "page-architecture-projects" */ "./Component/ArchitectureProjects"));
const InteriorsProjects = lazy(() => import(/* webpackChunkName: "page-interiors-projects" */ "./Component/InteriorsProjects"));
const Archives = lazy(() => import(/* webpackChunkName: "page-archives" */ "./Component/Archives"));
const Career = lazy(() => import(/* webpackChunkName: "page-career" */ "./Component/Career"));
const WhatsAppButton = lazy(() => import(/* webpackChunkName: "widget-whatsapp" */ "./Component/WhatsAppButton"));
const CookieConsent = lazy(() => import(/* webpackChunkName: "widget-cookie-consent" */ "./Component/CookieConsent"));

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
      <Suspense fallback={null}>
        <WhatsAppButton />
        <CookieConsent />
      </Suspense>
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
          <Route path="/ArchitectureProjects/:id" element={<ArchitectureProjects />} />
          <Route path="/InteriorsProjects/:id" element={<InteriorsProjects />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
