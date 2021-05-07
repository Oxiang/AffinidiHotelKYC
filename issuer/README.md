# Affinidi - Global Identifier for Travelers

## Problem Introduction

In the context of traveling, there is always a need for identifying travelers. For example, when a traveler books a hotel for the night, the hotel's receptionist will have to handle the identification process during their check-in. 

The traditional method involves heavily on physical exchange of identification documents such as passport and booking documents. The process is commonly known as Know-Your-Customer (KYC). This consumes a large chuck of time for both the receptionist and the traveler during check-in. On top of that, with the advent of COVID-19, it increases the risk of transmission during check-in

What if there is a way to use Affinidi API to shorten the process and make it safe?

## Scenario and Solution

Start-Up A decides to provide an universal service that aims to shorten and digitalize the identification process , or KYC, by reducing it down to a single step during the check-in. 

To achieve that, Start-Up A has to collect the traveler's information (e.g. Passport, Hotel Booking details) prior to the check-in. Following that, Start-Up A will provide an unique identifier to the traveler.

On the day of the check-in, the traveler would simply have to give the identifier to the hotel's receptionist through digital means and the check-in is done.

Simple!

## Affinidi use case

This is where Affinidi comes in. Start-Up A will leverage Affinidi's API to create the entire system. The whole scenario is broken down into 3 core players:

1. Holder - Traveler
2. Issuer - Start-Up A (Global Identifier Service Provider)
3. Verifier - Hotel

### Holder
The holder are the travelers that books the hotel during their travel. They are required to submit their passport photo, passport credentials and booking details to Start-Up A.

### Issuer
Start-Up A is the issuer that checks the information from the travelers. Start-Up A will conduct their own due diligence to ensure that the information are proper before giving the approval and sending the identifier to the the travelers.

### Verifier
During check-in, the hotel will receive the identifier from the traveler through digital means. This could include scanning QR code or one-line form submission, both excluding the physical aspect. Upon receiving, they will verify the identifier with Start-Up A to ensure the following:

1. Traveler is who they say they are
2. They had made a reservation in the hotel
3. Their passport matches

## Value Proposition

Start-Up A creates value to both the travelers and the hotel. 

1. Reduce the check-in time for both hotel's receptionist and travelers
2. Remove the physical aspect of identification, especially important during COVID-19 situation
3. Reuse passport credentials for future check-ins using the same digital method

Affinidi provides an excellent service to Start-Up A simply because it provides a fully build Self-soverign Identity infrastructure for companies like Start-Up A to plug-and-play. 

This reduces the cost of development and time required to build the entire system, which is a huge benefit for entrepreneur venturing companies like Start-Up A.

## How does it work? - Process

### Step 1

Travelers will have to sign up with 

### Step 2

## Initial Set Up

### Generate API Key

Before you could use our API and SDK services, you would have to register to get the API keys.

1. Go to apikey.affinidi.com
2. Register for an account
3. Store the `API Key` and `API Key Hash` safely

### Amazon SES

In our Issuer application, once the issuer has approved an application, the applicant will receive the credentials through their email. Hence, we will be using Amazon SES services.

1. Go to AWS Console https://console.aws.amazon.com/
2. Click on your username near the top right and select My Security Credentials
3. Under `Access keys for CLI, SDK & API access`, click `Create access key`
4. Store the `Access key ID` and `Secret access key` safely

### Firebase

Note: This step will be optional.

In our issuer application, we will be using firebase to mimic issuer's database which stores all of the applications.

1. Go to Firebase Console https://console.firebase.google.com/
2. Create a new Firestore
3. Navigation to Project Settings
4. Look for `firebaseConfig` and copy the credentials. It should look like

```
  var firebaseConfig = {
    apiKey: <<SOME API KEY>>,
    authDomain: "<<SOMEP PROJECT NAME>>.firebaseapp.com",
    projectId: "<<SOMEP PROJECT NAME>>",
    storageBucket: "<<SOMEP PROJECT NAME>>.appspot.com",
    messagingSenderId: <<SOME STRING>>,
    appId: <<SOME STRING>>
  };
```

### Configure .env file

1. Open terminal and navigate to the project folder
2. Run `cp .env.example .env`
3. Fill in the .env file with the details that you have gathered in the previous steps

```
REACT_APP_API_KEY=<<Afffinidi's API Key>>
REACT_APP_API_KEY_HASH=<<Affinidi's API Key Hash>>
REACT_APP_ENVIRONMENT=prod
REACT_APP_WALLET_URL=<<URL OF THE WALLET APPLICATION>>

REACT_APP_AWS_ACCESS_KEY_ID=<<AWS's Access Key ID>>
REACT_APP_AWS_SECRET_ACCESS_KEY=<<AWS's Secret access key>>

REACT_APP_FIREBASE_API_KEY=<<Firebase's apiKey>>
REACT_APP_FIREBASE_AUTHDOMAIN=<<Firebase's authDomain>>
REACT_APP_FIREBASE_PROJECT_ID=<<Firebase's projectId>>
REACT_APP_FIREBASE_STORAGEBUCKET=<<Firebase's storageBucket>>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<<Firebase's messagingSenderId>>
REACT_APP_FIREBASE_APP_ID=<<Firebase's appId>>
```

## How to run

1. Open terminal and navigate to the project folder
2. Run `npm install`
3. Run `cp .env.example .env`
4. Populate the credentials in `.env`
5. Run `npm start`

### Sequence

Run Issuer, Holder and Verifier in this sequence in your local machine.
