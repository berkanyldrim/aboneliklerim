// --- Import DB Connection ---
import db from '../connection/mongoDB.ts';
interface CurrencySchema {
  _id: { $oid: string};
  name: string;
  code: string;
  symbol: string;
}

const currencies= db.collection<CurrencySchema>("currencies");

export default currencies;