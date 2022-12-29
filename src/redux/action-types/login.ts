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
    name?: string
    lastName?: string
    jwt?: string
    profilePhoto?: string
  }
}

export interface LoginActionSuccess {
  type: LoginEnum.LOGIN_SUCCESS,
  payload:{
    email?: string
    name?: string
    lastName?: string
    jwt?: string
    profilePhoto?: string
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
