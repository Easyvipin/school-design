import React from 'react'

export default function Newsletter() {
    return (
       <section className="newsletter">
        <div className="desc-newsletter">
        <h1>Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <form action="">
        <input type="email" className="email" placeholder="Email Address"></input>
        <button type="submit">SIGN UP</button>
        </form>
       </section>
    )
}
