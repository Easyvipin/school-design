import React, { useState } from 'react';
import validator from 'validator';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

 const Authactions = () => {

  const [authState, setAuthState]=useState(false);
  const [Phone, setPhone]=useState(" ");
  const [otp, setOtp]=useState(" ");
  const [error, setError]= useState("");

  const [form, setState] = useState({
    name: '',
    email:'',
    phoneNo:'',
  });

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);


  const formSubmit = (e) =>{
      e.preventDefault();
     if(e.target.name == "phone" ){
        let isValid = validator.isMobilePhone(Phone,['en-IN']);
        console.log(isValid);
        if(isValid == true){    
          if (authState == true){
            setError("")
            setOpenSecond(true) 
            setOpenFirst(false)

        }
        else {
            setError("")
            setOpenThird(true) 
            setOpenFirst(false)

        }
    }
    else {
       setError("Enter a valid Mobile no")
    }
        
     }
     if(e.target.name == "otp" ){
       let isValid= validator.isNumeric(otp)
       if(isValid == true) {
        setOpenSecond(false)
       }
       else {
           error("Otp is not valid")
       }   
     }
     if(e.target.name == "Register" ){

        let isNameValid = validator.isAlpha(form.name);
        let isPhoneValid = validator.isMobilePhone(form.phoneNo,['en-IN'])
        if(isNameValid == true && isPhoneValid ==true){
            setOpenThird(false)
        }
        else {
            setError("Name or Phone no is invalid!");
        }
        
     }
     

  }
    return (
        <div className="auth-div">
          <button className="auth menu-button" onClick={() => setOpenFirst(true)}>Login/Register</button>


        <Modal open={openFirst} onClose={() => setOpenFirst(false)} center classNames={{
            modal: 'phoneModal',
          }}>  
        <form onSubmit = {(e)=> formSubmit(e)} name="phone">
              <fieldset>
              <legend>
              Check Mobile No
              </legend>
               <label for="Phone no">
               Mobile no
               </label>
              <input type="number" name="regphoneNo" placeholder="+91 10 didgit no" required onChange={(e)=>{
                setPhone(`${e.target.value}`);
              }}>
              </input>
              <button className="button" >
              Get Otp
              </button>
              <span>{error}</span>
              </fieldset>
            </form>
      </Modal>
      <Modal open={openSecond} onClose={() => setOpenSecond(false)} center classNames={{
        modal: 'otpModal',
      }} >
      <form onSubmit = {(e)=> formSubmit(e)} name="otp">
      <fieldset>
      <legend>
      Recieved OTP
      </legend>
       <label for="Phone no">
       OTP
       </label>
      <input type="number" name="otpNo" placeholder="Paste Otp here" required onChange={(e)=>{
        setOtp(e.target.value);
      }}>
      </input>
      <button className="button" >
      Submit Otp
      </button>
      <span>{Error}</span>
      </fieldset>
    </form>
       
      </Modal>

      <Modal open={openThird} onClose={() => setOpenThird(false)} center classNames={{
        modal: 'registerModal',
      }} >
      <form onSubmit = {(e)=> formSubmit(e)} name="Register">
      <fieldset>
      <legend>
      Register
      </legend>
       <label for="Name">
       Name
       </label>
      <input type="text" name="userName" placeholder="Your Full Name" required onChange={(e)=>{
        setState({
            ...form,
            name: `${e.target.value}`,
        }) 
      }}>
      </input>
       <label for="email">
       email
       </label>
      <input type="email" name="email" placeholder="Your @example.com" required  onChange={(e)=>{
        setState({
            ...form,
            email: `${e.target.value}`,
        }) 
    }}>
      </input>
       <label for="Name">
       Phone no
       </label>
      <input type="no" name="phoneNo" placeholder={Phone} required onChange={(e)=>{
        setState({
            ...form,
            phoneNo: `${e.target.value}`,
        })
    }}>
      </input>
      <button className="button">
      Register
      </button>
      <span>{error}</span>
      </fieldset>
    </form>
       
      </Modal>
          </div>    
    )
}

export default Authactions;