import bcrypt from 'bcrypt';

const SALT_ROUNDS = 11;

export async function hash(plainText) {
  const hashed = await bcrypt.hash(plainText, SALT_ROUNDS);
  return hashed;
}

export async function validateHash(plainText, hashedPassword) {
  const isSamePassword = await bcrypt.compare(plainText, hashedPassword);
  return isSamePassword;
}
