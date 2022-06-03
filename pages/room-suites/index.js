import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Scrollspy from "react-scrollspy";
import Fade from "react-reveal/Fade";

function roomsuites() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 1400);
      console.log("scrooll in");
    });
  }, []);

  return (
    <>
      <Head>
        <title>Luxurious Rooms & Suites In Shimla | Bob's N Barley</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="Luxurious Rooms & Suites In Shimla | Bob's N Barley"
        />
        <meta
          property="og:description"
          content="We offer super luxurious and spacious rooms and suites at very reasonable prices in the area. Check out our varieties of rooms for detailed | Bob's N Barley"
        />
      </Head>

      <section className="common_page_header top_banner rooms_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Rooms & Suites</h1>
              <p className="rooms-subtitle">
                The rooms at Hotel Woodrina are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 scrool_section" id="rooms_suits">
        <div className="container">
          <div className="row">
            <div className="panel_sidebar">
              <Scrollspy
                items={["room1", "room2", "room3", "room4"]}
                className={scroll ? "list-absolute" : "list_fixed"}
                currentClassName="is-current"
                offset={-300}
                id="sidebar"
              >
                <li className="scrool-items">
                  <Link href="#room1">FAMILY SUITE</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room2">COTTAGE ROOM</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room3">DELUXE ROOM</Link>
                </li>
              </Scrollspy>
            </div>

            <div className="scrollspy-example col-md-10 offset-md-2">
              <div id="room1" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image family-suite"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">FAMILY SUITE</h2>
                          <p>The family suite is a combination of two big sized rooms, both the rooms have independent with separate entry with one bathroom. 1 suite is ideal for a family of 4 Adults or 4 pax. 
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/family-suite"
                          >
<img src="/arrow-forward-outline.svg" alt="Icon" />                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room2" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image cottage-room"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                          COTTAGE ROOM
                          </h2>
                          <p>
                          11 cottage rooms is the unique selling feature of our property. The beautiful interior and open space around the cottage with the Lawn area make it a favorite for every guest to opt to stay and experience the hospitality at its best.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/cottage-room"
                          >
                           <img src="/arrow-forward-outline.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room3" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image deluxe"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                          DELUXE ROOM
                          </h2>
                          <p>
                          Deluxe Rooms are located in the main Block at Woodrina. The total number of Deluxe Rooms in the Main block is 11. Every room in this block is spacious and equipped with modern facilities and interiors are done.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/deluxe-room"
                          >
                           <img src="/arrow-forward-outline.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default roomsuites;
