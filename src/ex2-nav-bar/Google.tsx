import { TokenResponse, useGoogleLogin, GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react'

function App() {

  const login = useGoogleLogin({
      onSuccess: async respose => {
          try {
              const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                  headers: {
                      "Authorization": `Bearer ${respose.access_token}`
                  }
              })

              console.log(res.data)
          } catch (err) {
              console.log(err)

          }

      }
  });

  return (
      <div className="App">
          <header className="App-header">
              <button onClick={login}>
                  <i className="fa-brands fa-google"></i>
                  Continue with google
              </button>
              {/* <GoogleLogin
                  onSuccess={credentialResponse => {
                  console.log(credentialResponse.credential);
                  // var decoded = jwt_decode(credentialResponse.credential);
                  // console.log(decoded)
              }}
                  onError={() => {
                  console.log('Login Failed');
              }}/> */}
          </header>
      </div>
  );
}

export default App;