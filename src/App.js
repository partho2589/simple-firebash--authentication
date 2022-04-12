import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();

    const [user, setUser] =useState ({})

  const handelGoogleSingIn = () => {
   signInWithPopup(auth, provider)
   .then(result => {
     const user = result.user
     setUser(user)
     console.log(user)
   })
   .catch(error => {
    console.error(error)
   })
   
  }
  const handelSignOut =() =>{
    signOut (auth)
    .then(() => {
      setUser({})
    })
    .catch(error=>{
      console.error(error)
    })
  }

  return (
    <div className="App">
      {user.email ? <button onClick={handelSignOut}>SignOut </button>

         :<button onClick={handelGoogleSingIn}>Google Sign In </button>} 
      
      <h2>Name: {user.displayName}</h2>
      <p>I know your email: {user.email}</p>
       <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
