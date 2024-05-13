// --- Import Dependencies ---
import { create, getNumericDate, verify ,Payload,Header,config} from "../deps.ts";
//NOTE - Secret Key
const env = config();
const key = env.JWT_SECRET_KEY;
const encoder = new TextEncoder()
const keyBuf = encoder.encode(key);
const createdKey = await crypto.subtle.importKey(
  "raw",
  keyBuf,
  {name: "HMAC", hash: "SHA-256"},
  true,
  ["sign", "verify"],
)

//NOTE - Create Token
export const createToken = (pay: Object) => {
  const payload:Payload = {
     ...pay,
    exp: getNumericDate(6 * 60 * 60)
  }
  const header:Header = {
    alg: "HS256",
    typ: "JWT",
  }
  return create(header,payload,createdKey);
};
//NOTE - Verify Token
export const verifyToken = async (token: string) => {
  try {
    return await verify(token, createdKey, "HS256");
  } catch (error) {
    return null;
  }
};