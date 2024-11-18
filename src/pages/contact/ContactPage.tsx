import './ContactPage.css'
import EmailScreen from "../../components/emailscreen/EmailScreen"

import { AnimatePresence, motion, Variants } from 'motion/react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Formik } from 'formik';
import * as yup from 'yup'
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { GlitchHandle, useGlitch } from 'react-powerglitch';

const logos: Logos = [
  {
    imageSrcLight: "/navbar/gitblack.svg",
    imageSrcDark: "",
    link: "https://github.com/Aloyleow/",
    alttxt: "githubLogo",
  },
  {
    imageSrcLight: "/navbar/linkblack.svg",
    imageSrcDark: "",
    link: "https://www.linkedin.com/in/aloyleow",
    alttxt: "linkinLogo",
  },
  {
    imageSrcLight: "/contact/home.svg",
    imageSrcDark: "",
    link: "/",
    alttxt: "homeLogo",
  }
]

type Logos = {
  imageSrcLight: string
  imageSrcDark: string
  link: string
  alttxt: string
}[]

type EmailValidated = {
  showName: boolean;
  showMessage: boolean;
  showContact: boolean;
  showSubmit: boolean
  messageScreen: boolean;
  showContactScreen: boolean;
}

type FormikData = {
  user_name: string;
  message: string;
  contactemail: string;
  contact_no: string;
}

type FormErrors = {
  user_name?: string;
  message?: string;
  contact_no?: string;
  contactemail?: string;
};

type ContactPageProps = {
  pagesAnimatVar: Variants
  navGlitch: GlitchHandle
  fadeTransitionAnimatVar: Variants
}

