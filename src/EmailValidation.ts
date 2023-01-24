/*!
 * form-validation
 * Copyright(c) 2023 Trushar Narodia
 * MIT Licensed
 */

'use strict'
export interface JwtPayload {
    email: string
  }

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isEmail(email:string){
    return String(email).toLowerCase().match(emailReg);
}

export {
    isEmail
}