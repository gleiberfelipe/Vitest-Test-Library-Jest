export function validateCPF(cpf: string): boolean {
  // Remove non-digit characters
  cpf = cpf.replace(/\D/g, "");

  // CPF must be 11 digits
  if (cpf.length !== 11) return false;

  // Reject CPFs with all identical digits (e.g., "11111111111")
  if (/^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;

  // Validate the first check digit
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cpf.charAt(9)) !== digit1) return false;

  // Validate the second check digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cpf.charAt(10)) !== digit2) return false;

  return true;
}
