import React from 'react'
import teacher from "../images/teacher.png"
import support from "../images/support.png"
import scholarship from "../images/scholarship.png"
import book from "../images/book.png"
export default function Features() {
    return (
        <div className="features">
        <div className="feature-cards one">
        <img src={teacher} alt="" className="feature-icon"/>
        <h3>Expert teachers

        </h3>
       
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptate molestiae deserunt</p>
        </div>
        <div className="feature-cards two">
        <img src={book} alt="" className="feature-icon"/>
        <h3>Quality Education </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="feature-cards three">
        <img src={support} alt="" className="feature-icon"/>
        <h3>Life Time Support</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="feature-cards four">
        <img src={scholarship} alt="" className="feature-icon"/>
        <h3>Scholarship News</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
    )
}
