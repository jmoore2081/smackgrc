import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo-white.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div className="container m-auto py-6 flex flex-wrap justify-start items-center">
          <div className="navbar-brand">
            <Link to="/" className="py-2" title="SMACK GRC Logo">
              <img src={logo} alt="SMACK GRC" style={{ width: "188px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`flex items-start ${this.state.navBarActiveClass} pl-6`}
          >
            <div className="navbar-start text-left">
              <Link
                className="px-4 font-hairline leading-loose text-white-500"
                to="/solutions"
              >
                Solutions
              </Link>
              <Link
                className="px-4 font-hairline leading-loose text-white-500"
                to="/requirements"
              >
                GRC Requirements
              </Link>
              <Link
                className="px-4 font-hairline leading-loose text-white-500"
                to="/about"
              >
                About
              </Link>
              <Link
                className="px-4 font-hairline leading-loose text-white-500"
                to="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
          <div
            className={`flex items-end flex-grow justify-end ${
              this.state.navBarActiveClass
            } pl-6`}
          >
            <div className="text-right">
              <Link
                className="px-4 py-4 font-hairline leading-loose text-white-500 flex items-center"
                to="/contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  className="mr-2"
                >
                  <path
                    fill="#FFF"
                    d="M14.017 1.088L1.342 8.398a.656.656 0 0 0 .06 1.182l2.907 1.219 7.856-6.922c.15-.134.364.07.236.227l-6.588 8.024v2.2c0 .645.78.9 1.162.432l1.736-2.113 3.408 1.427a.658.658 0 0 0 .902-.498l1.97-11.81a.656.656 0 0 0-.974-.678z"
                  />
                </svg>
                Schedule a Demo
              </Link>
            </div>
            <div>
              <a
                className="px-4 py-4 font-hairline leading-loose text-white-500 flex items-center"
                href="tel:+18552495655"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  style={{
                    fill: "white",
                    marginRight: "0.3em"
                  }}
                >
                  <g transform="scale(0.018 0.018)">
                    <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z" />
                  </g>
                </svg>
                855 249 5655
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
