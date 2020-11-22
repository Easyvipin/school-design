import React from 'react'
import galleryOne from "../images/gallery-1.jpg";
import galleryTwo from "../images/gallery-2.jpg";
import galleryThree from "../images/gallery-3.jpg";
import galleryFour from "../images/gallery-4.jpg";
import galleryFive from "../images/gallery-5.jpg";
import gallerySix from "../images/gallery-6.jpg";
export default function Gallery() {
    return (
       <section className="gallery">
       <div className="left-container">
       <h1>Photo Gallery</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officia.</p>
       <button>VIEW ALL GALLERY</button>
       </div>
       <div className="Right-container">
       <img src={galleryOne} alt="" className="gallery-image"/>
       <img src={galleryTwo} alt="" className="gallery-image"/>
       <img src={galleryThree} alt="" className="gallery-image"/>
       <img src={galleryFour} alt="" className="gallery-image"/>
       <img src={gallerySix} alt="" className="gallery-image"/>
       <img src={galleryFive} alt="" className="gallery-image"/>
       </div>
       </section>
    )
}
