import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <>
    <div id='contact' className="container contact">
      <h1 style={{textAlign:'center',color:"black"}}>CONTACT ME</h1>
      <div className="contact-icon"
      >
        <a href='https' target='_blank' className="items"> <FaInstagramSquare className='icons'/> </a>
        <a href='https://www.linkedin.com/in/rujutamedhi/' target='_blank' className="items"> <FaLinkedin className='icons'/> </a>
        <a href='https' target='_blank' className="items"><IoLogoGithub className='icons'/> </a>
        <a href='mailto:rujutamedhi@gmail.com' target='_blank' className="items"> <IoIosMail className='icons'/> </a>
        
      </div>
    </div>
    </>
  )
}

export default Contact
