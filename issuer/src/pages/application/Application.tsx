import React, { useState, useContext } from 'react';
import AppContext from 'context/app';
import {Button, FormControl, FormGroup, FormLabel, FormFile} from 'react-bootstrap';
import ApiService from 'utils/apiService';
import 'pages/application/Application.scss'
import firebase from 'utils/firebase/firebase';
import randomstring from 'randomstring';

interface IBaseVCData {
    givenName: string;
    familyName: string;
  }
  
  interface IExtendVCData {
    passportNumber: string;
    country: string;
    hotelBookingId: string;
    email: string;
    hotel: string;
    bookingService: string;
    expiryDate: string;
  }
  
  const defaultBaseVCData: IBaseVCData = {
    givenName: '',
    familyName: ''
  }
  
  const defaultExtendVCData: IExtendVCData = {
    passportNumber: '',
    country: 'Singapore',
    expiryDate: '',
    hotelBookingId: '',
    email: '',
    hotel: 'Hilton Hotel',
    bookingService: 'Bookings.com'
  }

interface IPayload extends IBaseVCData{
  idClass: string;
  holderDid: string
}

const Application: React.FC = (): React.ReactElement => {
    const {appState} = useContext(AppContext);
    const [inputDID, setinputDID] = useState(appState.didToken || '')

    const [baseVCData, setBaseVCData] = useState<IBaseVCData>(defaultBaseVCData)
  
    const [extendVCData, setExtendVCData] = useState<IExtendVCData>(defaultExtendVCData)

    /**
     * Function for issuing an unsigned employment VC.
     * */
    const issueDrivingLicensePersonVC = async () => {
        try {
          const { givenName, familyName } = baseVCData;

          // Generate a random Affinidi Driving License ID, which will double up as an application ID
          const applicationID: string = randomstring.generate(10);
          const vcToStringify = {...extendVCData, affinidiDrivingLicenseID: applicationID}
          
          const payload: IPayload = {
            givenName,
            familyName,
            idClass: JSON.stringify(vcToStringify),
            holderDid: inputDID || appState.didToken || '',
          }

          // Store unsignedVC into issuer's datsabase
          const db = firebase.firestore();
          await db.collection('passport-waiting-approval').add({username: appState.username, payload, applicationID, approved: false})

          alert('You have successfully submitted your application.');
        } catch (error) {
            console.log("firestore", error)
            ApiService.alertWithBrowserConsole(error.message);
        }
    }
    
    const resetToDefaults = () => {
      setinputDID(appState.didToken || '')

      setBaseVCData(defaultBaseVCData)
      setExtendVCData(defaultExtendVCData)
    }
    
    const updateBaseVC = (e: any) => {
      setBaseVCData({...baseVCData, [e.target.name]: e.target.value})
    }

    const updateExtendBaseVC = (e: any) => {
      setExtendVCData({...extendVCData, [e.target.name]: e.target.value})
    }

    return (
      <div className='tutorial'>
        <div className='tutorial__step'>
          <Button 
            style={{float: 'right'}}
            onClick={e => resetToDefaults()}
            >Clear all fields
          </Button>

          <p><strong>Step 1:</strong>Please fill in details of your Passport information and Booking Credentials</p>
          <FormGroup controlId='email'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Email Address:</FormLabel>
            <FormControl name='email' type='text' value={extendVCData.email} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='givenName'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Given Name:</FormLabel>
            <FormControl name='givenName' type='text' value={baseVCData.givenName} onChange={e => updateBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='familyName'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Family Name:</FormLabel>
            <FormControl name='familyName' type='text' value={baseVCData.familyName} onChange={e => updateBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='passportNumber'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Passport Number</FormLabel>
            <FormControl name='passportNumber' type='text' value={extendVCData.passportNumber} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='expiryDate'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Passport Expiry Date</FormLabel>
            <FormControl name='expiryDate' type='text' value={extendVCData.expiryDate} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          
          <FormGroup controlId='hotelBookingId'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Hotel Booking ID</FormLabel>
            <FormControl name='hotelBookingId' type='text' value={extendVCData.hotelBookingId} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='hotel'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Hotel</FormLabel>
            <FormControl name='hotel' as="select" value={extendVCData.hotel} onChange={e => updateExtendBaseVC(e)}>
              <option>Hilton Hotel</option>
              <option>Ibis Hotel</option>
              <option>Mariott Hotel</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId='bookingService'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Booking Service</FormLabel>
            <FormControl name='bookingService' type='text' value={extendVCData.bookingService} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <div style={{margin: '30px 0'}}>
            <p><strong>Step 2:</strong>Upload Passport</p>
            <FormFile id="formcheck-api-regular">
              <FormFile.Label>Passport</FormFile.Label>
              <FormFile.Input />
            </FormFile>
          </div>
          
          <Button 
            onClick={e => issueDrivingLicensePersonVC()}
            >Submit
          </Button>
        </div>
      </div>
    )
}

export default Application;