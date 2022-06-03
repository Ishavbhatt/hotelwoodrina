import React, { useState, useEffect } from "react";
import Head from "next/head";
import DatePicker from "react-datepicker";
import axios from "axios";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const datenmonth = new Date().toLocaleDateString("en-MS", {
  day: "2-digit",
  month: "short",
});

let curruntDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
});

export default function Home() {
  const [people, setPeople] = useState(1);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const lat = 31.1048;
  const long = 77.1734;
  const weatherapiKey = process.env.API_KEY;
  const weatherapiLink = process.env.API_LINK;
  const instagramLink = process.env.INSTA_LINK;
  const instagramToken = process.env.INSTA_TOKEN;
  const weatherapiUrl = `${weatherapiLink}/?lat=${lat}&lon=${long}&units=metric&APPID=${weatherapiKey}`;
  const instagramUrl = `${instagramLink}${instagramToken}`;

  const rooms = {
    items: 1,
  };

  const testmonials = {
    center: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  };
  const blogs = {
    center: true,
    margin: 20,
    items: 3,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        // nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  };

  const instaGallery = {
    stagePadding: 50,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  // Increment People
  const incPeople = () => {
    setPeople(people + 1);
  };

  // Decrement People
  const decPeople = () => {
    if (people === 1) {
      return;
    }
    setPeople(people - 1);
  };

  useEffect(() => {
    fetch(weatherapiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const fetchFeeds = () => {
      axios
        .get(instagramUrl)
        .then((res) => {
          setFeeds(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFeeds();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" />
        <title>Hotel Woodrina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="banner">
        <div className="banner_text text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12">
                
                <h1 className="page__title">
                Welcome to hotel Woodrina Shimla
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bnr-booking">
            <div className="check-in-out-container">
              <div className="pick-dates">
                <label>Check-in</label>
                <DatePicker
                  wrapperClassName="date-picker"
                  placeholderText={datenmonth}
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
                <span className="bkg-arrow-down">
                  <img src="/filter-down-arrow.svg" alt="" />
                </span>
              </div>
              <div className="pick-dates vr-left-rigth">
                <label>Check-out</label>
                <DatePicker
                  wrapperClassName="date-picker"
                  placeholderText={datenmonth}
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
                <span className="bkg-arrow-down">
                  <img src="/filter-down-arrow.svg" alt="" />
                </span>
              </div>
              <div className="pick-dates vr-left-rigth">
                <label>People</label>
                <div className="people-btn">
                  <p className="people">{people}</p>
                  <span>
                    <button className="bkg-arrow-btn" onClick={incPeople}>
                      <img src="/filter-up-arrow.svg" alt="" />
                    </button>
                    <button className="bkg-arrow-btn" onClick={decPeople}>
                      <img src="/filter-down-arrow.svg" alt="" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="banner-book-btn pick-dates popup-book-btn">
                <div className="common_arrow">
                  <a
                    href="/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/arrow-forward-outline.svg" alt="Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixedweather">
            <h6 className="weather-date">{curruntDate}</h6>
            {data && (
              <div>
                <h4 className="weather-status">
                  {data.weather[0].description}
                </h4>
                <h3 className="weather-temp">
                  {data.main.temp}
                  <span>&#176;</span>
                  <span>C</span>
                </h3>
                <h6 className="weather-name">{data.name}, India</h6>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="about_hotel">
        <div className="container">
          <div className="row">
            <Fade top>
              <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                <h2 className="common_title">
                  Hotel Woodrina <br></br> Shimla
                  <a className="common_arrow" href="/about-us">
                    <img src="/arrow-forward-outline.svg" alt="Icon" />
                  </a>
                </h2>
                <p>
                  Located at the height of 7000 feet just 9 km from City Centre
                  The Mall Road Shimla, We welcome you to Hotel Woodrina.
                  Surround yourself to peace and thick Deodar Forest, Breathe
                  and witness the breathtaking 360 - degree view and beautiful
                  sunset from the Deck. Back in British Era the Hotel use to be
                  the home of a British Army officer and his family.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                <div className="about_hotel_image"></div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="testimonials_section room_suites padding-t-b-40">
        <div className="container">
          <div className="row">
            <Fade bottom>
              <div className="col-md-12 col-sm-12 text-center">
                <h2 className="common_title ">Rooms & Suites</h2>
                <p className="rooms-para">
                  All rooms and suites are elegantly appointed and reflect
                  unpretentious luxury and stylish class with wooden flooring.
                </p>
              </div>
            </Fade>

            <div className="col-md-12 rooms_slider">
              <OwlCarousel className="gallery-owl-theme" {...rooms}>
                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns">
                      <div className="rooms_slider_image family_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 6000 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Family Suite</h4>
                        <p>
                          The family suite is a combination of two big sized
                          rooms, both the rooms have independent with separate
                          entry with one bathroom. 1 suite is ideal for a family
                          of 4 Adults or 4 pax.
                        </p>
                        <a
                          className="common_arrow"
                          href="/room-suites/executive-room"
                        >
                          <img src="/arrow-forward-outline.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image super_deluxe_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 4000 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Cottage Rooms</h4>
                        <p>
                          11 cottage rooms is the unique selling feature of our
                          property. The beautiful interior and open space around
                          the cottage with the Lawn area make it a favorite for
                          every guest to opt to stay and experience the
                          hospitality at its best.
                        </p>
                        <a
                          className="common_arrow"
                          href="/room-suites/classic-room"
                        >
                          <img src="/arrow-forward-outline.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image deluxe_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 3500 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Deluxe Room</h4>
                        <p>
                          Deluxe Rooms are located in the main Block at
                          Woodrina. The total number of Deluxe Rooms in the Main
                          block is 11. Every room in this block is spacious and
                          equipped with modern facilities and interiors are
                          done.
                        </p>
                        <a
                          className="common_arrow"
                          href="/room-suites/luxury-room"
                        >
                          <img src="/arrow-forward-outline.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials_section padding-t-b-40">
        <div className="container">
          <div className="row">
            <Fade bottom>
              <div className="col-md-6 offset-md-3 col-sm-12 text-center">
                <h2 className="test-title">What People Say?</h2>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Fade>
            <div className="col-md-12 padding-t-b-40 testimonials-dots">
              <OwlCarousel {...testmonials}>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Service is really good and nice place to stay. Very good
                      food and well serviced from Sandeep, pritam and they are
                      really good behavior. I will revisit this place. Hill play
                      to take a view. Enjoy 2 day stay very peaceful.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Preetham Preethu</h5>
                    <p>From Delhi</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Excellent staff, delightful dinner, and breakfast. Pritam,
                      Suresh, and Sandeep were extraordinarily staffed that I
                      have come across and I’ll visit again and recommend this
                      hotel to everyone who visits Kufri
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Vm biker malik</h5>
                    <p>From Delhi</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Food is tasty, Hotel is really nice and it’s rooms are
                      neat and clean, luggage storage are also available in
                      room. Their hospitality is awesome. Specially pritam and
                      sandeep will serve you at their best.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Shweta Ramchandani</h5>
                    <p>From Chandigarh</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="posts_section common_padding">
        <div className="container">
          <div className="row">
            <Fade top big>
              <h2 className="common_title">
                Stay Update with <br /> Bob's N Barley
              </h2>
              <div className="flex-between">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                  <p>
                    All rooms and suites are elegantly appointed and reflect
                    unpretentious luxury and stylish className with wooden
                    flooring.
                  </p>
                </div>
              </div>
            </Fade>
            <div className="clearfix"></div>
            <OwlCarousel {...blogs}>
              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Bob's N Barley</h4>
                <a href="/#">READ MORE</a>
              </div>

              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Bob's N Barley</h4>
                <a href="/#">READ MORE</a>
              </div>

              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Bob's N Barley</h4>
                <a href="/#">READ MORE</a>
              </div>
            </OwlCarousel>

            <div className="posts_section_btn">
              <a href="/#" className="common_btn">
                VIEW ALL POSTS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="insta_gallery_section common_padding">
        <div className="container">
          <div className="row">
            <Slide bottom>
              <h2 className="text-center">Follow Us On Instagram</h2>
            </Slide>
            <Link href="https://instagram.com/hotelwoodrina">
              <a target="_blank" className="insta-gallery-link">
                @hotelwoodrina
              </a>
            </Link>
            {isLoading ? (
              <div className="text-center">
                <img
                  className="insta_gallery_spinner"
                  src="/spinner.svg"
                  alt="Loading..."
                />
              </div>
            ) : (
              <OwlCarousel {...instaGallery}>
                {feeds.map((feed) => (
                  <img
                    className="insta-gallery-img"
                    key={feed.id}
                    src={feed.media_url}
                    alt=""
                  />
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
