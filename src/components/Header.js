import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/createSlice';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid ,email , displayName} = user;
           dispatch(addUser({uid: uid, email: email , displayName: displayName}));
            navigate("/browser")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();

  }, []);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/Error")
    });
  }
  return (
    <div className='flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img
        className='max-w-44'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt="logo"
      />
      <div className='flex p-2'>
      <img
        className='max-w-16'
        src='https://cdn-icons-png.freepik.com/256/16697/16697253.png?semt=ais_hybrid'
        alt="logo"
      />
      <button onClick={handleSignOut} className='text-white px-2'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
