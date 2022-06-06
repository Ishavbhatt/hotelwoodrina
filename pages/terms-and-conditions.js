import React from "react";
import Head from "next/head";

function Termsandconditions() {
  return (
    <>
      <Head>
        <title>Terms And Conditions | Bob's N Marley</title>
        <meta
          property="og:title"
          content="Terms And Conditions | Bob's N Marley"
        />
        <meta
          property="og:description"
          content="The terms and conditions (“Conditions”) apply to your use of this website, including the utilization of the data services offered | Bob's N Marley"
        />
      </Head>

      <section className="common_page_header top_banner termscondition_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Terms and Conditions</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="common_page_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 privacy_column">
              <h3>Introduction</h3>
              <p>
                The terms and conditions stated below (“Conditions”) apply to
                your use of this website, including the utilization of the data
                services offered on the website. In accessing and using the
                site, you conform to be bound by these Conditions so please
                carefully read this section before proceeding. If you don’t
                accept these Conditions, you want to refrain from using the
                website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">Conditons:</h3>
              <ul>
                <li className="green_color termscondition-lists padding-t-20">Site</li>
                <p>
                  The Site makes available information concerning the hotel
                  under the laws of India, and its subsidiaries, controlled
                  entities, affiliates, associates, and related parties.
                </p>
                <li className="green_color termscondition-lists padding-t-20">Trade Marks</li>
                <p>
                  The Site contains trade and service marks and devices and
                  other valuable trade or service marks owned by Hotel Woodrina
                  or licensed to Hotel Woodrina to differentiate its services
                  and products.
                </p>
                <li className="green_color termscondition-lists padding-t-20">Copyright</li>
                <p>
                  The information, text, graphics, images, sounds, links, and
                  everyone other information published or otherwise contained
                  within the Site (“Information”) are either owned exclusively
                  by Hotel Woodrina or licensed by Hotel Woodrina and except as
                  specifically provided in these Conditions might not be copied,
                  distributed, displayed, reproduced or transmitted, in any form
                  or by any means whether electronic, mechanical, photocopying,
                  recording, or otherwise, without the prior written approval of
                  Hotel Woodrina. Information procured from a 3rd party could
                  also be the topic of copyright owned by that third party.
                </p>
                <li className="green_color termscondition-lists padding-t-20">Your Use</li>
                <p>
                  The Site is for your personal non-commercial use and therefore
                  the Information could also be downloaded or printed by you
                  solely for that purpose. This right to use the knowledge may
                  be a license only, not a transfer of title, and is subject to
                  the subsequent restrictions:
                </p>
                <ul className="privacy_ul">
                  <li>
                    The Information might not be used for any commercial purpose
                    or public display, performance, sale, or rental.
                  </li>
                  <li>
                    No copyright or other proprietary notices could also be
                    removed.
                  </li>
                  <li>
                    Information might not be transferred to a different person.
                  </li>
                  <li>
                    You will only use the knowledge for lawful purposes and
                    under these Conditions.
                  </li>
                </ul>
                <li className="green_color termscondition-lists padding-t-20">Specific Warnings</li>
                <p>
                  You must make sure that your access to and your use of the
                  website isn’t illegal or prohibited by laws which apply to
                  you. you want to take your precautions for accessing the
                  website. Without limitation, you’re liable for ensuring that
                  your computing system meets all relevant technical
                  specifications necessary to use the website and is compatible
                  with the website. You’re liable for taking sufficient
                  precautions and checks to satisfy your particular requirements
                  for accuracy of knowledge input and output. you want to make
                  sure that any information which you provide to Hotel Woodrina
                  is accurate and complete and doesn’t contain any virus,
                  malicious code, computer virus routine or process, or other
                  sorts of interference which can damage the system of Hotel
                  Woodrina.
                </p>
                <li className="green_color termscondition-lists padding-t-20">Security & Non Confidentiality</li>
                <p>
                  Electronic transmissions of knowledge including the web are
                  public media and any use of such media is public, not private.
                  Information associated with or arising from such use is either
                  public or the property of these collecting the knowledge and
                  not personal or private information. Hotel Woodrina doesn’t
                  warrant and can’t make sure the security or confidentiality of
                  any information which you transmit to Hotel Woodrina.
                  Accordingly, any information which you transmit to Hotel
                  Woodrina is transmitted at your own risk.
                </p>
                <li className="green_color termscondition-lists padding-t-20">General</li>
                <p>
                  If any of those Conditions are invalid, unenforceable, or
                  illegal for any reason, the remaining Conditions shall
                  nevertheless continue full force. you’re completely liable for
                  all charges, fees, duties, taxes, and assessments arising out
                  of the utilization of the website.
                </p>
              </ul>
            </div>

            <div className="col-md-12 privacy_column text-center padding-t-20">
              <p>
                <strong>
                  For any queries, suggestions, or complaints please email us at
                  <a href="mailto:info@hotelwoodrina.in">&nbsp;info@hotelwoodrina.in</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Termsandconditions;
