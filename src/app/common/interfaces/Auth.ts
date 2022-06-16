export interface User {
    name: string,
    username: string,
    refreshToken: string,
    accessToken: string,
    timeToExpire: number,
    tel: string
}

export interface ApiResponse {
    errorCode: string,
    message: string,
    data: Object
}

export interface Register {
    countryCode: string,
    name: string,
    pwd: string,
    tel: string,
    cpwd: string,
    referral: string,
    username: string
  }

  export interface Login {
    username?: string,
    tel?: string,
    password: string
  }