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
          <Avatar  src={require("../../Utils/images/1TE01341.jpg")}  sx={{ width: 300, height: 300 }}/>
          </div>
          <div className=" col-md-6 introduction-text ">

                <p className="about-me-header">About Me</p>
                <p  className="about-me-text">
                    My name is Bavely a <span className ="job-title">full-stake web developer</span> with strong problems troubleshooting and solving skills. I am skilled in researching and adept at analyzing sites' needs as well as working within tight deadlines.
                </p>

          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Introduction;
