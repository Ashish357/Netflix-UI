import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { toggleSearch } from '../utils/searchSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showSearch = useSelector(store => store.search.showSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleShowSearch = () => {
    dispatch(toggleSearch())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='w-full m-0 absolute bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-[30%] md:w-44 md:mx-0" src={LOGO} alt="logo"/>
      {
        user && (
          <div 
          className='flex p-2 items-center gap-2'>
            {showSearch && (
            <select
              className="max-sm:text-sm md:p-2 md:m-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier} className='max-sm:text-sm hover:bg-gray-300'>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div onClick={handleShowSearch}>
           {!showSearch ? <img 
             className="w-10 h-10 bg-white cursor-pointer"
            src="https://th.bing.com/th/id/OIP.NYKiO70QfJjBNwVaf_Y9cgAAAA?pid=ImgDet&rs=1" 
            alt="search-icon" />:
            <img 
            className="w-8 h-8 bg-white cursor-pointer"
            src="https://th.bing.com/th/id/R.0157a53a46ea18721652ca3e643a3bcd?rik=i%2bAbO5VKYMWjlw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_162330.png&ehk=WSYIjlv2glutgfMhgoKp51qYk7mK4CWvp5gloZlWWt8%3d&risl=&pid=ImgRaw&r=0" 
            alt="home-icon" />
          }
          </div>
            <img
              className="hidden md:block w-10 h-10"
              alt="usericon"
              src={user?.photoURL}
            />
            <button onClick={handleSignOut} className="font-bold text-white pr-4">
              (Sign Out)
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Header