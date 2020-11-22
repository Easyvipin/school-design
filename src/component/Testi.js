import React from 'react'
import commentOne from '../images/comment-img-1.jpg'
import commentTwo from '../images/comment-img-2.jpg'

export default function Testi() {
    return (
       <section className="testimonials">
       <h3>TESTIMONALS</h3>
       <h1>What Parent Say</h1>
       
     
       <div className="cards">
       <div className="each-card">

       <img  className="person" src={commentOne} alt=""/>
       <i class="fas fa-quote-left"></i>
       <div className="ratings">
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       </div>
       
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus animi adipisci inventore nesciunt, optio, cum eius totam ab, reprehenderit officia maiores qui repudiandae obcaecati dignissimos.
       </p>
       <div className="identity">
       <h5>DAVID MALAN</h5>
       <span>Aliquam sodales</span>
       </div>
       </div>
       <div className="each-card">

       <img className="person" src={commentTwo} alt=""/>
       <i class="fas fa-quote-left"></i>
       <div className="ratings">
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       <i className="fas fa-star"></i>
       </div>
       
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus animi adipisci inventore nesciunt, optio, cum eius totam ab, reprehenderit officia maiores qui repudiandae obcaecati dignissimos.
       </p>
       <div className="identity">
       <h5>DAVID MALAN</h5>
       <span>Aliquam sodales</span>
       </div>
       </div>
       
       </div>
       <i className="fas fa-dot-circle"></i>
       <i className="fas fa-dot-circle"></i>
       </section>
    )
}
