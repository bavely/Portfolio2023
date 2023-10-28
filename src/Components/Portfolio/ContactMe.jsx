import React, { useState } from 'react'
import "../../Utils/Styles/contactme.css"
import { TextField, Button, Box } from "@mui/material";
import {  styled } from '@mui/material/styles';

 const ContactMe = () => {
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#A0AAB4',
          borderRadius: "0px !important",
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
          borderRadius: "0px !important",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
            borderRadius: "0px !important",
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
            borderRadius: "0px !important",
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            borderRadius: "0px !important",
          },
        },
        backgroundColor: "#383838",
        borderRadius:"0px !important",
      });
      
     


    // =============================================================
const [userInput, setUserInput] = useState({
  name: "",
  email: "",
  message: "",
})

const handleChange = (e) => {
  setUserInput({
    ...userInput,
    [e.target.name]: e.target.value,
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };
  return (
    <div className="row contactme" id='contactme'>
    <div className="col-md-12">
      <div className="row">
        {/* <div className="contactme-header-container"> */}
          <p className="contactme-header">
            Contact <span>Me</span>
          </p>
        {/* </div> */}
        <div className="col-md-12">
        <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 700,
          mx: "auto",
          p: 2,
          
          borderRadius: "0px",
        //   boxShadow: 1,
        }}
      >
        {/* <ThemeProvider theme={customTheme(outerTheme)}> */}
        <form onSubmit={handleSubmit}>
          <CssTextField
            fullWidth
            label="Name"
            value={userInput.name}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{
                style: { color: '#fffb' },
              }}
          />
          <CssTextField
            fullWidth
            label="Email"
            value={userInput.email}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
            InputLabelProps={{
                style: { color: '#fffb' },
              }}
          />
          <CssTextField
            fullWidth
            label="Message"
            value={userInput.message}
            onChange={handleChange}
            margin="normal"
            required
            multiline
            rows={4}
            InputLabelProps={{
                style: { color: '#fffb' },
              }}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
borderRadius: "0px !important",
              mt: 2,
              backgroundColor: "#383838",
              color: "#fffb !important",
              "&:hover": {
                backgroundColor: "#383838",
              },
              paddingTop:"15px",
              paddingBottom:"15px"

            }}
          >
            Submit
          </Button>
        </form>
        {/* </ThemeProvider> */}
      </Box>
    </Box>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactMe