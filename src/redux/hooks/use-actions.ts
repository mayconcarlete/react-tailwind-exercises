import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {googleLogin} from "../actions"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(googleLogin, dispatch)
}