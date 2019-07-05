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
              navBarActiveClass: "hidden md:visible"
            })
          : this.setState({
              navBarActiveClass: "visible md:visible"
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div className="container m-auto py-6 flex flex-wrap justify-start items-center">
          <div className=" w-full md:w-auto flex">
            <Link to="/" className="py-2" title="SMACK GRC Logo">
              <img src={logo} alt="SMACK GRC" style={{ width: "188px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`visible md:hidden w-1/2 my-3 pr-6 text-white-100 flex flex-wrap justify-end items-center`}
              onClick={() => this.toggleHamburger()}
            >
              <div className="w-1/6 mr-2">
                <span className="block border rounded bg-white-100 border-white-100 my-1 w-full" />
                <span className="block border rounded bg-white-100 border-white-100 mt-1 w-full" />
                <span className="block border rounded bg-white-100 border-white-100 mt-1 w-full" />
              </div>
            </div>
          </div>
          <div
            className={`block w-full md:w-auto md:flex md:items-start ${
              this.state.navBarActiveClass
            } pl-6`}
          >
            <div className="text-left w-full md:w-auto">
              <Link
                className="block md:inline-block py-3 md:py-0 px-4 font-hairline leading-loose text-white-500 w-full md:w-auto"
                to="/solutions"
              >
                Solutions
              </Link>
              <Link
                className="block md:inline-block py-3 md:py-0 px-4 font-hairline leading-loose text-white-500 w-full md:w-auto"
                to="/requirements"
              >
                GRC Requirements
              </Link>
              <Link
                className="block md:inline-block py-3 md:py-0 px-4 font-hairline leading-loose text-white-500 w-full md:w-auto"
                to="/about"
              >
                About
              </Link>
              {/* <Link
                className="block md:inline-block py-3 md:py-0 px-4 font-hairline leading-loose text-white-500 w-full md:w-auto"
                to="/blog"
              >
                Blog
              </Link> */}
            </div>
          </div>
          <div
            className={`flex justify-center items-end flex-grow md:justify-end md:pl-6 ${
              this.state.navBarActiveClass
            }`}
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
