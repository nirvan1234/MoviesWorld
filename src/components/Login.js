import React, { useState, useRef } from 'react'
import auth from '../firebase'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";




const Login = () => {

  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);



  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const auth = getAuth();

  const handleSignIn = () => {
    console.log(email.current.value, password.current.value);
    if (checkValidData("Test Name", email.current.value, password.current.value) === null) {
      console.log("Interval picture abhi baki hai mere dost");
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    } else {
      setErrorMessage(checkValidData("Test Name", email.current.value, password.current.value))
    }

  }

  const handleSignUp = () => {
    console.log(email.current.value, password.current.value);
    if (checkValidData(name.current.value, email.current.value, password.current.value) === null) {
      console.log("Interval picture abhi baki hai mere dost");
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      setErrorMessage(checkValidData(name.current.value, email.current.value, password.current.value))
    }

  }

  const handleToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg'
          alt="logo"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{toggleSignIn ? "Sign In" : "Sign Up"}</h1>
        {!toggleSignIn && <input ref={name} className='p-4 my-4 w-full  bg-gray-700' type="text" placeholder='Enter Full Name' />}
        <input ref={email} className='p-4 my-4 w-full bg-gray-700' type="text" placeholder='Email or Phone Number' />
        <input ref={password} className='p-4 my-4 w-full bg-gray-700' type="password" placeholder='Password' />
        {errorMessage !== "" ? <p className="py-4 text-red-500">{errorMessage}</p> : null}
        {toggleSignIn ?
          <button onClick={handleSignIn} className='bg-red-500 w-full p-4 my-6 rounded-lg'>Sign In</button>
          :
          <button onClick={handleSignUp} className='bg-red-500 w-full p-4 my-6 rounded-lg'>Sign Up</button>}
        <p className='py-4 cursor-pointer' onClick={handleToggleSignIn}>{toggleSignIn ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>
      </form>

    </div>
  )
}

export default Login
