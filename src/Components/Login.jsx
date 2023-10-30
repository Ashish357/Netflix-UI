import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL, USER_AVATAR } from '../utils/constants'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        //validate the form data
        // console.log(email);
        const message = checkValidateData(email.current.value, password.current.value)
        // console.log(message);
        setErrorMessage(message)
        if (message) return;
        if (!isSignInForm) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                      })
                })
                .then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                    );
                  })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }

    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen w-screen object-cover' src={BG_URL} alt="bg-banner" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className={`${!isSignInForm ? 'my-20' : 'my-24'} absolute bg-black py-4 px-8 w-[95%] md:w-[55%] lg:w-[30%]  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80`}
            >
                <h1 className='font-bold text-3xl py-4 text-center'>Sign In</h1>
                {!isSignInForm && <input
                    type="text" placeholder='Full Name'
                    ref={name}
                    autoComplete='of'
                    className="p-4 my-4 w-full bg-gray-700"
                />}
                <input
                    type="email" placeholder='Email Address'
                    ref={email}
                    autoComplete='of'
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    type="password" placeholder='Password'
                    ref={password}
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className='text-red-500 font-bold'>{errorMessage}</p>
                <button
                    onClick={handleButtonClick}
                    className="p-4 my-6 bg-red-700 w-full rounded-lg opacity-95 hover:opacity-100"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm ? <p className='py-4 cursor-pointer'>New to Netflix? <span className='hover:underline' onClick={toggleSignInForm}>Sign Up Now</span></p>
                    : <p className='py-4 cursor-pointer'>Already registered? <span className='hover:underline' onClick={toggleSignInForm}>Sign In Now.</span></p>}
            </form>
        </div>
    )
}

export default Login