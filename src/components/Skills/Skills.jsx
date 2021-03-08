import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'

const barsVariant = {
  initial: { x: 1500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

const debuddle = {
  initial: { x: -1500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

const aniHead = {
  init: { opacity: 0 },
  enter: { opacity: 1 },
  transition: { duration: 2 },
}

export default function Skills() {
  const [about, setAbout] = useState(false)
  const [pic, setPic] = useState(false)
  const [skill, setSkill] = useState(false)

  const handleAbout = () => {
    const offset = window.scrollY
    if (offset > 1499) {
      setAbout(true)
    }
  }

  const handleLeftAbout = () => {
    const offset = window.scrollY
    if (offset > 1333) {
      setPic(true)
    }
  }
  const handleRightAbout = () => {
    const offset = window.scrollY
    if (offset > 1333) {
      setSkill(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleLeftAbout)
    window.addEventListener('scroll', handleRightAbout)
    window.addEventListener('scroll', handleAbout)
  })

  let x = ['head']
  if (about) {
    x.push('scrollIn')
  }

  let xxxx = ['leftAbout']
  if (pic) {
    xxxx.push('scrollInHex')
  }
  const props = useSpring({
    to: [{ translateX: 0, opacity: 0 }, { opacity: 1 }],
    delay: 1500,
    from: { opacity: 0, translateX: -700 },
  })

  return (
    <div className="About2">
      <div className="skillHeader">
        <motion.div
          variants={aniHead}
          initial="init"
          animate={about ? 'enter' : 'init'}
          className="skillHead"
          transition={{ duration: 1 }}
        >
          <h1> Skills </h1>
        </motion.div>
        <animated.hr style={props} className="hr3" />
      </div>
      <div className="skills">
        <motion.div
          variants={debuddle}
          initial="initial"
          animate={pic ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          className="leftAbout"
        >
          <img
            src="/images/pfpCrop.jpg"
            width="288.77"
            height="250"
            alt="the blockchain developer"
            className="myIMG"
          />
          <div className="who">Who's This Guy?</div>
          <p className="graph">
            I was born and raised in Nashville, TN and moved to Atlantic City,
            NJ 5 years ago. I started learning programming 7 years ago when I
            was 17. My first language was C++. When I wrote my first application
            with C++ I was so baffled! I was challenged to learn blockchain
            development in only 2 months 3 years ago by a friend of my mom. Ever
            since, I've been determined and excited to pave the future with
            blockchain technologies.
          </p>
        </motion.div>
        <motion.div
          className="bars"
          variants={barsVariant}
          initial="initial"
          animate={skill ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
        >
          <div className="container1">
            <div className="bar">
              <div className="barName">HTML</div>
              <ProgressBar completed={100} custom={1} />
            </div>
            <div className="bar">
              <div className="barName2">CSS</div>
              <ProgressBar completed={90} custom={2} />
            </div>
            <div className="bar">
              <div className="barName1">React/RN</div>
              <ProgressBar completed={70} custom={3} />
            </div>
            <div className="bar">
              <div className="barName3">Solidity</div>
              <ProgressBar completed={70} custom={4} />
            </div>
            <div className="bar">
              <div className="barName">Web3</div>
              <ProgressBar completed={70} custom={5} />
            </div>
            <div className="bar">
              <div className="barName">Truffle</div>
              <ProgressBar completed={90} custom={6} />
            </div>
            <div className="bar">
              <div className="barName">Drizzle</div>
              <ProgressBar completed={90} custom={7} />
            </div>
            <div className="bar">
              <div className="barName4">NodeJS</div>
              <ProgressBar completed={90} custom={8} />
            </div>
            <div className="bar">
              <div className="barName7">MongoDB</div>
              <ProgressBar completed={60} custom={9} />
            </div>
            <div className="bar">
              <div className="barName5">AWS</div>
              <ProgressBar completed={90} custom={10} />
            </div>
            <div className="bar">
              <div className="barName6">Express</div>
              <ProgressBar completed={70} custom={11} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
