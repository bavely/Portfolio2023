import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../Utils/Styles/Skills.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { CountUp } from "use-count-up";



const Skills = () => {
  const skillsObject = {
    HTML5: 95,
    CSS3: 90,
    Bootstrap: 90,
    PHP: 80,
    JavaScript: 90,
    "TypeScript": 90,
    "C#/.NET": 80,
    Python: 80,
    JQuery: 90,
    ReactJs: 90,
    NextJs:70,
    "React Native": 70,
    Redux: 90,
    Angular: 90,
    Nodejs: 90,
    ExpressJs: 90,
    MongoDb: 70,
    Mongoose: 70,
    MySQL: 90,
    "MsSQL Server": 90,
    knexjs: 80,
    Azure: 80,
    "Google Cloud": 80,
    Git: 90,
    Agile: 90,
    Jira: 90,
    "Google APIs": 90,
  };
  
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 14,
    borderRadius: 5,
    borderColor: theme.palette.mode === "dark" ? "black" : "black",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "dark" ? 200 : 800],
        
        
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "dark" ? "#DED1C1" : "#DED1C1",
      
    },
  }));

  const onComplete = () => {
    console.log("completed");
    // do your stuff here
    // return { shouldRepeat: true, delay: 2 }
  }
  

  const onScrollCapture = () => {
    console.log("scrolled");
  }
  
  return (
    <div className="row skills" id="skills" >
      <div className="col-md-8 offset-md-2 ">
        <div className="row ">
          <div className="col-md-6 offset-md-3">
            <p className="skills-header">Skills</p>
          </div>
        </div>
        <div className="row mb-5 pb-5">
          {Object.entries(skillsObject).map(([skill, val]) => {
            return (
              <div className="col-md-4 mb-3">
                <CountUp isCounting start={0} end={val} duration={3.2} onComplete={onComplete}>
                  {({ value, reset }) => {
                    return (
                      <>
                        <p className="skill-name">
                          {skill} ... {value}%
                        </p>
                        <BorderLinearProgress
                          variant="determinate"
                          value={Number(value)}
                        />
                      </>
                    );
                  }}
                </CountUp>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Skills;
