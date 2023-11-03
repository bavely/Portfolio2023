import React, { useState, useCallback } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Modal from "@mui/material/Modal";
import ImageViewer from "react-simple-image-viewer";
const Works = () => {
  const [details, setDetails] = useState({});
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [imgs, setImgs] = useState([]);
  const [imgOpen, setImgOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImgClose = () => {
    setImgOpen(false);
    setCurrentImage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgs([]);
  };

  const projectDetails = (data, e) => {
    e.preventDefault();
    setDetails(data);
    setImgs(data.about.Images);
    handleClickOpen();
  };
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setImgOpen(true);
  }, []);
  return (
    <div className="row works" id="works">
      <div className="col-md-12">
        <div className="row">
          {Object.keys(details).length > 0 && (
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              sx={{ alignItems: "center" }}
            >
              <DialogTitle id="responsive-dialog-title">
                {details.name}
              </DialogTitle>
              <DialogContent>
                <Box sx={{ width: "100%" }}>
                  <Stack spacing={3}>
                    <DialogContentText>{details.about.Text}</DialogContentText>

                    <Divider
                      sx={{ mt: 2, mb: 2, mx: 2, border: "1px solid grey" }}
                    />
                    <ImageList
                      sx={{ width: 500, height: 450 }}
                      cols={2}
                      rowHeight={164}
                    >
                      {details.about.Images.map((item, index) => (
                        <ImageListItem key={index}>
                          <img
                            onClick={() => {
                              openImageViewer(index);
                            }}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={item}
                            alt={item.split("/")[item.split("/").length - 1]}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>

                    <Divider
                      sx={{ mt: 2, mb: 2, mx: 2, border: "1px solid grey" }}
                    />
                    <h5 className="technologies">Technologies Used</h5>
                    <ul className="list-group list-group-horizontal techlist">
                      <div className="row">
                        {details.about.Tech.map((item, index) => (
                          <div className="col-md-6">
                            <li key={index} className="list-group-item">
                              {item}
                            </li>
                          </div>
                        ))}
                      </div>
                    </ul>
                  </Stack>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}

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
      <Modal
        open={imgOpen}
        onClose={handleImgClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <Box sx={{ width: "100%" }}>
          <ImageViewer
            src={imgs}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={handleImgClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Works;
