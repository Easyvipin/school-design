import React from 'react'
import logo from "../images/logo.png"; 
export default function Footer() {
    return (
        <footer>
        <div className="company-desc">
        <img src={logo} alt="" className="logo"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quod voluptas nam facilis deleniti porro tenetur sint ipsum reiciendis quam eaque sapiente obcaecati tempora quia hic animi sequi similique minima at voluptatibus, nisi ab nulla eius! Omnis ad deserunt quia libero nesciunt illum est pariatur modi quo! Voluptates nulla laboriosam quaerat ut, earum sapiente ipsa sunt est quos ex illum assumenda iure omnis, a fuga obcaecati soluta explicabo, libero hic?</p>
        </div>
        <ul className="links">
        <h6>Quick links</h6>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Home</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  About</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Classes</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Teachers</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Testimonials</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Blog</li>
        <li className="each-link"><i className="fas fa-caret-right" ></i>  Contact Us</li>
        </ul>
        <ul className="hours">
        <h6>Opening Hours</h6>
        <li className="each-hours">Monday <span>08:00-02:00</span></li>
        <li className="each-hours">Tuesday <span>08:00-02:00</span></li>
        <li className="each-hours">Wednesday <span>08:00-02:00</span></li>
        <li className="each-hours">Thursday <span>08:00-02:00</span></li>
        <li className="each-hours">Friday <span>08:00-02:00</span></li>
        <li className="each-hours">Saturday <span>08:00-02:00</span></li>
        <li className="each-hours">Sunday <span>closed</span></li>
        </ul>
        <div className="touch">
        <h6>Get in Touch</h6>
        <ul className="contact-us">
        <li className="each-contact"><i className="fas fa-map-marker-alt"></i> 123 Lorem, ipsum dolor</li>
        <li className="each-contact"><i className="fas fa-envelope"></i> school@example.com</li>
        <li className="each-contact"><i className="fas fa-phone-alt"></i> <h3>770 132 4657</h3></li>

        </ul>
        <ul className="socials">
        <li className="social-link"><i className="fab fa-facebook"></i></li>
        <li className="social-link"><i className="fab fa-twitter"></i></li>
        <li className="social-link"><i className="fab fa-instagram"></i></li>
        <li className="social-link"><i className="fab fa-youtube"></i></li>
        </ul>
        </div>
        </footer>
    )
}
