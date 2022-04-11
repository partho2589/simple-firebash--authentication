import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from './firebase.init';
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handelGoogleSingIn = () => {
   signInWithPopup(auth, provider)
   .then(result => {
     const user = result.user
     console.log(user)
   })
   .catch(error => {
    console.log(error)
   })
   
  }

  return (
    <div className="App">
      <button onClick={handelGoogleSingIn}>Google Sing In </button>
    </div>
  );
}

export default App;
