import React from "react";
import Link from "next/link";
import Head from "next/head";
import Slide from "react-reveal/Slide";

function Aboutus() {
  return (
    <>
      <Head>
        <title>About Bob's N Barley</title>
        <meta property="og:title" content="About Bob's N Marley" />
        <meta
          property="og:description"
          content="Bob's N Marley "
        />
      </Head>

      <section className="common_page_header top_banner about_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">About Bob's N Barley</h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
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
                  <h2 className="common_title">
                    Who We Are
                  </h2>
                  <p>
                  Hotel Bob’s N Barley is located within easy driving distance from Dharamshala, it is just 54 minutes from Kangra Airport and 28 minutes from Dharamshala. The hotel is a perfect weekend getaway near Dharamshala where guests enjoy unparalleled facilities for relaxation and rejuvenation in the scenic Dhauladhar Hills.
                  </p>
                  <p>
                  There are always small touches that enhance the experience when you stay with us. Hotel Bob’s n barley is the part of the Eco Hospitality. Book your relaxing stay with us at and experience our heartfelt services and enjoy your luxurious, comfortable & memorable stay. Hotel Bob’s N Barley restaurants promise a unique experience of cuisines.
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
                  <h2 className="common_title">
                    About Dharamshala
                  </h2>
                  <p>
                  At Bob’s n Barley, we believe that sharing knowledge and expertise will not only be helpful to us but to the society and in our case, the hospitality sector at large. So, we came up with Consultancy services under Rajan Sharma having a plethora of experience in hand to be provided to our customers looking for guidance and advice
                  </p>
                  <br></br>
                  <p>
                  For the same, we recommend checking out the Consultancy link on our website for more information.The hotel offers you the very best in hospitality with an eclectic mix of recreational services unseen in any other hotel in the city. Come! Discover the real Paradise on Earth Out & In Bob’s n Barley.
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
