import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import '../App.css'

const Div = styled.div`
  background: url('images/HeaderIMG.svg');
`

const ButtonSig = styled(motion.div)`
  border: 1px solid black;
  .btn:hover {
    background-color: '#64ff33';
  }
`

function Header() {
  const scrollToAbout = () => {
    window.scrollTo({
      top: 834,
      behavior: 'smooth',
    })
  }
  return (
    <Div className="header">
      <header className="App-header">
        <div className="name">
          <h1>
            Hello, I'm
            <i className="name1"> Elisha Day</i>.
          </h1>
        </div>
         <h1 className="block" >I am a Blockchain <p className="block1" >Developer.</p> </h1>
        <ButtonSig className="btn" onClick={scrollToAbout}>
          View my work
          <FontAwesomeIcon className="rotate" icon={faArrowRight} />
        </ButtonSig>
      </header>
    </Div>
  )
}

export default Header
