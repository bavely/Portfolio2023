import React, { useState } from "react";
import "../../Utils/Styles/works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { WorksObject } from "../../Utils/Works";
import Stack from "@mui/material/Stack";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Works = () => {
  const [details, setDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projectDetails = (data, e) => {
    e.preventDefault()
    setDetails(data);
    handleClickOpen();
  }
  return (
    <div className="row works" id="works">
      <div className="col-md-12">
        <div className="row">
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
          <div className="col-md-6 offset-md-3">
            <p className="works-header">
              Recent <span>Projects</span>
            </p>
          </div>
          <div className="col-md-6 offset-md-3">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {WorksObject.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slidecontainer">
                    <img src={item.img} alt="Avatar" className="slideimage" />

                    <div className="slidemiddle">
                      <p className="slidetitle"> {item.name}</p>
                      <div className="slidetext">
                        <Stack
                          direction="row"
                          spacing={3}
                          sx={{ justifyContent: "center" }}
                          className="slideiconsstack"
                        >
                          <a
                            href={item.gitHub}
                            target="_blank"
                            rel="noreferrer"
                            className="slidelink"
                          >
                            <GitHubIcon sx={{ fontSize: 30 }} />
                          </a>
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noreferrer"
                            className="slidelink"
                          >
                            <LanguageIcon sx={{ fontSize: 30 }} />
                          </a>
                          <a
                            href={"#"}
                            target="_blank"
                            rel="noreferrer"
                            className="slidelink"
                            onClick={(e) => projectDetails(item, e)}
                          >
                            <InfoIcon sx={{ fontSize: 30 }} />
                          </a>
                        </Stack>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
