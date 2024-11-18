import './EmailScreen.css'
import { AnimatePresence, motion, Variants } from 'motion/react'
import React from 'react'


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
  return (
    <motion.div>
      <div className='emailScreenDiv'>
        <div className='emailScreenInnerDiv'>
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