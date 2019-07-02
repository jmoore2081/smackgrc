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
        <div className="container m-auto py-8 flex flex-wrap justify-start items-center">
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
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
