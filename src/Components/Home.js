import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../Assets/banner_img.jpeg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      
      <div className="home-container">
        <div className="home-text-section">
          <h1 className="heading">
            Giggles & Growth: Your Trusted Guide to Infant Care
          </h1>
          <p className="description">
            Discover expert guidance and joyful parenting on Giggles and Growth
            – your ultimate companion for nurturing happy, healthy infants.
          </p>
          <Link to="/login"><button className="secondary-button">
            Login <FiArrowRight />
          </button></Link>
        </div>

          <img src={BannerImage} className="home-image" alt="banner"></img>
    
      </div>

      
    </div>
  );
};

export default Home;
