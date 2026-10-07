import React, { useState, useEffect } from "react";
import "../../Utils/Styles/introduction.css";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Introduction = () => {
  return (

    <div className="row introduction" id="introduction">
      <div className="col-md-8 offset-md-2 ">
        <div className="row " >
          <div className="col-md-6  avatar">
          <Avatar  src={require("../../Utils/images/1TE01341.jpg")}  sx={{ width: 250, height: 250 }} imgProps={{ loading: 'lazy' }}/>
          </div>
          <div className=" col-md-6 introduction-text ">

                <p className="about-me-header">About Me</p>
                <p  className="about-me-text">
                Welcome to my web development portfolio! I'm Bavely Tawfik, a<span className ="job-title"> full-stack web developer</span> with a wealth of experience in building innovative, efficient, and scalable applications. My expertise includes technologies such as JavaScript, React, Node.js, and cloud platforms like Google Cloud and Microsoft Azure. Over the course of my career, I’ve delivered robust <span className ="job-title">  front-end </span>and <span className ="job-title">back-end </span>solutions, tackled complex technical challenges, and collaborated effectively with diverse teams. Explore my projects to see how I can contribute to your next web development endeavor.
                </p>

          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Introduction;
