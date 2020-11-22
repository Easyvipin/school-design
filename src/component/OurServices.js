import React from 'react'
import book from "../images/book.png"
import support from "../images/support.png"
import teacher from "../images/teacher.png"
export default function OurServices() {
    return (
    <section className="our-services">
    <div className="right-container">
    </div>
    <div className="left-container">
    <h1>Online Learning Platform</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repudiandae esse, aliquam distinctio perspiciatis nemo laudantium! Mollitia provident quasi blanditiis!</p>
    <div className="each-service">
    <img src={book} alt="" className="service-image"/>
    <div>
    <h3>Special Education</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, qui nostrum veniam magnam expedita impedit?</p>
    </div>
    </div>
    <div className="each-service">
    <img src={teacher} alt="" className="service-image"/>
    <div>
    <h3>Honors Classes</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, qui nostrum veniam magnam expedita impedit?</p>
    </div>
    </div>
    <div className="each-service">
    <img src={support} alt="" className="service-image"/>
    <div>
    <h3>Traditional academies</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, qui nostrum veniam magnam expedita impedit?</p>
    </div>
    </div>
    </div>
    </section>
   
    )
}