const ContactPage: React.FC<ContactPageProps> = ({ pagesAnimatVar, navGlitch, fadeTransitionAnimatVar }) => {
  const [emailData, setEmailData] = useState<FormikData>({
    user_name: "",
    message: "",
    contactemail: "",
    contact_no: ""
  })
  const [emailValidated, setEmailValidated] = useState<EmailValidated>({
    showName: true,
    showMessage: false,
    showContact: false,
    showSubmit: false,
    messageScreen: false,
    showContactScreen: false,
  })
  const [notloading, setNotLoading] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [showArrow, setShowArrow] = useState<boolean>(true)

  const handleNavigate = (link: string) => {
    if (link === "/") {
      return "_self"
    } else {
      return "_blank"
    }
  }

  const handleEmailValidate = (validateForm: (values?: FormikData) => Promise<FormErrors>, values: FormikData) => {
    validateForm(values).then((errors) => {
      if (!errors.user_name) {
        setEmailValidated((prev) => ({
          ...prev,
          showMessage: true,
          showName: false,
          messageScreen: true,
        }));
      }

      if (!errors.user_name && !errors.message) {
        setEmailValidated((prev) => ({
          ...prev,
          showMessage: false,
          showContact: true,
          showContactScreen: true,
        }));
      }

      if (!errors.user_name && !errors.message && !errors.contactemail) {
        setEmailValidated((prev) => ({
          ...prev,
          showSubmit: true,
        }));
      }
    });
  };

  const handleEmailState = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, item: string) => {
    setEmailData({ ...emailData, [item]: event.target.value })
  }

  const yupSchema = yup.object().shape({
    user_name: yup.string().required().matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    message: yup.string().required(),
    contact_no: yup.string(),
    contactemail: yup.string().email().required()
  })

  const sendEmail = async (formikData: FormikData) => {
    setNotLoading(false)
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formikData,
        import.meta.env.VITE_PUBLIC_KEY,
      );
    } catch (error) {
      console.error('=( System Error:', error)
    }
    setShowArrow(false)
    setEmailValidated((prev) => ({...prev, showSubmit: false}))
    setNotLoading(true)
    setSubmitted(true)
    
  };

  const submittedGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0,
      end: 0.9,   
    },
    shake: false,
    slice: {
      count: 30, 
      velocity: 20, 
    },
    timing: {
      duration: 20000, 
      iterations: Infinity,
      
    },
  });


  return (
    <div className="pagesLayoutDiv">
      <motion.div
        variants={pagesAnimatVar}
        animate="animate"
        initial="initial"
        exit="exit"
        className="projectMainDiv"
      >
        <div className="contactPageMainDiv">
          <div>
            <EmailScreen emailData={emailData} emailValidated={emailValidated} />
          </div>
          <div className='contactPageFormDiv'>
            <h5>Send me a message!</h5>
            <Formik
              validationSchema={yupSchema}
              onSubmit={sendEmail}
              initialValues={{
                user_name: "",
                message: "",
                contact_no: "",
                contactemail: "",
              }}

            >
              {({ handleSubmit, handleChange, values, touched, errors, validateForm }) => (
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                >

                  <div className='formInputHolder'>
                    <AnimatePresence mode='wait'>
                      {emailValidated.showName &&
                        <motion.div
                          key="user_name"
                          variants={fadeTransitionAnimatVar}
                          animate="animate"
                          exit="exit"
                        >
                          <FloatingLabel
                            label="Your Name/Company"
                          >
                            <Form.Control
                            className='formInputControls'
                              value={values.user_name}
                              name='user_name'
                              onChange={(e) => {
                                handleChange(e)
                                handleEmailState(e, 'user_name')
                              }}
                              isValid={touched.user_name && !errors.user_name}
                              isInvalid={!!errors.user_name}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.user_name}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </motion.div>}
                      {emailValidated.showMessage &&
                        <motion.div
                          key="message"
                          variants={fadeTransitionAnimatVar}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <FloatingLabel
                            label="Message"
                          >
                            <Form.Control
                              className='formControlMessage'
                              as="textarea"
                              rows={5}
                              value={values.message}
                              name='message'
                              onChange={(e) => {
                                handleChange(e)
                                handleEmailState(e, 'message')
                              }}
                              isValid={touched.message && !errors.message}
                              isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.message}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </motion.div>}
                      {emailValidated.showContact &&
                        <motion.div
                          key="contactEmail"
                          variants={fadeTransitionAnimatVar}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <FloatingLabel
                            label="Your Email"
                          >
                            <Form.Control
                              value={values.contactemail}
                              name='contactemail'
                              onChange={(e) => {
                                handleChange(e)
                                handleEmailState(e, 'contactemail')
                              }}
                              isValid={touched.contactemail && !errors.contactemail}
                              isInvalid={!!errors.contactemail}
                              style={{ marginBottom: "2%" }}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.contactemail}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                          <FloatingLabel
                            label="Your Contact Number"
                          >
                            <Form.Control
                              value={values.contact_no}
                              name='contact_no'
                              onChange={(e) => {
                                handleChange(e)
                                handleEmailState(e, 'contact_no')
                              }}
                              isValid={touched.contact_no && !errors.contact_no}
                              isInvalid={!!errors.contact_no}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.contact_no}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </motion.div>}
                    </AnimatePresence>
                  </div>

                  <div className='submitButtonHolder'>
                    {!notloading &&
                      <div>
                        <div ref={submittedGlitch.ref}>
                          <h5>SUBMITTING</h5>
                        </div>  
                      </div>}
                    {submitted &&
                      <div className='submittedDisplay'>
                          <h5>SUBMITTED!</h5>   
                      </div>
                    }

                    {notloading && emailValidated.showSubmit &&
                      <button type='submit'>
                        Submit
                      </button>}

                    {showArrow && notloading && !emailValidated.showSubmit &&
                      <div>
                        <div className="validateArrowDiv" ref={navGlitch.ref}>
                          <div onClick={() => handleEmailValidate(validateForm, values)} >
                            <img src="/arrow.svg" alt="arrowright" className="validateArrowImg" />
                          </div>
                          <div>
                            <h5 className="validateArrowDivText">next</h5>
                          </div>
                        </div>
                      </div>}

                  </div>
                </Form>)}
            </Formik>
          </div>
          <div className='contactPageLogoDiv'>
            {logos.map((logos, index) => (
              <div key={index} ref={navGlitch.ref}>
                <a href={logos.link} target={handleNavigate(logos.link)} rel="noopener noreferrer">
                  <img src={logos.imageSrcLight} alt={logos.alttxt} width="32px" />
                </a>
              </div>
            ))}
          </div>
          <div>
            <p>aloyleow91@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactPage