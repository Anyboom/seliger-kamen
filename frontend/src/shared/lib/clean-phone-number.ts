export function cleanPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "");
}
