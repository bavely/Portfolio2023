import React, { useState } from "react";
import "../../Utils/Styles/contactme.css";
import { TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { sendEmail } from "../../Utils/Services";

const ContactMe = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
      borderRadius: "0px !important",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
      borderRadius: "0px !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
        borderRadius: "0px !important",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
        borderRadius: "0px !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
        borderRadius: "0px !important",
      },
    },
    backgroundColor: "#383838",
    borderRadius: "0px !important",
  });

  // =============================================================
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInput.name === "" ||
      userInput.email === "" ||
      userInput.message === ""
    ) {
      alert("Please fill all the fields!!");
      return;
    }
    sendEmail(userInput)
      .then(() => {
        alert("Thank you for reaching out. We will be in touch soon.");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserInput({
      name: "",
      email: "",
      message: "",
    });
  }
  
  return (
    <div className="row contactme" id="contactme">
      <div className="col-md-12">
        <div className="row">
          {/* <div className="contactme-header-container"> */}
          <p className="contactme-header">
            Contact <span>Me</span>
          </p>
          {/* </div> */}
          <div className="col-md-6 offset-md-3">
            <form className="my-form">
              <div className="formcontainer">
                <span id="msg"></span>
                <ul style={{ listStyle: "none" , paddingLeft: "0"}}>
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
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={userInput.email}
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
                      <button className="btn-grid" type="submit" id="submitbtn" onClick={handleSubmit}>
                        <span className="back">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                            alt=""
                          />
                        </span>
                        <span className="front">SUBMIT</span>
                      </button>
                      <button className="btn-grid" type="reset" id="resetbtn" onClick={handleReset}>
                        <span className="back">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                            alt=""
                          />
                        </span>
                        <span className="front">RESET</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
