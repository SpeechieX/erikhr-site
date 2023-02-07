import React, { useState, useRef } from "react";
import { Modal, Box } from "@mui/material";
import { Squares, Digital } from "react-activity";
import "react-activity/dist/library.css";

import { images } from "./images";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #00000030",
  boxShadow: 24,
  p: 4,
  width: "auto",
  height: "auto",
  overflow: "auto",
  display: "flex",
};

const outerModalStyle = {
  overflow: "auto",
  backgroundColor: "#00000070",
};

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const selectedImage = useRef();
  selectedImage.current = currentImage;

  const handleModal = () => setOpenModal(!openModal);

  async function handleImage(s) {
    setCurrentImage(s);
    handleModal();
    console.log(s);
    console.log(selectedImage);
  }
  async function handleLoad(status, index, id) {
    console.log("image loaded", index, status, id);
    setLoading(false);
  }
  return (
    <div className="container">
      <div className="gallery-body">
        {/* <ul className="flex flex-row">
          <li className="gallery-list-tab mx-4">AI Art</li>
          <li className="gallery-list-tab mx-4">Photography</li>
          <li className="gallery-list-tab mx-4">Web</li>
          <li className="gallery-list-tab mx-4">Mobile</li>
        </ul> */}
        <div className="gallery-container flex flex-row">
          <div className="gallery-thumbnail-library mt-4">
            {images.map((im, i) => (
              <div className="thumbnail-container">
                <img
                  src={im}
                  className="gallery-item"
                  onClick={() => handleImage(im)}
                  key={i}
                  onLoad={(e) => handleLoad(true, i, e.target.id)}
                  id={`${i}-img`}
                />
              </div>
            ))}
            <Modal
              open={openModal}
              onClose={handleModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className=""
              sx={outerModalStyle}
            >
              <Box sx={style}>
                <img
                  className="display-box-modal"
                  src={currentImage}
                  ref={selectedImage}
                />
              </Box>
            </Modal>
          </div>
          {/* <div className="gallery-section-list flex flex-col">
            <div className="mt-4"></div>
            {!loading ? (
              <img
                className="display-box"
                src={currentImage}
                ref={selectedImage}
              />
            ) : (
              <div className="display-box justify-center items-center">
                <div className="flex display-box justify-center items-center">
                  <Squares color="#CC0000" />
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
