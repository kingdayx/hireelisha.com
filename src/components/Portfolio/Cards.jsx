import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalApp from "./Modal";

const easing = [0.6, -0.05, 0.01, 0.99];

const Boxes = styled(motion.div)`
  margin-top: 100px;
  padding: 40px 0px 0px 0px;
  width: 300px;
  height: 300px;
  margin-left: ${(props) => props.mL} !important;
`;

const ButtonSig = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  .text {
    color: "#64ff33";
  }
`;

const boxes = {
  init: { y: 60, opacity: 0 },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2,
      ease: easing,
    },
  }),
};

export default function Cards(props) {
  const [bar, setBar] = useState(false);
  const {
    custom,
    src,
    title,
    subtitle,
    link,
    modal,
    setModal,
    text,
    modalPic,
    modalPic1,
    modalPic2,
    description,
    img,
    imgH,
    imgW,
    right,
    left,
    alt,
    pos,
    top,
    mR,
    mL,
  } = props;

  const Image = styled.img`
    width: ${(props) => props.imgW} !important;
    height: ${(props) => props.imgH} !important;
    position: ${(props) => props.pos} !important;
    top: ${(props) => props.top} !important;
    left: ${(props) => props.left} !important;
    right: ${(props) => props.right} !important;
    margin-right: ${(props) => props.mR} !important;
  `;

  useEffect(() => {
    const handleBar = () => {
      const offset = window.scrollY;
      const set = document.onload;
      if (offset > 2099) {
        setBar(true);
      } else if (set > 1500) {
        setBar(true);
      }
    };

    window.addEventListener("scroll", handleBar);
    return () => window.removeEventListener("scroll", handleBar);
  });

  return (
    <Boxes
      variants={boxes}
      custom={custom}
      animate={bar ? "animate" : "init"}
      initial="init"
      className="theBoxes"
      mL={mL}
    >
      <div className="card">
        <Image
          imgH={imgH}
          imgW={imgW}
          pos={pos}
          right={right}
          left={left}
          top={top}
          className={img}
          src={src}
          alt={alt}
          mR={mR}
          mL={mL}
        />
        <div className="overlay">
          <div className="title">
            <h2 className="h2">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
          <ButtonSig className="btn button" onClick={() => setModal(true)}>
            <div className="text">Learn More</div>
          </ButtonSig>
          <ModalApp
            modal={modal}
            setModal={setModal}
            text={text}
            link={link}
            img1={modalPic}
            img2={modalPic1}
            img3={modalPic2}
            info={description}
            title={title}
          />
        </div>
      </div>
    </Boxes>
  );
}
