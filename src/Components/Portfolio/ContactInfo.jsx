import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";
import MailIcon from '@mui/icons-material/Mail';
import "../../Utils/Styles/ContactInfo.css";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {sendSMS} from "../../Utils/Services"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@mui/base';
const ContactInfo = () => {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendSMS = () => {

    if (
      userInput.name === "" ||
      userInput.phone === "" ||
      userInput.message === "" 
    ){
      alert("Please fill all the fields!!")
      return
    }
    let { name, phone, messageText } = userInput
    let message = ` New Message from Portfolio. Name: ${name}, Phone: ${phone}, Message: ${messageText}`
    sendSMS({message})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }
  return (
    <><Dialog open={open} onClose={handleClose} > 
    <DialogTitle >Send Me SMS</DialogTitle>
    <DialogContent sx={{paddingRight:"20px !important"}}>
    <form className="my-form">
          <div className="formcontainer">
            <span id="msg"></span>
            <ul style={{ listStyle: "none" }}>
              <li></li>
              <li>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={userInput.name}
                  required
                />
                <span id="nameerr"></span>
              </li>
              <li>
                <input
                  onChange={handleChange}
                  type="phone"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  value={userInput.phone}
                  required
                />
                <span id="emailerr"></span>
              </li>
              <li>
                <textarea
                  onChange={handleChange}
                  type="text"
                  placeholder="Message"
                  id="message"
                  name="message"
                  value={userInput.message}
                  required
                ></textarea>
                <span id="messageerr"></span>
              </li>
              <li>
                <div className="grid grid-4">
                  <div className="required-msg">REQUIRED FIELDS</div>
                  <button className="btn-grid" type="submit" id="submitbtn" onClick={() => handleSendSMS()}>
                    <span className="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                        alt=""
                      />
                    </span>
                    <span className="front">SUBMIT</span>
                  </button>
                  <button className="btn-grid" type="reset" id="resetbtn" onClick={() => handleClose()}>
                    <span className="back">
                      <img
                        src="https://www.heartshare.org/wp-content/plugins/give/assets/dist/images/close-icon.svg"
                        alt=""
                      />
                    </span>
                    <span className="front">Close</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
    </DialogContent>
    <DialogActions>

    </DialogActions>
  </Dialog>
    <div className="row info" id="info">
      <div className="col-md-8 offset-md-2">
        <List>
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete" onClick={() => handleClickOpen()}>
                <PhoneIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`+1-626-626-5854`} />
          </ListItem>
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete">
                <MailIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`bavlesamy@gmail.com`} />
          </ListItem>
          {/* Linkedin Profile */}
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete">
                <LinkedInIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`Linkedin Profile`} />
          </ListItem>
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete">
                <GitHubIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`Professional Github`} />
          </ListItem>
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete">
                <GitHubIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`Personal / Practicing Github`} />
          </ListItem>
          {/* My Resume */}
          <ListItem
            sx={{
              my: 1,
              width: "100%",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0px",
            }}
            secondaryAction={
              <IconButton edge="start" aria-label="delete">
                <InsertDriveFileIcon
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    backgroundColor: "#C1B283",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </IconButton>
            }
          >
            <ListItemText primary={`My Resume`} />
          </ListItem>
        </List>
        <h3 style={{paddingTop: "20px", opacity: 0.5}}>
                    “Shoot for the moon. Even if you miss, you’ll land among the stars.”
                </h3>
                <p style={{opacity: 0.4, float: "right", marginRight: "20px"}}>–Oscar Wilde</p>
      </div>
    </div>
    </>
  );
};

export default ContactInfo;
