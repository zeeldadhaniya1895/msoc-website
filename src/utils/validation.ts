export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(name);
}

export function isAllDigits(value: string): boolean {
  return /^\d+$/.test(value);
} 

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
} 