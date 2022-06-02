import React, { useState } from "react";
import Head from "next/head";

function Menu() {
  return (
    <>
      <Head>
        <title>Menu at Golden Fern Resort</title>
        <meta property="og:title" content="About Bob's N Barley" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>
      <section className="common_page_header top_banner menu_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Our Special Menu</h1>
              {/* <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="menu_section_columns common_padding">

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Beverages</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Lassi Sweet/Salted</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Fresh Lime Soda
                    </span>
                    <span className="menu_item_right">&#8377; 40</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Jal Jeera</span>
                    <span className="menu_item_right">&#8377; 30</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mineral Water</span>
                    <span className="menu_item_right">&#8377; 30</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Soft Drink</span>
                    <span className="menu_item_right">&#8377; 50</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Soda</span>
                    <span className="menu_item_right">&#8377; 30</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Breakfast</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Parantha 2Pcs.</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Seasonal Fresh Fruits
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Juices (Apple, Orange, Pineapple, Litchi)
                    </span>
                    <span className="menu_item_right">&#8377; 50</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Bournvita | Hot Chocolate</span>
                    <span className="menu_item_right">&#8377; 80</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">MIlk</span>
                    <span className="menu_item_right">&#8377; 60</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Green Tea</span>
                    <span className="menu_item_right">&#8377; 70</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Cold Coffee
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Cheese Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Poha</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Upma</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Puri Bhaji</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Stuffed Parantha (2 Pcs.)
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Corn Flakes | Porridge</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Butter Toast (4 Pcs.)</span>
                    <span className="menu_item_right">&#8377; 70</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Omelette
                    </span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Eggs to order</span>
                    <span className="menu_item_right">&#8377; 80</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Chicken Grilled Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Veg Grilled Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Sandwich</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Chicken Sandwich
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Chinese</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Honey Chilly Potato</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Honey Chilly Cauliflower</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken 65</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Chicken</span>
                    <span className="menu_item_right">&#8377; 275</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Paneer</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Manchurian</span>
                    <span className="menu_item_right">&#8377; 250</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Vegetable Manchurian
                    </span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Sezwan Noodles</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Haka Noodlesr</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Noodles</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Sezwan Fried Rice</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Fried Rice</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Fried Rice</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Coffee Menu</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cold Coffee</span>
                    <span className="menu_item_right">&#8377; 60</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Macchiato</span>
                    <span className="menu_item_right">&#8377; 75</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Caff'e Latte</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Americano</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cappuccino(Regular/Large)</span>
                    <span className="menu_item_right">&#8377; 100/120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Double Espresso</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Espresso
                    </span>
                    <span className="menu_item_right">&#8377; 70</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Ristretto
                    </span>
                    <span className="menu_item_right">&#8377; 75</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Desserts</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Shahi Tukda</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Gulab Jamun</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Fruit Salad With Ice Cream</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vermecille Kheer</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Rice Kheer</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Ice Cream</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Main Course (Indian)</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Lababdar</span>
                    <span className="menu_item_right">&#8377; 250</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Chicken Full</span>
                    <span className="menu_item_right">&#8377; 600</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chilly Chicken Half</span>
                    <span className="menu_item_right">&#8377; 400</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Plain Curd</span>
                    <span className="menu_item_right">&#8377; 60</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Pineapple Raita</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mix Veg Raita</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Boondi Raita</span>
                    <span className="menu_item_right">&#8377; 80</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Egg Bhurji</span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dal Makhani</span>
                    <span className="menu_item_right">&#8377; 180</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Tomato Pasta</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Cheese Pasta</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mutton Rogan Josh</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mutton Curry</span>
                    <span className="menu_item_right">&#8377; 450</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Biryani</span>
                    <span className="menu_item_right">&#8377; 270</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Egg Curry</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Kadai Chicken
                    </span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Butter chicken (Half)
                    </span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Lahouri</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Masala</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Hyderabadi</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Keema Masala</span>
                    <span className="menu_item_right">&#8377; 300</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mushroom Masala</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Aloo Gobhi</span>
                    <span className="menu_item_right">&#8377; 140</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Mix Vegetable</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dum Aloo (Kashmiri)</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable jaipuri</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Peas & Mushroom Curry</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Seasonal Bhindi Masala</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dal Yellow (Tadka)</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Dal Fry</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Veg. Kofta
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Malai Kofta
                    </span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Panner Pasanda</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Matar Panner</span>
                    <span className="menu_item_right">&#8377; 175</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Panner Makhani</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Lababdar</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Palak Paneer
                    </span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Paneer Bhurji
                    </span>
                    <span className="menu_item_right">&#8377; 250</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Do Payaza</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Kadai Paneer</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Shahi Paneer</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Pizza Fresca</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Pizza Assorti
                    </span>
                    <span className="menu_item_right">&#8377; 290</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Pizza Polo e Peperoni
                    </span>
                    <span className="menu_item_right">&#8377; 270</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Pizza Ortolana                    </span>
                    <span className="menu_item_right">&#8377; 230</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Pizza Fiamma
                    </span>
                    <span className="menu_item_right">&#8377; 230</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Pizza Margherita                    </span>
                    <span className="menu_item_right">&#8377; 210</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Rice/Breads</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Butter Chapati</span>
                    <span className="menu_item_right">&#8377; 25</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chapatti</span>
                    <span className="menu_item_right">&#8377; 20</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Latcha Paratha (Tawa)</span>
                    <span className="menu_item_right">&#8377; 30</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Biryani</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Peas Pulao</span>
                    <span className="menu_item_right">&#8377; 165</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Pulao</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Jeera Rice
                    </span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Plain Rice
                    </span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h5 className="menu_title">Salads</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Masala Papad 1pcs.</span>
                    <span className="menu_item_right">&#8377; 25</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Roasted Papad 2pcs
                    </span>
                    <span className="menu_item_right">&#8377; 20</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Kachumber Salad
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Russian Salad
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Green Salad
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div> 

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Snacks</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Peanut Masala
                    </span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Vegetable Hara Bhara Kabab
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Vegetable Spring Roll
                    </span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Fingeer Chips</span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Aloo Chaat</span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Tikka</span>
                    <span className="menu_item_right">&#8377; 200</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Paneer Pakoras</span>
                    <span className="menu_item_right">&#8377; 160</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Assorted Pakoras</span>
                    <span className="menu_item_right">&#8377; 125</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Maggi
                    </span>
                    <span className="menu_item_right">&#8377; 100</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_section common_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 menu_section_text">
                <h5 className="menu_title">Soups</h5>
                <ul className="menu-ul">
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Clear Soup</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Sweet Corn Soup</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Sweet Corn Soup</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Checkin Hot & Sour Soup</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Vegetable Hot & Sour Soup</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Chicken Munchow Soup</span>
                    <span className="menu_item_right">&#8377; 150</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Vegetable Munchow Soup
                    </span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">Tomato Soup/Cream of Tomato</span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                  <li className="menu_list_items">
                    <span className="menu_item_left">
                    Tomato Soup/Cream of Tomato
                    </span>
                    <span className="menu_item_right">&#8377; 120</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 menu_section_image">
                <div className="menu_image_1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
