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
            <h3>Welcome to the website of Bob’s N Barley, Mcleodganj.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 privacy_column">
              <p>
                If you continue to browse and use this website, you are agreeing
                to comply with and be bound by the following terms and
                conditions of use, which together with our privacy policy govern
                Bob’s N Barley’s relationship with you about this website.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                If you disagree with any part of these terms and conditions,
                please do not use our website. Neither we nor any third parties
                provide any warranty or guarantee as to the accuracy,
                timeliness, performance, completeness, or suitability of the
                information and materials found or offered on this website for
                any particular purpose.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">Your Use</h3>
              <p>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance, and graphics.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                Reproduction is prohibited other than in accordance with the
                copyright notice. All trademarks reproduced in this website
                which is not the property of, or licensed to, the operator is
                acknowledged on the website.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information. They do not signify that we endorse
                the website(s).
              </p>
            </div>

            <div className="col-md-12 privacy_column text-center padding-t-20">
              <p>
                <strong>
                  For any queries, suggestions, or complaints please email us at{" "}
                  <a href="mailto:info@bobsnbarley.com">info@bobsnbarley.com</a>
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
