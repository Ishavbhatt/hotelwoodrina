import React from "react";
import Link from "next/link";
import Head from "next/head";
import Slide from "react-reveal/Slide";

function Aboutus() {
  return (
    <>
      <Head>
        <title>About Hotel Woodrina</title>
        <meta property="og:title" content="About Hotel Woodrina" />
        <meta property="og:description" content="Hotel Woodrina" />
      </Head>

      <section className="common_page_header top_banner about_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">About Hotel Woodrina</h1>
              <p className="about-subtitle">
                The rooms at Hotel Woodrina are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scrollspy-example common_padding w-100">
        <div className="spy_section">
          <div className="about_hotel_col">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 wedding_services_right">
                  <div className="wedding_services_image about-hotel"></div>
                </div>
                <Slide right>
                  <div className="col-md-6 col-sm-12 about_hotel_text">
                    <h2 className="common_title">Who We Are</h2>
                    <p>
                    Located at the height of 7000 feet just 9 km from city centre The Mall Road Shimla, We welcome you to Hotel Woodrina. Surround yourself to peace and thick Deodar Forest, Breathe and witness the breathtaking 360 – degree view and beautiful sunset from the Deck. Back in British Era the Hotel use to be the home of a British Army officer and his family.
                    </p>
                    <br />
                    <p>
                    Presently the Hotel has 11 Cottages One Room Cottage, Two/Bedroom Cottage, and four Bed Rooms cottages with 12 Rooms with a restaurant in the main block along with one Banquet Hall of 4500 Sq Feet.
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className="spy_section">
          <div className="about_hotel_col">
            <div className="container">
              <div className="row justify-center">
                <Slide left>
                  <div className="col-md-6 col-sm-12 about_hotel_text">
                    <h2 className="common_title">About Shimla</h2>
                    <p>
                    Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue.
                    </p>
                  </div>
                </Slide>
                {/* <Slide right> */}
                <div className="col-md-6 col-sm-12 wedding_services_right">
                  <div className="about_hotel_image about-dharamshala"></div>
                </div>
                {/* </Slide> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
