import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'

const Nfocused = `10px 10px 30px #5f1488, -10px -10px 50px #811cb8`
const focused = `inset -10px -10px 30px #5f1488,  inset 10px 10px 50px #811cb8`

const Transit = styled.div`
  display: flex;
  height: 48px;
  background: linear-gradient(to top, black, rgb(241, 0, 0), white);
`

const Outer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  padding-bottom: 70px;
  justify-content: center;
  padding-left: 100px;
`

const InnerOut = styled.div`
  background: #7018a0;
  position: static;
  margin-top: 70px;
  right: 30px;
  border-radius: 50px;
  width: 137mm;
`
const ContactInner = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-left: 5px;
  max-width: 90mm;
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  background: #7018a0;
  box-shadow: ${(props) => (props.focused ? focused : Nfocused)};
  position: relative;
  top: 15px;
  left: 13px;
  max-width: 100mm;
`

export default function Contact({ onDirty }) {
  const [focused, setFocused] = useState(false)
  emailjs.init('user_96bW0EDgyKXRddancLMtf')
  return (
    <div className="contact">
      <Transit />
      <Outer className="outer">
        <InnerOut className="innerOut">
          <Inner className="inner" focused={focused}>
            <h1 className="hr5"> Contact Me </h1>
            <Formik
              initialValues={{
                name: 'hello',
                email: 'elishaday00@gmail.com',
                number: '6093175996',
                details: 'i need help',
              }}
              validationSchema={Yup.object({
                number: Yup.string()
                  .min(3, 'Must be atleast 3 chars')
                  .max(15, 'Must be 15 chars or less')
                  .required('required'),
                details: Yup.string()
                  .min(3, 'Must be atleast 3 chars')
                  .max(15, 'Must be 15 chars or less')
                  .required('required'),
                name: Yup.string()
                  .min(3, 'Must be atleast 3 chars')
                  .max(15, 'Must be 15 chars or less')
                  .required('required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                resetForm()
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
                setTimeout(() => {
                  emailjs
                    .sendForm(
                      'port_contact',
                      'port_template',
                      values.target,
                      'user_96bW0EDgyKXRddancLMtf',
                    )
                    .then(
                      (result) => {
                        console.log('sucess', result.text)
                      },
                      (error) => {
                        console.log('failure', error.text)
                      },
                    )
                }, 2000)
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="form" noValidate>
                  <Form.Group>
                    <Form.Label className="label lab1"> Name: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      value={values.name}
                      className="form-control"
                    />
                  </Form.Group>

                  <ContactInner>
                    <Form.Group>
                      <Form.Label className="label lab">
                        Email Address:
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email Address..."
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        className="form-control ctrl1"
                        onFocus={(e) => {
                          setFocused(true)
                        }}
                        onBlur={(e) => {
                          handleBlur(e)
                          setFocused(false)
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="label lab">
                        Phone Number:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone Number..."
                        onChange={handleChange}
                        name="number"
                        value={values.number}
                        className="form-control ctrl2"
                        onFocus={(e) => {
                          setFocused(true)
                        }}
                        onBlur={(e) => {
                          handleBlur(e)
                          setFocused(false)
                        }}
                      />
                    </Form.Group>
                  </ContactInner>
                  <Form.Group>
                    <Form.Label className="label lab1">
                      Project Details:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Tell me about your project..."
                      onChange={handleChange}
                      name="details"
                      value={values.details}
                      className="form-control"
                      onFocus={(e) => {
                        setFocused(true)
                      }}
                      onBlur={(e) => {
                        handleBlur(e)
                        setFocused(false)
                      }}
                    />
                  </Form.Group>
                  <input type="submit" name="submit" className="btn btn1" />
                </Form>
              )}
            </Formik>
          </Inner>
        </InnerOut>
      </Outer>
    </div>
  )
}
