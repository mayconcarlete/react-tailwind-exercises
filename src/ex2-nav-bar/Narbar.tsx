import { useState } from "react"
import { useGoogleLogin} from "@react-oauth/google"
import axios from 'axios'
import { useDispatch } from "react-redux"
import {googleLogin} from "../redux/actions"
import {useTypedSelector} from "../redux/hooks/useTypedSelector"


export default function NavBar() {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const dispatch = useDispatch()

  const { data } = useTypedSelector( state => state.login)
  const onClick = () => {
    setDropdown(!dropdown)
  }

  const googleAuth = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
        dispatch(googleLogin(codeResponse.code) as any) // calls redux action
    },
    onError: errorResponse => console.log(errorResponse),
  });

    const checkJwt = () => {
      axios.get("http://localhost:3001/test",{
        headers:{
          authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiZ29vZ2xlIiwicHJvdmlkZXJKd3QiOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWpBeVlUWXhaV1prTW1FME5HWmpNakUxTVRRNFpEUmxabVpqTXpSa05tRTNZakpoWXpJMlpqQWlMQ0owZVhBaU9pSktWMVFpZlEuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMMkZqWTI5MWJuUnpMbWR2YjJkc1pTNWpiMjBpTENKaGVuQWlPaUl4TmprNE1UZzBOell6T1RNdGNEWnJOR2gwYzIxMFpUSnBZM1p6TXprM01EWjFPREJpTVdoMWFYQnhkR1V1WVhCd2N5NW5iMjluYkdWMWMyVnlZMjl1ZEdWdWRDNWpiMjBpTENKaGRXUWlPaUl4TmprNE1UZzBOell6T1RNdGNEWnJOR2gwYzIxMFpUSnBZM1p6TXprM01EWjFPREJpTVdoMWFYQnhkR1V1WVhCd2N5NW5iMjluYkdWMWMyVnlZMjl1ZEdWdWRDNWpiMjBpTENKemRXSWlPaUl4TVRZME56TTFNRFk1T1RJM056ZzVOak01T0RRaUxDSmxiV0ZwYkNJNkltMWhlV052Ymk1allYSnNaWFJsUUdkdFlXbHNMbU52YlNJc0ltVnRZV2xzWDNabGNtbG1hV1ZrSWpwMGNuVmxMQ0poZEY5b1lYTm9Jam9pYURWek5XMHdhRmRhVURkek1YWTNNek5CVVRZd2R5SXNJbTVoYldVaU9pSk5ZWGxqYjI0Z1EyRnliR1YwWlNJc0luQnBZM1IxY21VaU9pSm9kSFJ3Y3pvdkwyeG9NeTVuYjI5bmJHVjFjMlZ5WTI5dWRHVnVkQzVqYjIwdllTOUJSV1JHVkhBMWVETXdUMnQyVlhBeWRYcHBaek5xTlVsaFIyUk9lRzVJTjJocVNrVjVVV3gxTUdWU1pqTlJQWE01Tmkxaklpd2laMmwyWlc1ZmJtRnRaU0k2SWsxaGVXTnZiaUlzSW1aaGJXbHNlVjl1WVcxbElqb2lRMkZ5YkdWMFpTSXNJbXh2WTJGc1pTSTZJbkIwTFVKU0lpd2lhV0YwSWpveE5qY3lNekV4TnpRNUxDSmxlSEFpT2pFMk56SXpNVFV6TkRsOS5aVDZlTlVTNi0zOEkyQ2M2d1hPbGNRSTlyYnBRSUxJMm1XVnpodEdJZm9lZkJ6QXZ3STlBOFlkSldZTV9UbjJ2NktRZWdGNDRXNlhXeFBObUpLaHphN2hUcXhpb3JaY3FjVW0ydC0wMDltY0hSOGtjWjBBZ21FYmJUWDZvN0Q0RlVaS0pNOTkyRHlwMG81cDlIMHR1Z3RHX09FbUFMQk5hWHdYeU1nNS13ZDIxWS1tS3ExbDhDR3ZYLS1xdmpLMmVCZ3JJTmphdFdxTEtoVWEwWGZQcXNJNnBRUFBsZVFtRHZJWlZ2cFpvMmNvcjRBc19ieUdIQUgxSjB5MXpubUIzRzJUM2dVekRUSzFNRWRJTjdUS0pYZy1yLUptcVY4UVVVRHhONjhlaGV2cEwybi1PR2xrZFlpNVJqY2JjRDRBdWwzWEtJUDhyaGU1WUphSmt2TUpnd3ciLCJuYW1lIjoiTWF5Y29uIiwibGFzdE5hbWUiOiJDYXJsZXRlIiwiZW1haWwiOiJtYXljb24uY2FybGV0ZUBnbWFpbC5jb20iLCJwcm9maWxlUGhvdG8iOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA1eDMwT2t2VXAydXppZzNqNUlhR2ROeG5IN2hqSkV5UWx1MGVSZjNRPXM5Ni1jIiwiaWF0IjoxNjcyMzExNzQ5LCJleHAiOjE2NzI0ODQ1NDl9.QyW2P67E6eNRXR-kJeG3sG8nO4pbTEsfl_927-imT9M"
        }
      }).then(response => {
        const data = response.data
        console.log(data)
      })
    }
  return <header className="flex bg-red-100 w-full">
    <div className="grid grid-cols-3 w-full p-4">
      <div className="order-3 grid col-span-1 bg-green-100 justify-end pr-4 md:order-1 md:justify-start items-center">Logo</div>
      <div className="order-2 grid col-span-1 bg-yellow-100"><input placeholder="Search" className="flex w-full"></input></div>
      <div className="order-1 md:hidden"><button className="fa-solid fa-bars" onClick={onClick}></button></div>
      <div className={`order-4 md:order-3 md:grid md:flex-row md:items-center md:w-full md:justify-end col-span-1 ${dropdown ? 'grid pt-4' : 'hidden'}`}>
        <nav className="md:flex md:flex-row md:items-center">
          <ul className="md:flex md:flex-row md:items-center">
            <li className="flex md:pr-4 sm:p-2">Home</li>
            <li className="flex md:pr-4 sm:p-2">SignIn</li>
            <li className="flex md:pr-4 sm:p-2">SignUp</li>
          </ul>
      </nav>
      <button onClick={googleAuth}>Continue with Google</button>
      <button onClick={checkJwt}>Click to check jwt</button>
  </div>
    </div>
  </header>
}
