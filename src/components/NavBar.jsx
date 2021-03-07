import React, { useState, useEffect } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const iconVariants = {
  opened: {
    rotate: 45,
    scale: 2,
  },
  closed: {
    rotate: 0,
    scale: 1,
  },
}
const menuVariants = {
  opened: {
    top: 0,
  },
  closed: {
    top: '-90vh',
  },
}

export default function NavBar() {
  const [dimensions, setDimensions] = useState(false)
  const [scroll, setScroll] = useState(window.scrollY)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleScrollBar = () => {
    const offset = window.scrollY
    if (offset > 833) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const debouncedHandleResize = debounce(function handleResize() {
    const offset = window.innerWidth
    if (offset < 601) {
      setDimensions(true)
    } else {
      setDimensions(false)
    }
  }, 1000)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  let isMobile = width <= 500

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY)
    window.addEventListener('scroll', handleScrollBar)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  })

  let isHomeActive
  let isAboutActive
  let isSkillsActive
  let isPortfolioActive
  let isContactActive

  if (!isMobile) {
    isHomeActive = scroll >= 0 && scroll < 783
    isAboutActive = scroll >= 783 && scroll < 1300
    isSkillsActive = scroll >= 1300 && scroll < 2198
    isPortfolioActive = scroll >= 2199 && scroll < 2899
    isContactActive = scroll >= 2900
  }

  let x = ['nav']
  if (scrolled) {
    x.push('scrolled')
  }
  let xx = ['item', 'items']
  if (isAboutActive) {
    xx.pop()
    xx.push('scrollColor')
  }
  let xxx = ['item', 'items']
  if (isHomeActive) {
    xxx.pop()
    xxx.push('scrollColor')
  }
  let xxxx = ['item', 'items']
  if (isContactActive) {
    xxxx.pop()
    xxxx.push('scrollColor')
  }

  let xxxxx = ['item', 'items']
  if (isPortfolioActive) {
    xxxxx.pop()
    xxxxx.push('scrollColor')
  }
  let xxxxxx = ['item', 'items']
  if (isSkillsActive) {
    xxxxxx.pop()
    xxxxxx.push('scrollColor')
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    if (!isMobile) {
      window.scrollTo({ top: 833, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 1533, behavior: 'smooth' })
    }
  }
  const scrollToSkills = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' })
  }
  const scrollToPortfolio = () => {
    window.scrollTo({ top: 2200, behavior: 'smooth' })
  }

  const scrollToContact = () => {
    window.scrollTo({ top: 3000, behavior: 'smooth' })
  }

  return (
    <div className={x.join(' ')}>
      {/* <motion.svg
        variants={iconVariants}
        animate={open ? "opened" : "closed"}
        initial={false}
        onClick={() => setOpen((state) => !state)}
        className={dimensions ? "plus" : ""}
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
      </motion.svg> */}
      <motion.Nav
        initial={false}
        variants={menuVariants}
        animate={open ? 'opened' : 'closed'}
        defaultActiveKey="/home"
        as="ul"
        className="navi"
      >
        <Nav.Item as="li">
          <Nav.Link className={xxx.join(' ')} onClick={scrollToTop}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-1"
            className={xx.join(' ')}
            onClick={scrollToAbout}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-1"
            className={xxxxxx.join(' ')}
            onClick={scrollToSkills}
          >
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-2"
            className={xxxxx.join(' ')}
            onClick={scrollToPortfolio}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item as="li">
          <Nav.Link
            eventKey="link-3"
            className={xxxx.join(" ")}
            onClick={scrollToContact}
          >
            Contact
          </Nav.Link>
        </Nav.Item> */}
      </motion.Nav>
    </div>
  )
}
