import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const projectLinks = [
  { to: "/architecture", label: "Architecture" },
  { to: "/interior", label: "Interior" },
  { to: "/projectmanagement", label: "Project Management" },
  { to: "/uihomes", label: "UI Homes" },
  { to: "/archives", label: "Archives" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const location = useLocation();
  const projectDropdownRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProjectOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectDropdownRef.current &&
        !projectDropdownRef.current.contains(event.target)
      ) {
        setIsProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
    setIsProjectOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectOpen(false);
  };

  const toggleProjectMenu = () => {
    setIsProjectOpen((current) => !current);
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand site-brand" to="/" onClick={closeMenu}>
            URBAN iNFiLL
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="siteNavbar"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse${isMenuOpen ? " show" : " collapse"}`}
            id="siteNavbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 site-nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li
                className={`nav-item dropdown site-dropdown${
                  isProjectOpen ? " is-open" : ""
                }`}
                ref={projectDropdownRef}
              >
                <button
                  className={`nav-link site-nav-link site-dropdown-trigger${
                    isProjectOpen ? " is-active" : ""
                  }`}
                  type="button"
                  onClick={toggleProjectMenu}
                  aria-expanded={isProjectOpen}
                  aria-haspopup="true"
                >
                  Project
                </button>

                <ul className="site-dropdown-menu">
                  {projectLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `site-dropdown-link${isActive ? " is-active" : ""}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blogs"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                >
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
