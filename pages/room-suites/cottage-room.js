import React from "react";
import Zoom from "react-reveal/Zoom";

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
import Head from "next/head";

function SuperDeluxeROom() {
  const superdeluxe = {
    items: 1,
    dots: false,
  };

  const otherroom = {
    items: 2,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Super Deluxe Room | Hotel Woodrina</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="Executive Room On Budget | Hotel Woodrina"
        />
        <meta
          property="og:description"
          content="Classic rooms are designed to the finest standards and are located on all levels, with all modern amenities and furnishing to meet desired | Hotel Woodrina"
        />
      </Head>

      <div className="single-room-banner cottage-singleroom-banner"></div>

      <section className="about_hotel room_page_desc common_padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
              <div className="room_price">
                <p>rates from</p>
                <h2>₹ 5000 /</h2>
                <span>per night + 12% Tax</span>
              </div>
              <h1>
                <span className="green_color">
                Super Deluxe </span>Room
              </h1>
              <p>
              The Super deluxe hotel room is finely decorated for your luxurious stay and contains all basic amenities such as Color LCD with Cable, Large windows for the perfect valley views, cozy double bed, Resting chair, Dressing mirror, Mini Fridge, and 24 hrs running hot and cold water.
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-12 about_hotel_right room_aminities facilities_section text-center row-room">
              <div className="col-md-12 col-sm-12 text-center">
                <h2 className="common_title color_white">Room Facilities</h2>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/ketttle.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>BOOK NOW</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/room-service.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>ROOM SERVICE</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/wifi.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>FREE WIFI</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/bed.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>SPACIOUS GUEST ROOM</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/tv.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>LCD WITHOUT HD CHANNEL</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <Zoom>
                      <img src="/breakfast.svg" alt="Icon" />
                    </Zoom>
                  </span>
                  <p>BREAK-FAST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-room-sec other_room_section single-room">
        <div className="container">
          <div className="row">
            <div id="" className="executive-room-section">
              <OwlCarousel
                className="gallery-owl-theme owl-theme"
                nav
                {...superdeluxe}
              >
                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage:
                        "url('/cottage-room/gallery-1.jpg')",
                    }}
                  ></div>
                </div>
                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage:
                      "url('/cottage-room/gallery-2.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage:
                      "url('/cottage-room/gallery-3.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage:
                      "url('/cottage-room/gallery-4.jpg')",
                    }}
                  ></div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section other_room_section other-room">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="green_title">Other Room Types</h2>
            </div>
            <div className="activities_slider">
              <OwlCarousel
                className="owl-theme"
                responsiveClass={true}
                nav
                {...otherroom}
              >
                <div className="single-room-item">
                  <div className="other-item">
                    <div
                      className="attraction_column"
                      style={{ backgroundImage: "url('/family-suite.jpg')" }}
                    >
                      <a href="/room-suites/family-suite">
                        <div className="attraction_column_title otherroom_title">
                          <h3>Family Suite</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-room-item">
                  <div className="other-item">
                    <div
                      className="attraction_column"
                      style={{
                        backgroundImage: "url('/Deluxe/deluxe-category.jpg')",
                      }}
                    >
                      <a href="/room-suites/deluxe-room">
                        <div className="attraction_column_title otherroom_title">
                          <h3>Deluxe Room</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuperDeluxeROom;
