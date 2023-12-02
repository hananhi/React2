import React, { useRef, useState } from 'react'
import './data.css'

export default function Data(props) {

    const[content,setcontent]=useState('information about java');

    const Fnameref=useRef(null);
    const Lnameref=useRef(null);


    function changecontent1(){
        setcontent(' react about all ');
    }

    function changecontent2(){
        setcontent('information about java')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('fname',Fnameref.current.value);
        localStorage.setItem('lname',Lnameref.current.value);
    

        const forminfo=document.getElementById('forminfo');
        forminfo.style.color='white';
        forminfo.textContent=localStorage.getItem('fname') + localStorage.getItem('lname');
      };
    
  return (
    <div>

<img src={props.src} alt={props.title} style={props.style}  className='dataimg'/>

<form onSubmit={handleSubmit}  className='form'>
  <label htmlFor="fname">First name:</label><br/>

  <input
        type="text"
        id="fname"
        name="fname"
        ref={Fnameref}
      /><br />

      <label htmlFor="lname">Last name:</label><br />
      <input
        type="text"
        id="lname"
        name="lname"
       ref={Lnameref}
      /><br /><br />

      <input type="submit" value="Submit" />
</form> 

<div id='forminfo'></div>

<div className='content'>
    {content}
</div>

<div className='btns'>
        <button onClick={changecontent1} className='btn'>Read React</button>
        <button onClick={changecontent2}className='btn'>Read javascript</button>

        
        </div>
    </div>
  )
}
