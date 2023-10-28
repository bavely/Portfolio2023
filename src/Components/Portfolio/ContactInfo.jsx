import React from "react";
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
const ContactInfo = () => {
  return (
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
              <IconButton edge="start" aria-label="delete">
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
  );
};

export default ContactInfo;
