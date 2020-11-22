import React from 'react'
import teacherOne from "../images/teachers01.jpg";
import teacherTwo from "../images/teachers02.jpg";
import teacherThree from "../images/teachers03.jpg";
import teacherFour from "../images/teachers04.jpg";
export default function Our() {
    return (
        <section className="teachers">
        <h1>Our Teachers</h1>
        <div className="list-teacher">       
         <div className="each-teacher">
        <img src={teacherOne} alt=""/>
        <h3 className="name">Stella Roffin</h3>
        <h6>Art teacher</h6>
        </div>
        <div className="each-teacher">
        <img src={teacherTwo} alt=""/>
        <h3 className="name">Stella Roffin</h3>
        <h6>Art teacher</h6>
        </div>
        <div className="each-teacher">
        <img src={teacherThree} alt=""/>
        <h3 className="name">Stella Roffin</h3>
        <h6>Art teacher</h6>
        </div>
        <div className="each-teacher">
        <img src={teacherFour} alt=""/>
        <h3 className="name">Stella Roffin</h3>
        <h6>Art teacher</h6>
        </div>
        </div>

        </section>
    )
}
