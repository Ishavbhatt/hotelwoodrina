import React from "react";
import Head from "next/head";

function Privacypolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Bob's N Marley</title>
        <meta property="og:title" content="Privacy Policy | Bob's N Marley" />
        <meta
          property="og:description"
          content="Bob's N Marley respects your privacy and is committed to protecting the privacy, confidentiality, and security of the personal data | Bob's N Marley"
        />
      </Head>

      <section className="common_page_header top_banner privacy_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Privacy Policy</h1>
              <p className="about-subtitle">
                This Privacy policy clarifies our personal data practices and
                the decisions you can make about how your information is
                utilized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common_page_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 common_page_header_title">
              <p>
                Hotel Bob’s N Barley respects your privacy and is committed to
                protecting the privacy, confidentiality, and security of the
                personal data you provide to us or that we collect about you
                when you use our website bobsnbarley.com, or when you otherwise
                interact with us. We are aware of our responsibilities to
                protect your data, to keep it secure, and to comply with
                applicable privacy and data protection laws.
              </p>
              <p>
                For this Privacy Policy, “personal data” shall have the meaning
                as given to it by applicable privacy or data protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">
                Types of Personal Data We Collect
              </h3>
              <p>
                We collect the personal data you provide directly to us. This
                includes:
              </p>
              <ul className="privacy_ul">
                <li>Your Full Name and Contact Information.</li>
                <li>
                  Your Inquiries, Reviews, Feedback, and Opinions About Our
                  Hotel.
                </li>
                <li>Any other personal data you choose to provide to us.</li>
                <li>
                  Information that you provide for specialized services to you
                  or fulfill special requests, such as accommodating health or
                  dietary conditions, but we do not collect sensitive
                  information about you, such as health information, except as
                  reasonably needed for us to provide services to you.
                </li>
              </ul>
            </div>

            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">Policy Modification</h3>
              <p>
                We may update our privacy policy from time to time, without
                prior notice, and post it on the Site so that you are always
                informed of the way we collect and use your data. We encourage
                you to review this Privacy Policy whenever you access the
                Services and Site or otherwise interact with us to stay informed
                about our information practices and the ways you can help
                protect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacypolicy;
