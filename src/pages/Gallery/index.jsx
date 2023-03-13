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
  boxShadow: 24,
  p: 0.5,
  height: "65vh",
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
  }
  async function handleLoad(status, index, id) {
    // console.log("image loaded", index, status, id);
    setLoading(false);
  }
  return (
    <div className="container">
      <div className="gallery-body">
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
        </div>
      </div>
    </div>
  );
}
