// --- Import JWT Token Util ---
import {
  validateJwt,
  parseAndDecode,
  validateJwtObject,
} from "../deps.ts";

// --- Import JWT Token Util ---
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "../deps.ts";

//NOTE - Secret Key
const key = "your-secret";

//NOTE - Header
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export default {
  generate(userId: string): string {
    const payload: Payload = {
      uid: userId,
      exp: setExpiration(new Date().getTime() + 60000 * 60),
    };
    return makeJwt({ header, payload, key });
  },
  async validate(token: string) {
    return !!await validateJwt(token, key, { isThrowing: false });
  },
  fetchUserId(token: string) {
    return validateJwtObject(parseAndDecode(token)).payload;
  },
};