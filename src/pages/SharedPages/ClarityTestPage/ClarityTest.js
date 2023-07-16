import React from 'react'
import { LandingFirstContainer } from '../LandingPage/LandingPage.Styles'

const ClarityTest = () => {
  return (
    
    <LandingFirstContainer>
      <div>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
        >Coming Soon!</p>
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our comprehensive evaluation will provide personalized insights and recommendations tailored to you.
          <br /><br />Subscribe now and be the first to try it out!</h2>
      </div>
      <div>
        {/* <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
        >Our test is designed to guide you towards the exact technology skills you should harness. 
        </p>         */}
      </div>
    </LandingFirstContainer>
   
  )
}

export default ClarityTest
