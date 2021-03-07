import React, { useState, useEffect } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faLaptopCode,
  faLightbulb,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from 'react-spring'
import { motion } from 'framer-motion'

const aniHead = {
  init: { x: -800, opacity: 0 },
  enter: { x: 0, opacity: 1 },
}

export default function About1() {
  const [about, setAbout] = useState(false)
  const [hr, setHr] = useState(false)
  const [hex, setHex] = useState(false)

  const handleAbout = () => {
    const offset = window.scrollY
    if (offset > 833) {
      setAbout(true)
    }
  }
  const handleHr = () => {
    const offset = window.scrollY
    if (offset > 833) {
      setHr(true)
    }
  }
  const handleHex = () => {
    const offset = window.scrollY
    if (offset > 833) {
      setHex(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleAbout)
    window.addEventListener('scroll', handleHr)
    window.addEventListener('scroll', handleHex)
  })
  let x = ['head']
  if (about) {
    x.push('scrollIn')
  }
  let xx = ['hr2']
  if (hr) {
    xx.push('scrollIn')
  }
  let xxx = ['hexs']
  if (hex) {
    xxx.push('scrollInHex')
  }

  const props = useSpring({
    to: [{ translateX: 0, opacity: 0 }, { opacity: 1 }],
    delay: 1500,
    from: { opacity: 0, translateX: -500 },
  })

  return (
    <div className="about">
      <div className="hr1">
        <div className="aboutHead">
          <motion.div
            variants={aniHead}
            initial="init"
            animate={about ? 'enter' : 'init'}
            className="head"
            transition={{ duration: 1 }}
          >
            <h1> About </h1>
          </motion.div>
          <animated.hr style={props} className="hr2" />
        </div>
      </div>
      <div className="contain">
        <animated.div className={xxx.join(' ')}>
          <div className="svgs">
            <div className="svg1">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="120"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="blueviolet"
                    d="M12-.001l11 6v12l-11 6-11-6v-12l11-6z"
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    fill="white"
                    data-icon="tachometer-alt"
                    class="svg-inline--fa fa-tachometer-alt fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-93 0 770 580"
                  >
                    <path
                      fill="white"
                      d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                    ></path>
                  </svg>
                </svg>
                <h3 id="fastest">Fast</h3>
                <p className="para">
                  Fast load times and lag free interaction, my highest priority.{' '}
                </p>
              </div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="120"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="blueviolet"
                    d="M12-.001l11 6v12l-11 6-11-6v-12l11-6z"
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="laptop-code"
                    class="svg-inline--fa fa-laptop-code fa-w-20"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-70 10 770 480"
                  >
                    <path
                      fill="white"
                      d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                    ></path>
                  </svg>
                </svg>
                <h3> Responsive </h3>
                <p className="para">
                  My layouts will work on any device, big or small.{' '}
                </p>
              </div>
            </div>
            <div className="svg1">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="120"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="blueviolet"
                    d="M12-.001l11 6v12l-11 6-11-6v-12l11-6z"
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="lightbulb"
                    class="svg-inline--fa fa-lightbulb fa-w-11"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-200 0 770 500"
                  >
                    <path
                      fill="white"
                      d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
                    ></path>
                  </svg>{' '}
                </svg>
                <h3 id="fastest1"> Intuitive </h3>
                <p className="para1">
                  Strong preference for easy to use, intuitive UX / UI.{' '}
                </p>
              </div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="120"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="blueviolet"
                    d="M12-.001l11 6v12l-11 6-11-6v-12l11-6z"
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="rocket"
                    class="svg-inline--fa fa-rocket fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-93 0 770 450"
                  >
                    <path
                      fill="white"
                      d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                    ></path>
                  </svg>
                </svg>
                <h3 id="fastest2"> Dynamic </h3>
                <p className="para">
                  Websites don 't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  )
}
