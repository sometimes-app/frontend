import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../../firebaseConfig'

const useAuthentication = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    // an observer that runs the callback function on user sign-in state change
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });
    //https://reactjs.org/docs/hooks-effect.html#:~:text=Offline%27%3B%0A%7D-,Why,-did%20we%20return
    return unsubscribeFromAuthStatusChanged;
  }, [])

  return {
    user
  }
}

export default useAuthentication