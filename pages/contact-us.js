import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Slide from "react-reveal/Slide";

import { error } from "jquery";
function Contactus() {
  const [checked, setChecked] = useState(false);
  const initialValues = { fullname: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit && !checked) {
      console.log("Thanks For Contacting Us");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.fullname) {
      errors.phone = "Phone No. is required!";
    }
    if (!checked) {
      errors.checked = "Checkbox is required!";
    }
    return errors;
  };

  return (
    <>
      <Head>
        <title>Contact For Shimla TraveL Enquiry | Hotel Woodrina</title>
        <meta
          property="og:title"
          content="Contact | Hotel Woodrina"
        />
        <meta
          property="og:description"
          content="For any information related to bookings, offers, travel enquiries or for requesting a catalogue, we are here to help you in every | Hotel Woodrina"
        />
      </Head>

      <section className="common_page_header top_banner contact-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Contact Us</h1>
              <p className="contact-subtitle">
                Hotel Hotel Woodrina is a perfect weekend getaway near
                Dharamshala where guests enjoy unparalleled facilities for
                relaxation and rejuvenation in the scenic Dhauladhar Hills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="common_padding">
        <div className="container">
          <div className="row">
            <Slide top>
              <div className="col-lg-4 col-md-4 col-sm-12 contact_left">
                <div className="footer_address_right_inner footer_link_black">
                  <div>
                    <h2 className="cont-head-col">ADDRESS</h2>
                    <p className="black">
                    Shimla Kufri Road, Dhalli,
                    Shimla, Himachal Pradesh 171012
                    </p>
                  </div>
                  <div>
                    <h2 className="cont-head-col">PHONE NUMBER</h2>
                    <p className="black">
                      <a href="tel:9805814000">+91 - 98160 28966</a>
                    </p>
                  </div>
                  <div>
                    <h2 className="cont-head-col">RESERVATION</h2>
                    <p className="black">
                      <a href="mailto:info@hotelwoodrina.in">
                      info@hotelwoodrina.in
                      </a>
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Hotel+Woodrina/@31.1118957,77.2169214,17z/data=!3m1!4b1!4m8!3m7!1s0x390582696d7b8dff:0x4f61d39aa35c9d6f!5m2!4m1!1i2!8m2!3d31.1118957!4d77.2191101"
                    className="common_btn"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </Slide>
            <div className="col-md-8 col-sm-12 contact_right">
              <Link
                className="pointer"
                href={
                  "https://www.google.com/maps/place/Hotel+Woodrina/@31.1118957,77.2169214,17z/data=!3m1!4b1!4m8!3m7!1s0x390582696d7b8dff:0x4f61d39aa35c9d6f!5m2!4m1!1i2!8m2!3d31.1118957!4d77.2191101"
                }
              >
                <a target="_blank">
                  <img src="/map-image.png" alt="image" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section contact_form_section common_padding pt-0">
        <div className="container">
          <div className="row">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="alert alert-success" role="alert">
                Thank You For Contacting us
              </div>
            ) : (
              console.log(formValues)
            )}
            <Slide bottom>
              <div className="col-md-8 offset-md-2 col-sm-12 contact_form">
                <form onSubmit={handleSubmit} className="row">
                  <h3 className="text-center w-100">Talk To Us</h3>
                  <p className="text-center w-100">
                    Send us your questions. We promise to answer soon. Thank
                    you!
                  </p>

                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Full Name"
                      value={formValues.fullname}
                      onChange={handleChange}
                    />
                    <p className="error-field">{formErrors.fullname}</p>
                  </div>
                  <div className="col-md-6 col-sm-12 form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p className="error-field">{formErrors.email}</p>
                  </div>
                  <div className="col-md-6 col-sm-12 form-group">
                    <input
                      name="phone"
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                    <p className="error-field">{formErrors.phone}</p>
                  </div>

                  <div className="col-md-12 col-sm-12 form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-md-12 col-sm-12 form-group form-check">
                    <input
                      name="checkbox"
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      value={checked}
                      onClick={handleClick}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I have read the
                      <a className="a-span" href="/Privacypolicy">
                      &nbsp;Hotel Woodrina&nbsp;
                      </a> 
                      policies and I accept the use and treatment of my personal
                      data.
                    </label>
                    <p className="error-field">{formErrors.checked}</p>
                  </div>
                  <button className="common_btn">SEND REQUEST</button>
                </form>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
