import React from 'react';
import 'pages/intro/Intro.scss'
import EntireFlow from 'assets/images/icons/entire-flow.png';
import {routes} from 'constants/routes';

/**
 * Stateless component responsible for rendering a simple SSI introduction screen.
 * */
const IntroPage = () => {
  return (
    <div className='intro page-form page-form--large'>
      <div className='intro__heading-block'>
        <h1 className='intro__heading'>
          Start-Up A : Global Identifier
        </h1>
        <h5 className='intro__subheading'>For Affinidi Hackathon</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Global Identifier</h4>
        <p>Here in Global Identifier, we aim to innovate the way hotels conduct check-in with travellers. We believe that digital check-in is the future, amid the pandemic period with COVID-19</p>
        <p>Our technology hinge on providing a Self-Sovereign Identity which allows travellers to check-in seamlessly through digital means.</p>
        <p>Travellers are able to share over his or her identifier from their wallet over to the hotel's side for verification.</p>
        <h4>Roles in this scenario</h4>
        <p>For our use case, we have split the stakeholders into the following: <strong>ISSUER</strong>, <strong>VERIFIER</strong>, and <strong>HOLDER</strong>.</p>
      </div>
      <div className='intro__roles-description'>
        <div className='intro__roles-description-role'>
          <h3>Issuer</h3>
          <p>StartUp A issues a digitalised verified credentials which has information of the Passport credentials and Booking information.</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Holder</h3>
          <p>A frequent travellers who would like to have this verified credentials with him/her so he/she do not have to present their physical passport and booking documents at the hotel's receptionist.</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Verifier</h3>
          <p>A Hotel that would be able to verify the verfied credentials of the traveller. This is to also ensure that travellers are who they claim to be and have a booking with them.</p>
        </div>
      </div>

   </div>
  )
}

export default IntroPage
