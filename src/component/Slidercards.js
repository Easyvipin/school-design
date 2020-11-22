import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Kid from "../images/kid_game.jpg";
import Lab from "../images/lab.jpg";
import Large from "../images/large_img.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",padding:"10px 10px",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,padding:"10px 10px",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}
export default class Slidercards extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1304,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    };
    return (
      <div className="sliderCards">
        <h2>Our Popular Classes</h2>
        <Slider {...settings}>
        <div className="each-card">
        <div className="class-image">
        <img src={Kid} alt=""/>
        <span>08:00 am - 10:00 am</span>
        </div>
        <div className="class-desc">
        <h3>Education Programs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className="each-card">
            <div className="class-image">
            <img src={Kid} alt=""/>
            <span>08:00 am - 10:00 am</span>
            </div>
            <div className="class-desc">
            <h3>Education Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="card-footer">
            <h4>Student: 30</h4>
            <h4>Fee:$150</h4>
            </div>
            </div>
         </div>
         <div className="each-card">
            <div className="class-image">
            <img src={Kid} alt=""/>
            <span>08:00 am - 10:00 am</span>
            </div>
            <div className="class-desc">
            <h3>Education Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="card-footer">
            <h4>Student: 30</h4>
            <h4>Fee:$150</h4>
            </div>
            </div>
            </div>
            <div className="each-card">
            <div className="class-image">
            <img src={Kid} alt=""/>
            <span>08:00 am - 10:00 am</span>
            </div>
            <div className="class-desc">
            <h3>Education Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="card-footer">
            <h4>Student: 30</h4>
            <h4>Fee:$150</h4>
            </div>
            </div>
            </div>

        </Slider>
      </div>
    );
  }
}
