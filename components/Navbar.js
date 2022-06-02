import React, { useState } from "react";
import Link from "next/link";
import $ from "jquery";

const Navbar = () => {
  const [isactive, setIsactive] = useState(false);

  const handleIsActive = () => {
    setIsactive(!isactive);
  };

  return (
    <>
      <header className="header">
        <div className="header_bottom w-100">
          <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 logo">
                  <Link className="navbar-brand" href="/">
                    <img
                      src="/bobs-n-barley-final-logo.svg"
                      alt="Logo"
                      className="logo img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 header_right">
                  <nav className="navbar navbar-expand-md">
                    <div className="navbar-collapse" id="navbarNav">
                      <div
                        id="bs-example-navbar-collapse-1"
                        className="collapse"
                      >
                        <ul id="menu-header-menu" className="nav navbar-nav">
                          <li>
                            <Link href="/about-us">about us</Link>
                          </li>
                          <li>
                            <Link href="/room-suites">room & suits</Link>
                          </li>
                          <li>
                            <Link href="/attractions-and-activities">
                              Attraction & Activities
                            </Link>
                          </li>
                          <li>
                            <Link href="/restaurant">restaurant</Link>
                          </li>
                          {/* <li>
                            <Link href="/Healthsafety">health & safety</Link>
                          </li> */}
                          <li>
                            <Link href="/contact-us">contact us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <button onClick={handleIsActive} className="header_toggle">
                      <img alt="logo" src="/toggle.svg" />
                    </button>
                  </nav>

                  <div className="book_appointment text-capitalize">
                    <Link
                      data-bs-toggle="modal"
                      target="_blank"
                      data-bs-target="#exampleModal"
                      href="https://goldenfernresort.bookingjini.com/property"
                    >
                     <a target="_blank">Book Now</a>
                    </Link>
                    <div className="common_arrow">
                      <img src="/arrow-forward-outline.svg" alt="Icon" />
                    </div>
                  </div>
                </div>
                {/* <div className="menu-btn">
                  <button className="bg-trans" onClick={handleIsActive}>
                    <img alt="logo" src="/toggle.svg" />
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </header>

      {isactive ? (
        <header className="header-trans">
          <div className="mobile-header container">
            <div className="mobile-header-div">
              <div className=" col-lg-3 col-md-3 col-sm-10 logo">
                <Link className="navbar-brand" href="/">
                  <img src="/bobs-n-barley-final-logo.svg" alt="Logo" className="logo img-fluid" />
                </Link>
              </div>
              <div>
                <button className="navbar-cut-btn" onClick={handleIsActive}>
                  <img alt="logo" src="/cross.png" />
                </button>
              </div>
            </div>
            <div>
              <nav>
                <div>
                  <div className="res-header-links">
                    <ul className="mobile-view-ul">
                      <li className="mobile-view-lists">
                        <Link href="/">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/about-us">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            About Us
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/room-suits">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Room & Suits
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/attractions-and-activities">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Attraction & Activities
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/restaurant">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Restaurant
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/contact-us">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* <div className="book-now-btn">
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href="#/"
                >
                  <a className="book-now">Book Now</a>
                </Link>
                <div className="common_arrow">
                  <img src="/images/arrow.svg" alt="Icon" />
                </div>
              </div> */}
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
