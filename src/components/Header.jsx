import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import "../App.css";

const ButtonSig = styled(motion.div)`
  border: 1px solid black;
  .btn:hover {
    background-color: "#64ff33";
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    const scrollToAbout = () => {
      window.scrollTo({
        top: 834,
        behavior: "smooth",
      });
    };
    return (
      <div className="header">
        <header className="App-header">
          <div className="name">
            <Particles
              id="tsparticles"
              init={this.particlesInit}
              loaded={this.particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#02101d",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  number: {
                    value: 160,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                    polygon: {
                      nb_sides: 5,
                    },
                    image: {
                      src: "images/sparkles.png",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 4,
                      size_min: 0.3,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    enable: true,
                    speed: 0.1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mod: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 600,
                    },
                  },
                },
                retina_detect: true,
              }}
            />
            <h1>
              Hello, I'm
              <i className="name1"> Elisha Day</i>.
            </h1>
          </div>
          <h1 className="block">
            I am a Blockchain <p className="block1">Developer.</p>{" "}
          </h1>
          <ButtonSig className="btn" onClick={scrollToAbout}>
            View my work
            <FontAwesomeIcon className="rotate" icon={faArrowRight} />
          </ButtonSig>
        </header>
      </div>
    );
  }
}

export default Header;
