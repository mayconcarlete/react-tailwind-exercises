export enum LoginEnum {
  LOGIN_LOADING = 'login_loading',
  LOGIN_SUCCESS = 'login_success',
  LOGIN_FAILED = 'login_failed'
}

export interface LoginState {
  loading: boolean
  error?: string
  data: {
    email?: string
    jwt?: string
  }
}

export interface LoginActionSuccess {
  type: LoginEnum.LOGIN_SUCCESS,
  payload: {
    email: string,
    jwt: string
  }
}

export interface LoginActionFailed {
  type: LoginEnum.LOGIN_FAILED,
  payload: string
}

export interface LoginActionLoading {
  type: LoginEnum.LOGIN_LOADING
}

export type LoginAction = LoginActionFailed | LoginActionSuccess | LoginActionLoading
