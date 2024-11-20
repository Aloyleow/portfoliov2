import './EmailScreen.css'
import { motion } from 'motion/react'
import React from 'react'
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import { ReactTyped } from 'react-typed';


type FormikData = {
  user_name: string;
  message: string;
  contactemail: string;
  contact_no: string;
};

type EmailValidated = {
  showName: boolean;
  showMessage: boolean;
  showContact: boolean;
  showSubmit: boolean
  messageScreen: boolean;
  showContactScreen: boolean;
  typedName: boolean;
  typedContact: boolean;
  typedMessage: boolean;
}

type EmailScreenProps = {
  emailData: FormikData;
  emailValidated: EmailValidated;
  darkMode: boolean;
};


const EmailScreen: React.FC<EmailScreenProps> = ({ emailData, emailValidated, darkMode }) => {

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

  const emailScreenGlitchDark: GlitchHandle = useGlitch({
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

  return (
    <motion.div>
      <div className='emailScreenDiv'>
        <div className='emailScreenInnerDiv' >
          <div ref={darkMode ? emailScreenGlitchDark.ref : emailScreenGlitch.ref}>
            <div>
              <p style={{ color: darkMode ? "white" : "black" }}>To: Aloysious Leow</p>
            </div>
            <div>
              <p style={{ color: darkMode ? "white" : "black" }}>Copy to (CC): </p>
            </div>
            <div>
              <p style={{ color: darkMode ? "white" : "black" }}>Subject: Hi!</p>
            </div>
            <div className='emailMessageDiv'>
              <p style={{ color: darkMode ? "white" : "black" }}>
                Hi, I am {emailData.user_name}
                {emailValidated.typedName && <ReactTyped strings={[""]} cursorChar="█" />}
              </p>
              {emailValidated.messageScreen &&
                <p style={{ color: darkMode ? "white" : "black" }}>
                  {emailData.message}
                  {emailValidated.typedMessage && <ReactTyped strings={[""]} cursorChar="█" />}
                </p>}
            </div>
            <div>
              {emailValidated.showContactScreen &&
                <p style={{ color: darkMode ? "white" : "black" }}>
                  You can contact me at {emailData.contactemail} {emailData.contact_no}
                  {emailValidated.typedContact && <ReactTyped strings={[""]} cursorChar="█" />}
                </p>}
            </div>
          </div>
          <div className='emailScreenInnerDivRe' style={{ color: darkMode ? "white" : "black", "--opacityRange": darkMode ? 0.6 : 0.2  } as React.CSSProperties}>
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