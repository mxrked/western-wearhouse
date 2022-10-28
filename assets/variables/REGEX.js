/**
 *
 *  This will hold the most common Regex strings
 *
 */

const EMAIL_VALIDATION = "^[a-zA-Z0–9+_.-]+@[a-zA-Z0–9.-]+$";
const EMPTY_STRING = "^s*$";
const STRONG_PASSWORD = "(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s)(?=.*[!@#$*])";

export { EMAIL_VALIDATION, EMPTY_STRING, STRONG_PASSWORD };
