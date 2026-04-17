import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";

const projectLinks = [
  { to: "/architecture", label: "Architecture" },
  { to: "/interior", label: "Interior" },
  { to: "/projectmanagement", label: "Project Management" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
      if (window.innerWidth >= 1025) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobile && isMenuOpen) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand site-brand" to="/">
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

          <div className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`} id="siteNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 site-nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li className={`nav-item site-dropdown${isDropdownOpen ? " show" : ""}`}>
                <span 
                  className="nav-link site-nav-link" 
                  onClick={toggleDropdown}
                  style={{ cursor: isMobile ? "pointer" : "default" }}
                >
                  Project {isMobile && (isDropdownOpen ? "▾" : "▸")}
                </span>

                <ul className={`site-dropdown-menu${isDropdownOpen ? " show" : ""}`}>
                  {projectLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `site-dropdown-link${isActive ? " is-active" : ""}`
                        }
                        onClick={closeMenu}
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
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Career
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
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
