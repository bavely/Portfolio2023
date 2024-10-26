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
                    Welcome to my web development portfolio! I'm Bavely Tawfik, a<span className ="job-title"> full-stack web </span> with extensive experience in building innovative, efficient, and scalable applications. My expertise spans a wide range of technologies, including JavaScript, React, Node.js, and cloud platforms like Google Cloud and MS Azure. I have a proven track record of delivering robust solutions in both <span className ="job-title">front-end</span> and<span className ="job-title"> back-end</span> development, solving complex problems, and collaborating effectively with teams. Explore my projects and see how I can bring value to your next web development challenge.
                </p>

          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Introduction;
