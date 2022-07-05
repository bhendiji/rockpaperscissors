import { collection, getDocs } from "firebase/firestore";
import { React, useState, useEffect } from "react";
import { db, auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
  const userRef = collection(db, "users");
  const [users, setUsers] = useState([]);

  const handleSignIn = () => {
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    async function getUserData() {
      const data = await getDocs(userRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data, id: doc.id })));

      // eslint-disable-next-line no-lone-blocks
    }
    getUserData();
  }, [userRef]);
  users.map((user) => console.log(user));
  const provider = new GoogleAuthProvider();
  return (
    <>
      <h1>Signin</h1>
      <button onClick={handleSignIn}>signin</button>
    </>
  );
};

export default Login;
