import db from '../connection/mongoDB.ts';
interface UserSchema {
  _id: { $oid: string};
  name: string;
  surname: string;
  email: string;
  password: string;
  // subscription: string[];
}

const users= db.collection<UserSchema>("users");

export default users;