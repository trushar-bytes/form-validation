/*!
 * form-validation
 * Copyright(c) 2023 Trushar Narodia
 * MIT Licensed
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isEmail(email) {
    return String(email).toLowerCase().match(emailReg);
}
exports.isEmail = isEmail;
