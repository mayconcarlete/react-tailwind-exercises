import { LoginAction, LoginEnum, LoginState } from "../action-types"

const initialState: LoginState = {
  loading: false,
  error: undefined,
  data:{
    email: undefined,
    jwt: undefined
  }
}

export const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
  if(action.type === LoginEnum.LOGIN_LOADING){
    return {loading: true, data:{email: undefined, jwt: undefined}, error: undefined}
  }
  else if(action.type === LoginEnum.LOGIN_FAILED){
    return {loading: false, error: action.payload, data:{email: undefined, jwt: undefined}}
  }
  else if(action.type === LoginEnum.LOGIN_SUCCESS){
    return {loading: false, error: undefined, data: {email: action.payload.email, jwt: action.payload.jwt}}
  }
  return state
}