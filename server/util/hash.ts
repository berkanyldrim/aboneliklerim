// --- Import Bcrypt ---
import { bcrypt } from "../deps";

export default {
  async bcrypt(stringToHash: string): Promise<string> {
    const hash = await bcrypt.hash(stringToHash);
    return hash;
  },
  async verify(hash: string, text: string): Promise<boolean> {
    const result = await bcrypt.compare(text, hash);
    return result;
  },
};