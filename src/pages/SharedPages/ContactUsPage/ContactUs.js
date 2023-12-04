import React from 'react'
import { ButtonFlexContainer, ContactDetails, ContactUsContainer } from './ContactUs.styles'
import { ContactForm } from '../../../components'
import { Button } from '../../../ui_elements'
import { CallBlack, Sms } from '../../../assets/svgs'

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactDetails>
        <h6>CONTACT US</h6>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you,
          fill the form and we will get back to you in 24 hours.
        </p>

        <Button transparent contact>
          <ButtonFlexContainer>
            <CallBlack />
            <p>+234 903 8283 447</p>
          </ButtonFlexContainer>
        </Button>        

        <Button contact onClick={() => {          
          window.open('mailto:codetivite@gmail.com?subject=Hello Codetivite', '_blank', 'noopener noreferrer');
        }}>
          <ButtonFlexContainer>
            <Sms />
            <p>codetivite@gmail.com</p>
          </ButtonFlexContainer>
        </Button>
      </ContactDetails>
      <ContactForm />
    </ContactUsContainer>
  )
}

export default ContactUs

