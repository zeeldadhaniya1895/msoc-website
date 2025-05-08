import { emailRegex, allDigitsRegex, nameRegex } from "./regex";

export const isValidEmail = (email) => emailRegex.test(email);

export const isAllDigits = (value) => allDigitsRegex.test(value);

export const isValidName = (value) => nameRegex.test(value);