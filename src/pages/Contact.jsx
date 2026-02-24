import js from "@eslint/js";
import React, { useState } from "react";
import Swal from "sweetalert2";
// import React from 'react';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Awe() {

const[message,setMeseege]=useState(false)
// const handle=()=>{
// setMeseege(true)
// }


  const onSubmit = async (event) => {
    setMeseege(true)
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "baf9f68e-f7e5-40f4-b1db-df543a0eb9f8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try{
    const res = await fetch("https://api.web3forms.com/submit", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMeseege(false)
      Swal.fire({

  title: "success",
  text: "message successful",
  icon: "success",

});
    }
    else{
      setMeseege(false)

Swal.fire({
  title: "Error",
  text: "Messge faild to sent",
  icon: "error",

});
    }

setMeseege(false)

    }
    
    catch(error){
       setMeseege(false)
      alert("Check your internet connection")
      setMeseege(false)
    }
    

  };

  return (
    <div id="Contact" className="bg-black px-4 md:px-20 pt-10 lg:pt-20">
        <h1 className="text-white font-bold text-center text-2xl md:text-4xl lg:text-5xl pb-1">Contact with us</h1>
        <div className="py-1 flex  flex-col    ">
        <div className="w-full">
            <div className=" text-white py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-gray-400 mb-4">Feel free to reach out through any of the following platforms:</p>

        <div className="flex flex-wrap justify-center gap-6 text-3xl">
          <a href="https://wa.me/+93764247879" target="_blank" rel="noopener noreferrer" className="text-green-500 transition duration-500 hover:scale-120 ">
            <FaWhatsapp />
          </a>
          <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer" className="text-blue-500 transition duration-500 hover:scale-120">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourUsername" target="_blank" rel="noopener noreferrer" className="text-cyan-400 transition duration-500 hover:scale-120">
            <FaTwitter />
          </a><a href="mailto:najib.ahmadi.2026.12@Gmail.com" className="text-yellow-400 transition duration-500 hover:scale-120">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
        </div>
      <form className=" w-full md:w-[50%] lg:[100%] flex items-center m-auto justify-center flex-col gap-3  text-white border-white rounded-lg  p-5 " onSubmit={onSubmit}>
    
        <input required  className=" w-full rounded-sm border-2  p-2.5" placeholder="User name" type="text" name="name"/>
        <input required placeholder="email" className=" w-full rounded-sm p-2.5 border-2" type="email" name="email"/>
        <textarea required className=" p-1 w-full rounded-sm  border-2  resize-none h-32" placeholder="Write here..." name="message">
            
        </textarea>
       
        <button  disabled={message}  className=" disabled:none w-full py-2 font-bold text-white bg-violet-400 hover:bg-violet-300 cursor-pointer duration-700 rounded-sm flex gap-2 items-center justify-center outline-none" type="submit">{message ? "Loading..." : "sent messege"} {message && (
          <div className="w-4 h-4 rounded-full border-white border-t-transparent  border-2 animate-spin">

          </div>
        )
          
          
          } </button>
<div>
  
</div>
      </form>
      </div>
      </div>
  );
}

export default Awe;
