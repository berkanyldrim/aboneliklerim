// --- Import Bcrypt ---
import { bcrypt } from "../deps.ts";
//NOTE - Hash Password
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password);
};
//NOTE - Verify Password
export const verifyPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};