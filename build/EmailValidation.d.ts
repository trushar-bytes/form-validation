/*!
 * form-validation
 * Copyright(c) 2023 Trushar Narodia
 * MIT Licensed
 */
export interface JwtPayload {
    email: string;
}
declare function isEmail(email: string): RegExpMatchArray | null;
export { isEmail };
