import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        About Us

        Welcome to Pizzeria Hut!

        At Pizzeria Hut!, we're passionate about bringing you the best pizza experience possible. Founded in 2024, our journey began with a simple dream: to create a place where people could enjoy delicious, handcrafted pizzas made with the finest ingredients.

        Our Story

        Our founder, Shabu, has always believed that great pizza starts with great ingredients. From the rich, savory tomato sauce made from vine-ripened tomatoes to the perfect blend of cheeses that melt in your mouth, every detail matters. We source our ingredients locally whenever possible and take pride in using organic and sustainable products.

        Our Pizzas

        Whether you're a fan of classic Margherita, crave the bold flavors of a Meat Lover's, or love the freshness of a Veggie Delight, we have something for everyone. Our menu features a wide variety of pizzas, each one crafted with care and precision. We also offer gluten-free and vegan options, ensuring that everyone can enjoy a slice of happiness.

        Our Commitment
        At Pizzeria Hut!, we are committed to more than just making great pizza. We strive to provide an exceptional dining experience for our customers. Our friendly staff, cozy atmosphere, and dedication to quality make us a favorite spot for families, friends, and pizza lovers alike.

        We believe in giving back to our community. Through various initiatives and partnerships, we support local schools, charities, and events, making Pollachi a better place for everyone.

        Join Us
        Come visit us at Pollachi and experience the warmth and flavor of Pizzeria Hut!. Whether you dine in, take out, or order delivery, we promise you a pizza that will delight your taste buds and make you come back for more.

        Thank you for choosing Pizzeria Hut!. We look forward to serving you!
        </p>
      </div>
    </div>
  );
}

export default About;
