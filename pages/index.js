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
  // const [feeds, setFeeds] = useState([]);
  const lat = 32.253631006819326;
  const long = 76.30272032878739;
  const weatherapiKey = process.env.API_KEY;
  const weatherapiLink = process.env.API_LINK;
  // const instagramLink = process.env.INSTA_LINK;
  // const instagramToken = process.env.INSTA_TOKEN;
  const weatherapiUrl = `${weatherapiLink}/?lat=${lat}&lon=${long}&units=metric&APPID=${weatherapiKey}`;
  // const instagramUrl = `${instagramLink}${instagramToken}`;

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
    console.log(weatherapiUrl);
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

  // useEffect(() => {
  //   const fetchFeeds = () => {
  //     axios
  //       .get(instagramUrl)
  //       .then((res) => {
  //         setFeeds(res.data.data);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchFeeds();
  // }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.png" />
        <title>bobsnbarley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="banner">
        <div className="banner_text text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12">
                {/* <h2 className="animate__animated animate__bounce">
                  Experience
                </h2>
                <h2>NATURE</h2>
                <h2>in its purest form.</h2> */}
                <h1 className="page__title"> 
                Experience <span><br />Nature</span><br /> it is purification
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
                    href="https://goldenfernresort.bookingjini.com/property"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/arrow-forward.svg" alt="Icon" />
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
                  Bobs N Barley <br></br> Naddi
                  <a className="common_arrow" href="/about-us">
                    <img src="/arrow-forward-outline.svg" alt="Icon" />
                  </a>
                </h2>
                <p>
                  Hotel Bob’s N Barley is located within easy driving distance
                  from Dharamshala, it is just 54 minutes from Kangra Airport
                  and 28 minutes from Dharamshala. The hotel is a perfect
                  weekend getaway near Dharamshala where guests enjoy
                  unparalleled facilities for relaxation and rejuvenation in the
                  scenic Dhauladhar Hills.
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
                      <div className="rooms_slider_image premium_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 6500 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Premium Room</h4>
                        <p>
                          A premium room is anything that the hotel deems is
                          better than their standard, whether it is a higher
                          floor, corner room, balcony, refrigerator, larger
                          room, better view, etc. It means the room has more
                          facilities than the standard room.
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
                        <h4>Super Deluxe Room</h4>
                        <p>
                          The Super deluxe hotel room is finely decorated for
                          your luxurious stay and contains all basic amenities
                          such as Color LCD with Cable, Large windows for the
                          perfect valley views, cozy double bed, Resting chair,
                          Dressing mirror, Mini Fridge, and 24 hrs running hot
                          and cold water.
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
                          A functionally arranged living space with furnishings
                          such as a writing desk and parlor style chairs, and a
                          spacious bathroom provide a leisurely feel. Deluxe
                          Rooms are available on the Penthouse floor as well.
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
                      We had a 3 nights stay at Bob'snBarley... Staff is
                      extremely courteous. Food was very tasty they happily
                      accepted and provided our special requests for the dishes
                      especially Chinese n Idli too.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Madhura Kulkarni</h5>
                    <p>From Kerala</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Clean rooms and tasty foods of In-house
                      restaurantBeautiful scenic view of DAULADAR MOUNTAIN
                      RangeWith awesome staff and their serviceWith polite and
                      humble peopleWhen visit DHARAMSHALA.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Ameya Mhatre</h5>
                    <p>From Kinnaur</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Best place to stay in Mcleodganj. A big shout-out to the
                      Manager and support staff who were extremely
                      courteous,humble and quick in service.Food was delicious
                      and view from the room was superb.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Mayur upasani</h5>
                    <p>From Delhi</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Rooms were very neat and clean and big in size. Hotel
                      staff including manager was very humble and courteous.
                      There was variety in breakfast and main course with
                      awesome taste. View from room was also very beautiful.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Prasad Kulkarni</h5>
                    <p>From Delhi</p>
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
    </div>
  );
}
