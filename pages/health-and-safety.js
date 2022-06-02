import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

function Healthsafety() {
  return (
    <>
      <Head>
        <title>Health & Safety Assurance | Bob's N Barley</title>
        <meta
          property="og:title"
          content="Health & Safety Assurance | Bob's N Barley"
        />
        <meta
          property="og:description"
          content="We care for you, our extensive list of safety measures includes mandatory use of masks, gloves and PPE kits for all our mates, sanitation | Bob's N Barley"
        />
      </Head>

      <section className="common_page_header top_banner health_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Health & Safety Assurance</h1>
              <p className="health-subtitle">
                We care for you,Our extensive list of safety measures include
                the following:
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="safety_section_columns w-100 common_padding">
        <section className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <Fade bottom>
              <div className="col-md-6 col-sm-12 safety_section_text">
                <h2>Mandatory Use of Safety Gears</h2>
                <ul>
                  <li>
                    Mandatory use of protective gear including masks, gloves and
                    PPE kits for all our associates.
                  </li>
                  <li>
                    Regular temperature checks of all guests, associates and
                    partners upon entering the hotel premises.
                  </li>
                  <li>
                    Alarms for all the associates as a reminder to sanitise
                    themselves Rigorous deep cleaning and application of
                    disinfectants in guest rooms, fitness centres and
                    restaurants.
                  </li>
                </ul>
              </div>
              </Fade>
              <div className="col-md-6 col-sm-12 safety_section_image">
                <div className="safety_inner_1"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="safety_section common_padding">
          <div className="container">
            <div className="row">
            <Fade bottom>
              <div className="col-md-6 col-sm-12 safety_section_text">
                <h2>Proper Sanitation</h2>
                <ul>
                  <li>
                    Cleaning of all high-touch points like door handles,
                    elevator buttons, counter tops, table tops and railings with
                    disinfectant at regular intervals.
                  </li>
                  <li>
                    Use of hotel cars for transferring guests to ensure maximum
                    safety.
                  </li>
                  <li>
                    Sanitisation and inspection of all cars by the concierge
                    team before and after every transfer.
                  </li>
                  <li>
                    Deployment of task force under the guidance of our partners
                    and a dedicated Hygiene Manager, to ensure that all
                    protocols are strictly followed across all hotel
                  </li>
                </ul>
              </div>
              </Fade>
              <div className="col-md-6 col-sm-12 safety_section_image">
                <div className="safety_inner_2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="safety_section common_padding">
          <div className="container">
            <div className="row">
            <Fade bottom>
              <div className="col-md-6 col-sm-12 safety_section_text">
                <h2>Food & Hygiene</h2>
                <ul>
                  <li>Restaurant seating to ensure social distancing</li>
                  <li>
                    Introduction of an e-menu that can be viewed by guests on
                    their respective phones
                  </li>
                  <li>
                    Use of hand sanitisers in restaurants Introduction of
                    natural immunity-boosting beverages, which will help our
                    guests stay healthy
                  </li>
                  <li>
                    Washing and sanitisation of vegetables, fruits and groceries
                  </li>
                  <li>
                    Preparation of food in small quantities to ensure fresh food
                    is served to the guests Washing of all dishes at 80 degrees
                    Celsius
                  </li>
                </ul>
              </div>
              </Fade>
              <div className="col-md-6 col-sm-12 safety_section_image">
                <div className="safety_inner_3"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <Fade bottom>
              <div className="col-md-6 col-sm-12 safety_section_text">
                <h2>Contact Free Interaction</h2>
                <ul>
                  <li>
                    Contactless check in and check out facility provided with
                    the privilege of paying through phone at check out
                  </li>
                  <li> Use of high bar pressure dry steam cleaners</li>
                  <li>Electrostatic sprayers, a hospital-grade disinfectant</li>
                  <li>
                    Full access to digital news and e-papers instead of print
                    newspapers
                  </li>
                </ul>
              </div>
              </Fade>
              <div className="col-md-6 col-sm-12 safety_section_image">
                <div className="safety_inner_4"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Healthsafety;
