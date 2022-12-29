import axios from "axios"
import {Dispatch} from "redux"
import {LoginAction, LoginEnum} from "../action-types"

export const googleLogin = (code: string) => {
  return async(dispatch: Dispatch<LoginAction>) => {
    dispatch({type: LoginEnum.LOGIN_LOADING})
    try{
    const {data} = await axios.post("http://localhost:3001/auth/google", {
      code
    })
    console.log("!!!!!!!!!!!!!!!!")
    console.log(data)
    console.log("!!!!!!!!!!!!!!!!")
    const user = {
      jwt: data.jwt,
      email: data.email,
      name: data.name,
      lastName: data.lastName,
      profilePhoto: data.profilePhoto
    }
    localStorage.setItem("user", JSON.stringify(user))
    dispatch({
      type: LoginEnum.LOGIN_SUCCESS,
      payload:user
    })
    }catch(err){
      if(err instanceof Error){
        console.log("#############")
        console.log(err)
        console.log("#############")
        dispatch({
          type: LoginEnum.LOGIN_FAILED,
          payload: err.message
        })
      }
    }
  }
}