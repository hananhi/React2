import React from 'react'
import './footer.css'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='footer'>
        <p>Hanan Himoni</p> <span> <CiLinkedin  style={{fontSize: '50px'}}/> 
        <FaFacebook style= {{fontSize: '50px'}} /></span>
    </div>
  )
}
