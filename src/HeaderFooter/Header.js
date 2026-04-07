import { NavLink } from "react-router-dom";
import "./Header.css";

const projectLinks = [
  { to: "/architecture", label: "Architecture" },
  { to: "/interior", label: "Interior" },
  { to: "/projectmanagement", label: "Project Management" },
  { to: "/uihomes", label: "UI Homes" },
  { to: "/archives", label: "Archives" },
];

function Header() {
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
            data-bs-toggle="collapse"
            data-bs-target="#siteNavbar"
            aria-controls="siteNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="siteNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 site-nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
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
                  className={({ isActive }) =>
                    `nav-link site-nav-link${isActive ? " is-active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown site-dropdown">
                <span className="nav-link site-nav-link">Project</span>

                <ul className="site-dropdown-menu">
                  {projectLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
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
