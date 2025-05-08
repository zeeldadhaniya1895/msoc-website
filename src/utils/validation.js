import { emailRegex, allDigitsRegex, nameRegex } from "./regex";

export const isValidEmail = (email) => emailRegex.test(email);

export const isAllDigits = (value) => allDigitsRegex.test(value);

export const isValidName = (value) => nameRegex.test(value);

export const isValidPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);