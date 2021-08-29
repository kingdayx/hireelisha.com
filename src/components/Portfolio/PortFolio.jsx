import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Cards from "./Cards";

const Folio = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: max-content;
  gap: 0rem 2rem 0rem 2rem;
  margin: 0;
`;

const hrHead = {
  init: { x: -800, opacity: 0 },
  enter: { x: 0, opacity: 1 },
};

export default function PortFolio() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [hr, setHr] = useState(false);

  const handleHr = () => {
    const offset = window.scrollY;
    if (offset > 1699) {
      setHr(true);
    } else {
      setHr(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHr);
  });

  let x = ["head"];
  if (hr) {
    x.push("scrollIn");
  }

  return (
    <div className="port">
      <div className="div">
        <h1 className="head"> Portfolio </h1>
      </div>
      <motion.hr
        variants={hrHead}
        initial="init"
        animate={hr ? "enter" : "init"}
        className="hr2"
        transition={{ duration: 1 }}
      />
      {/* <div className="categories">
                                                        <div className="head">All</div>
                                                        <div className="head">React</div>
                                                        <div className="head">React Native</div>
                                                        <div className="head">Dapps</div>
                                                      </div> */}
      <Folio>
        <Cards
          src="images/air.png"
          img="img"
          imgW="100%"
          imgH="100%"
          pos=""
          top="0"
          left="0"
          right="0"
          mL=""
          mR=""
          custom={1}
          title="Airbnb"
          subtitle="A clone of Airbnb"
          description="A site written in Next.js and Tailwind"
          link="https://keen-carson-fe285b.netlify.app/"
          modalPic="images/air1.png"
          modalPic1="images/air2.png"
          modalPic2="images/air3.png"
          modal={modal}
          setModal={setModal}
          text="A clone of Airbnb"
        />
        <Cards
          src="images/bombay2.png"
          img="img"
          imgW="100%"
          imgH="100%"
          pos="fixed !important"
          top=""
          left={0}
          right={0}
          alt="preview"
          custom={2}
          title="Bombay Shirts"
          subtitle="A demo eccomerce site"
          description="Created a demo for a client to sell their products"
          link="http://www.bombayshirts.com.s3-website-us-east-1.amazonaws.com/"
          modalPic="images/bombay1.png"
          modalPic1="images/bombay2.png"
          modalPic2="images/bombay3.png"
          modal={modal1}
          setModal={setModal1}
          text="selling shirts"
        />
        <Cards
          src="images/favicon.png"
          img="img"
          imgW="100%"
          imgH="100%"
          pos="relative !important"
          top=""
          custom={3}
          title="Juicy Swap"
          subtitle="A dapp adapted from sushiswap"
          description="Creates liqiduity pools using uniswap"
          link="http://winter-dust-4849.on.fleek.co/"
          modalPic="images/juice.png"
          modalPic1="images/juice1.png"
          modalPic2="images/juice2.png"
          modal={modal2}
          setModal={setModal2}
          text="A dapp adapted from sushiswap"
        />
        <Cards
          src="images/OTRPIZZATOKEN.png"
          custom={4}
          img="img"
          imgW="100%"
          imgH="100%"
          pos="fixed !important"
          right="10px !important"
          left="-7px"
          top="10px"
          title="OTR Bake Sale"
          subtitle="A crowd funding dapp using an NFT"
          description="A decentralized application that allows you to name your pizza, adding toppings, purchase an NFT, and send it to friends and family."
          link="http://www.otrcoin.io"
          modalPic="images/otr.png"
          modalPic1="images/cryptoPizza.png"
          modalPic2="images/NFT.png"
          modal={modal3}
          setModal={setModal3}
          text="Decentralized Application"
        />
        <Cards
          src="images/monsters1.png"
          custom={4}
          img="img"
          imgW="100%"
          imgH="100%"
          pos="fixed !important"
          right="0"
          left="0"
          top="0"
          title="Monsters Rolodex"
          subtitle="A basic site I made with react"
          description="A Rolodex I made with React that allows you to search through the list of monsters"
          link="https://awesome-euclid-28f496.netlify.app/"
          modalPic="images/monsters1.png"
          modalPic1="images/monsters2.png"
          modalPic2="images/monsters3.png"
          modal={modal4}
          setModal={setModal4}
          text="Decentralized Application"
        />
        <Cards
          src="images/monsters1.png"
          custom={5}
          img="img"
          imgW="100%"
          imgH="100%"
          pos="fixed !important"
          right="0"
          left="0"
          top="0"
          title="Monsters Rolodex"
          subtitle="A basic site I made with react"
          description="A Rolodex I made with React that allows you to search through the list of monsters"
          link="https://awesome-euclid-28f496.netlify.app/"
          modalPic="images/monsters1.png"
          modalPic1="images/monsters2.png"
          modalPic2="images/monsters3.png"
          modal={modal5}
          setModal={setModal5}
          text="Decentralized Application"
        />
      </Folio>
    </div>
  );
}
