import './EmailScreen.css'
import { motion } from 'motion/react'
import React from 'react'
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import { ReactTyped } from "react-typed";


type FormikData = {
  user_name: string;
  message: string;
  contactemail: string;
  contact_no: string;
}

type EmailValidated = {
  showName: boolean;
  showMessage: boolean;
  showContact: boolean;
  showSubmit: boolean
  messageScreen: boolean;
  showContactScreen: boolean;
}

type EmailScreenProps = {
  emailData: FormikData
  emailValidated: EmailValidated
}


const EmailScreen: React.FC<EmailScreenProps> = ({ emailData, emailValidated }) => {

  const emailScreenGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    glitchTimeSpan: {
      start: 0.1,
      end: 0.2,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: 13000, 
      iterations: Infinity, 
      
    },
  }); 
  console.log(emailValidated.showContactScreen)
  return (
    <motion.div>
      <div className='emailScreenDiv'>
        <div className='emailScreenInnerDiv' >
          <div ref={emailScreenGlitch.ref}>
          <div>
            <p>To: Aloysious Leow</p>
          </div>
          <div>
            <p>Copy to (CC): </p>
          </div>
          <div>
            <p>Subject: Hi!</p>
          </div>
          <div className='emailMessageDiv'>
            <p>
              Hi, I am {emailData.user_name}
              {/* <ReactTyped strings={[""]} typeSpeed={40} cursorChar="█"/> */}
            </p>
            {emailValidated.messageScreen &&
            <p>
              {emailData.message}
            </p>} 
          </div>
          <div>
            {emailValidated.showContactScreen &&
            <p>
              You can contact me at {emailData.contactemail} {emailData.contact_no}
              {/* <ReactTyped strings={[""]} typeSpeed={40} cursorChar="█"/>  */}
            </p>}
            </div>
          </div>
          <div className='emailScreenInnerDivRe'>
          <div>
            <p>To: Aloysious Leow</p>
          </div>
          <div>
            <p>Copy to (CC): </p>
          </div>
          <div>
            <p>Subject: Hi!</p>
          </div>
          <div className='emailMessageDivRe'>
            <p>
              Hi, I am {emailData.user_name}
            </p>
            {emailValidated.showMessage &&
            <p>
              {emailData.message}
            </p>}
          </div>
          <div>
            {emailValidated.showContactScreen &&
            <p>
              You can contact me at {emailData.contactemail} {emailData.contact_no} 
            </p>}
          </div>
        </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default EmailScreen