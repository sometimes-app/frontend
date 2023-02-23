import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../firebaseConfig'

const useAuthentication = () => {
  const [user, setUser] = useState()

  useEffect(() => {
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

    return unsubscribeFromAuthStatusChanged;
  }, [])

  return {
    user
  }
}

export default useAuthentication