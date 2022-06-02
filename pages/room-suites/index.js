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
                The rooms at Golden Fern are designed with simple, timeless
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
                  <Link href="#room1">PREMIUM ROOM</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room2">SUPER DELUXE ROOM</Link>
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
                          <div className="about_hotel_image premium"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">PREMIUM ROOM</h2>
                          <p> A premium room is anything that the hotel deems is better than their standard, whether it is a higher floor, corner room, balcony, refrigerator, larger room, better view, etc. It means the room has more facilities than the standard room.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/premium-room"
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
                          <div className="about_hotel_image super-deluxe"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                          SUPER DELUXE ROOM
                          </h2>
                          <p>
                          The Super deluxe hotel room is finely decorated for your luxurious stay and contains all basic amenities such as Color LCD with Cable, Large windows for the perfect valley views, cozy double bed, Resting chair, Dressing mirror, Mini Fridge, and 24 hrs running hot and cold water …
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/super-deluxe-room"
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
                          A functionally arranged living space with furnishings such as a writing desk and parlor style chairs, and a spacious bathroom provide a leisurely feel. Deluxe Rooms are available on the Penthouse floor as well.
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
