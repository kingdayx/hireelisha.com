import styled from 'styled-components'

const Nfocused = `10px 10px 30px #5f1488, -10px -10px 50px #811cb8`
const focused = `inset -10px -10px 30px #5f1488,  inset 10px 10px 50px #811cb8`

export const Transit = styled.div`
  display: flex;
  height: 48px;
  background: linear-gradient(to top, black, rgb(241, 0, 0), white);
`

export const Outer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  padding-bottom: 70px;
  justify-content: center;
  padding-left: 100px;
`

export const InnerOut = styled.div`
  background: #7018a0;
  position: static;
  margin-top: 70px;
  right: 30px;
  border-radius: 50px;
  width: 137mm;
`
export const ContactInner = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-left: 5px;
`
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  background: #7018a0;
  box-shadow: ${(props) => (props.focusedRef ? focused : Nfocused)};
  position: relative;
  top: 15px;
  left: 13px;
  width: 130mm;
`
