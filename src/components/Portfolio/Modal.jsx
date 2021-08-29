import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const BottomModal = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const Hr = styled.hr`
  color: linear-gradient(to right, green, blue);
`;

const mod = {
  init: { scale: 0.5, transition: { type: "spring" } },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: 1,
  },
};
const Carousel1 = styled(Carousel)`
  padding-bottom: -200px !important;
`;

const ModalApp = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { modal, setModal, text, link, img1, img2, img3, info, title } = props;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  let isMobile = width <= 500;

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const customStyles = {
    content: {
      width: `${isMobile ? "90%" : "47%"}`,
      marginBottom: `${isMobile ? "-300px" : "0px"}`,
      top: "0",
      marginTop: "70mm",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "scroll",
      height: `${isMobile ? "-50vh" : "80vh"}`,
    },
    overlay: {
      zIndex: 1,
      backgroundColor: "rgba(50, 50, 50, 0.75)",
    },
  };
  console.log("styles of modal", customStyles);
  function closeModal() {
    setModal(false);
  }
  Modal.setAppElement("#root");
  return (
    <motion.div variants={mod} initial="init" animate="animate">
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <div className="my__carousel_main">
          <Carousel className="imgs">
            <Carousel.Item>
              <img
                style={{ width: "100%", height: 400 }}
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: "100%", height: 400 }}
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: "100%", height: 400 }}
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <h1 className="h1">{title}</h1>
        <div className="text1">{text} </div>
        <Hr />
        <div className="info">{info} </div>
        <BottomModal>
          <a
            href={link}
            target="_blank"
            className="view"
            rel="noopener noreferrer"
          >
            View
          </a>

          <div className="closeModal" onClick={closeModal}>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                fill="currentColor"
              />
            </motion.svg>
          </div>
        </BottomModal>
      </Modal>
    </motion.div>
  );
};

export default ModalApp;
