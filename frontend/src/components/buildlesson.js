import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
import "./style.css"
function Build1() {

  const [aaaa, setLink] = useState(false)

  function DisplayLink() {
    return (
      <h1>weevve</h1>
    )
  }
  return (




    <section className="courses">
      <h1 className="heading">   Build Custom lesson</h1>
      <div className="box-container">
        <div className="thumb bg d-flex justify-content-center align-items-space-between txt">

          <div className="d-flex fs-1 align-items-center justify-content-center flex-column txt">
            <div className='fw-bolder txt' >WELCOME..</div>
            <br/>
            <div className='fw-bolder txt'>LET'S</div>
            <div className='fw-bolder txt'>EXPLORE !!!</div>

          </div>
         
         
        </div>

        <div className="box">

          <div className="thumb">
            <img src={require("./images/Screenshot 2024-01-25 214225.png")} alt="" />

          </div>
          <h3 className="title">Upload Pdf</h3>
          <a href="/extract-text" className="inline-btn">
            Build Lesson
          </a>
        </div>


        <div className="box">

          <div className="thumb">
            <img src={require("./images/youtubelogo.png")} alt="" />

          </div>
          <h3 className="title">Paste Youtube Link</h3>
          <a href="/transcribe" className="inline-btn">
            Build Lesson
          </a>
        </div>
        <div className="box">


          <div className="thumb">
            <img src={require("./images/customlogo.png")} alt="" />

          </div>
          <h3 className="title">Create by topic </h3>
          <a href="/planner" className="inline-btn">
            Build Lesson
          </a>
        </div>
        <div className="box">

          <div className="thumb">
            <img src={require("./images/code.jpg")} alt="" />

          </div>
          <h3 className="title">Code</h3>
          <a href="/compiler" className="inline-btn">
            Let's Code
          </a>
        </div>
        {/* <div className="box">

          <div className="thumb">
            <img src={require("./images/roadmap.jpg")} alt="" />

          </div>
          <h3 className="title">Upload Pdf</h3>
          <a href="/planner" className="inline-btn">
            Build Lesson
          </a>
        </div> */}
        <div className="box">

          <div className="thumb">
            <img src={require("./images/chatbot.jpg")} alt="" />

          </div>
          <h3 className="title">ChatBox</h3>
          <a href="/chatbox" className="inline-btn">
            Let's explore
          </a>
        </div>


      </div>



    </section>
  )
}
export default Build1;