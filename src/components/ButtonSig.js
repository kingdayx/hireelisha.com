import { motion } from 'framer-motion'
import styled from 'styled-components'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// const button = {
//   initial: { co },
//   animate: { color: '64FF33' },
//   transition: { duration: 1 },
// }

const ButtonSig = styled(motion.div)`
  .btn {
    border: 1px solid white;
  }
  .btn:hover {
    background-color: '64FF33';
  }
`

export default function Button(props) {
  const { name, on } = props
  return (
    <ButtonSig className="btn" onClick={on}>
      {name}
      <FontAwesomeIcon className="rotate" icon={faArrowRight} />
    </ButtonSig>
  )
}
