import React from "react";

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

function Attractionactivities() {
  const attractions = {
    items: 3,
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

  const activty = {
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
      {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}

      <Head>
        <title>
          Popular Places & Activities in Naddi Dharamshala | Hotel Woodrina
        </title>
        <meta
          property="og:title"
          content="Popular Places & Activities in Shimla | Hotel Woodrina"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within Shimla to visit and also some exciting sports and activities to take part in | Hotel Woodrina"
        />
      </Head>

      <section className="common_page_header top_banner attraction_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Attraction & Activities</h1>
              <p className="attr-subtitle">
                There are not enough words to describe the charm that transpires
                in the hotel rooms and public areas. Make a tour, wherever you
                are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="green_title">Attractions</h2>
            </div>
            <div className="owl-carousel owl-theme owl-loaded attraction_slider">
              <OwlCarousel
                className="owl-theme"
                responsiveClass={true}
                nav
                {...attractions}
              >
                <div className="activity-item">
                  <div className="attraction_column attraction_item_1">
                    <div className="attraction_column_title">
                      <h3>Fagu</h3>
                      <p>
                        Fagu is Cuddling in the Majestic Himalayan Range. This
                        place looks magical as it is always enveloped in snow &
                        fog. The clouds are so close to the surface that at
                        times it feels as if you are walking on clouds.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_2">
                    <div className="attraction_column_title">
                    <h3>Green Valley</h3>
                      <p>
                        The Ridge road is a large open space, located in the
                        center of Shimla. The Ridge is the hub of all cultural
                        activities of Shimla. It runs east to west alongside
                        Mall Road. It is only 18 minutes distance from us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_3">
                    <div className="attraction_column_title">
                      
                      <h3>Jakhu Temple</h3>
                      <p>
                        Jakhu Temple is Dedicated to Lord Hanuman, it houses a
                        108-foot-tall idol of the deity. It offers sweeping
                        views of the Shivalik ranges. The temple is situated at
                        Jakhu Hills about 2.5 km away from the Ridge in Shimla.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_4">
                    <div className="attraction_column_title">
                      <h3>Nature Park</h3>
                      <p>
                        Jakhu Temple is Dedicated to Lord Hanuman, it houses a
                        108-foot-tall idol of the deity. It offers sweeping
                        views of the Shivalik ranges. The temple is situated at
                        Jakhu Hills about 2.5 km away from the Ridge in Shimla.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_5">
                    <div className="attraction_column_title">
                      <h3>State Meseum</h3>
                      <p>
                        Fagu is Cuddling in the Majestic Himalayan Range. This
                        place looks magical as it is always enveloped in snow &
                        fog. The clouds are so close to the surface that at
                        times it feels as if you are walking on clouds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column attraction_item_6">
                    <div className="attraction_column_title">
                      <h3>Green Valley</h3>
                      <p>
                        The Ridge road is a large open space, located in the
                        center of Shimla. The Ridge is the hub of all cultural
                        activities of Shimla. It runs east to west alongside
                        Mall Road. It is only 18 minutes distance from us.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="green_title">Activities</h2>
            </div>
            <div className="owl-carousel owl-theme owl-loaded activities_slider">
              <OwlCarousel
                className="activity-owl"
                responsiveClass={true}
                nav
                {...activty}
              >
                <div className="activity-item">
                  <div className="attraction_column item_4">
                    <div className="attraction_column_title">
                      <h3>Adventure activities at Fagu</h3>
                      <p className="attraction-para">
                      Any trek to Himachal Pradesh is not finished without getting a charge out of the experience game of skiing in Fagu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="attraction_column item_5">
                    <div className="attraction_column_title">
                      <h3>Motorcycle on rent</h3>
                      <p className="attraction-para">
                      Accomplish your endeavor of riding a motorcycle on Himalayan roads by renting from us.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="activity-item">
                  <div className="attraction_column item_5">
                    <div className="attraction_column_title">
                      <h3>Bicycle on rent</h3>
                      <p className="attraction-para">
                      Rent out bicycle to visit Catchment Wildlife Sanctuary
                      </p>
                    </div>
                  </div>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Attractionactivities;
