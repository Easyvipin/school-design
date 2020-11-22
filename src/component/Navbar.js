import React from 'react'
import logo from "../images/logo.png";
import Authactions from './Authactions';

export default class Navbar extends React.Component {
  state = {
    navToggle:true,
  }

  toggleNav = () =>{
    this.setState({
      navToggle:!this.state.navToggle
    },()=>{
      if(this.state.navToggle === false){
        document.getElementById("mobile-nav").style.display="flex"
        }
        else {
          document.getElementById("mobile-nav").style.display="none"
        }
    })
   
    

  }
  render(){
    return (
       <nav>
         <img src={logo} alt="" className="logo"/>
         <ul className="menu">
           <li className="menu-item"><a href="#">Home</a></li>
           <li className="menu-item"><a href="#">About</a></li>
           <li className="menu-item"><a href="#">Classes</a></li>
           <li className="menu-item"><a href="#">Teachers</a></li>
           <li className="menu-item"><a href="#">Pages</a></li>
           <li className="menu-item"><a href="#">Blog</a></li>
           <li className="menu-item"><a href="#">Contact us</a></li>
         </ul>
         <div className="side-menu">
          <button className="auth menu-search"><i className="fas fa-search"></i></button>
          <Authactions/>
          <i class='fas fa-bars' onClick={this.toggleNav} style={{fontSize:"36px"}}></i>         
          </div>
         
          <div className="response-nav" id="mobile-nav">
          <span onClick={this.toggleNav}>&#88;</span> 
          <ul className="respmenu-item">
          <li className="resp-menu"><a href="#">Home</a></li>
           <li className="resp-menu"><a href="#">About</a></li>
           <li className="resp-menu"><a href="#">Classes</a></li>
           <li className="resp-menu"><a href="#">Teachers</a></li>
           <li className="resp-menu"><a href="#">Pages</a></li>
           <li className="resp-menu"><a href="#">Blog</a></li>
           <li className="resp-menu"><a href="#">Contact us</a></li>
          </ul>
          <div className="resp-side">
          <button className="auth menu-search"><i className="fas fa-search"></i></button>
          <Authactions/>          
          </div>
          </div>
       </nav>
    )
  }
}
