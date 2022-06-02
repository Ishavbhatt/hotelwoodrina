import React from "react";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Restaurant() {
  
  const gallery = {
    items: 2,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Restaurant | Golden Fern Resort</title>
        <meta property="og:title" content="About Golden Fern Resort" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>

      <section className="common_page_header top_banner restaurant_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Our Restaurant</h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scrollspy-example">
        <div className="container">
          <div className="row">
            <div className="spy_section">
              <div className="restaurant_col">
                <div className="container">
                  <div className="row">
                  <Fade bottom>
                    <div className="col-md-6 col-sm-12 wedding_services_right">
                      <div className="restaurant_image res-img-1"></div>
                    </div>
                    </Fade>
                    <Fade top>
                      <div className="col-md-6 col-sm-12 about_hotel_text">
                        <h3 className="common_title">
                          <span className="red_color">
                            An Ambient Dining Experiance
                          </span>
                        </h3>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
                        </p>
                        <div className="res_link_btn text-capitalize">
                          <Link href="/menu">
                            <a>View Menu</a>
                          </Link>
                          <div className="common_arrow">
                            <img src="arrow-forward-outline.svg" alt="Icon" />
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="spy_section">
              <div className="restaurant_col">
                <div className="container">
                  <div className="row">
                  <Fade bottom>
                    <div className="col-md-6 col-sm-12 wedding_services_right">
                      <div className="restaurant_image res-img-2"></div>
                    </div>
                    </Fade>
                    <Fade top>
                      <div className="col-md-6 col-sm-12 about_hotel_text">
                        <h3 className="common_title">
                          <span className="red_color">
                            Traditional & Family Reciepe
                          </span>
                        </h3>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
                        </p>

                        <div className="res_link_btn text-capitalize">
                          <Link href="/contact-us">
                            <a>Make Reservation</a>
                          </Link>
                          <div className="common_arrow">
                          <img src="arrow-forward-outline.svg" alt="Icon" />
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding">
        <div className="container">
          <div className="row">
            <div className="text-left">
              <h2 className="red_title">Restaurant Gallery</h2>
            </div>
            <div className="owl-carousel owl-theme owl-loaded restaurant-slider">
              <OwlCarousel
                className="activity-owl"
                responsiveClass={true}
                nav
                {...gallery}
              >
                <div className="activity-item">
                  <div className="restaurant_column res-item-1"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-2"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-3"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-4"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-5"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-6"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-7"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-8"></div>
                </div>
                <div className="activity-item">
                  <div className="restaurant_column res-item-9"></div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
