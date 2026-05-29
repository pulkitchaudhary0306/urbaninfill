import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

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
const Luxuryhomes = lazy(() => import("./Component/Luxuryhomes"));
const LuxuryhomesProjects = lazy(() => import("./Component/LuxuryhomesProjects"));
const ArchitectureProjects = lazy(() => import("./Component/ArchitectureProjects"));
const InteriorsProjects = lazy(() => import("./Component/InteriorsProjects"));
const Archives = lazy(() => import("./Component/Archives"));
const Career = lazy(() => import("./Component/Career"));
const WhatsAppButton = lazy(() => import("./Component/WhatsAppButton"));
const CookieConsent = lazy(() => import("./Component/CookieConsent"));

function PageLoader() {
  return (
    <div style={{ minHeight: "50vh", display: "grid", placeItems: "center", padding: "2rem" }}>
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
      <main>
        <Outlet />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <WhatsAppButton />
        <CookieConsent />
      </Suspense>
    </>
  );
}

function PolicyPage({ title }) {
  return (
    <section style={{ padding: "120px 20px 70px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 16 }}>{title}</h1>
      <p style={{ lineHeight: 1.8, color: "#555" }}>
        URBAN iNFiLL uses essential cookies to operate this website and may use
        optional analytics cookies only after consent. For privacy or cookie
        questions, please contact the studio through the contact page.
      </p>
    </section>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="contact" element={<Contact />} />

            <Route path="privacy-policy" element={<PolicyPage title="Privacy Policy" />} />
            <Route path="cookie-policy" element={<PolicyPage title="Cookie Policy" />} />

            <Route path="architecture" element={<Architecture />} />
            <Route path="interior" element={<Interior />} />
            <Route path="project-management" element={<ProjectManagement />} />

            <Route path="ui-homes" element={<Navigate to="/luxury-homes" replace />} />
            <Route path="uihomes" element={<Navigate to="/luxury-homes" replace />} />

            <Route path="luxury-homes" element={<Luxuryhomes />} />
            <Route path="luxuryhomes" element={<Navigate to="/luxury-homes" replace />} />

            <Route path="architecture-projects/:id" element={<ArchitectureProjects />} />
            <Route path="ArchitectureProjects/:id" element={<ArchitectureProjects />} />

            <Route path="luxury-home-projects/:id" element={<LuxuryhomesProjects />} />

            <Route path="interiors/:id" element={<InteriorsProjects />} />
            <Route path="InteriorsProjects/:id" element={<InteriorsProjects />} />

            <Route path="archives" element={<Archives />} />
            <Route path="career" element={<Career />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
