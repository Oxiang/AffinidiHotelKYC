import React, { FC, useState } from "react";
import { useAuthentication } from "./Authentication";
import { Button, Form, FormControl } from "react-bootstrap";
import config from '../config';

const Login: FC = () => {
  const { loading, login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MjAzNzQzMjUzMTMsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiNmU3MGVmZjEyMzMzZjY5ZiIsImlzcyI6ImRpZDplbGVtOkVpRFZXel9Uc21CQjRSZnItZHFITXJRVzh2RWs2MFIxQWRhc0R3QzVSWHk0cUE7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZWs1RVFUVlpWRkYzVFZkTmQwNHlSbWhaZWtwcVdsUldiVTlYU1hsWlZFVjZUa1JqZDAxVVpHeE5NazE2V1ZSTmVsbHFhR3hOVkVWM1QwUmFhVTVFVm1oTlZHUnBUa1JOZVZscVVtcGFWR2Q1VGpKSk1rNTVTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUWHBvYlU0eVZYcFBWMWt4V1ZSbmVWcHFhR3hPZWxWNFdtcEplRTFIV1RCYVIwVjZXbTFGTUU1VVZtcFBSRUV4V1ZkTk0wNVhTVE5PYlZreFdUSktiRTVxU20xT01rVjNUV3BCTUZreVRYcFpla1pvVDFkVmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lVR1l4TFRkUWFISTRWMUkzY1Y5RlYyNVliRnB2VlRkNlFVVkdRVWh5ZGsxQ2FUSktkbVZqYURGeGVFUnRkMGQzVjJOS2NrVmhUVE51UW5sM2Vub3dhamRmTUY4MWVUYzFhbWhOZFRseFFVdERNalZLVFVFaWZRI3ByaW1hcnkifQ.c4aa19a5fcfb42028320a6d835350513dcaa580efcd5c1229f1e6abb16072d3605ce0b150706a25276c09461787ac73a781b708c98872f23ae50c076d1ce05d0');

  async function onLogin() {
    try {
      await login.fromLoginAndPassword(username, password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='Login'>
      <div className='Form'>
        <h1 className='Title'>Verifier Login</h1>
        <p className='Info'>
          Login in order to continue
        </p>

        <Form style={{ width: 280 }}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button block disabled={loading} onClick={onLogin}>
            Login
          </Button>

         <p> Looking to check-in to Hilton Hotel? Share your verifiable credentials <a href={config.wallet_url + '/share-credentials?token=' + shareCredRequestToken} target='_blank' rel="noopener noreferrer">here!</a></p>
        </Form>
      </div>
    </div>
    
  );
};

export default Login;
