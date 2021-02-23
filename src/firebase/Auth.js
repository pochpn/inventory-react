import * as firebase from 'firebase';
import 'firebase/auth';

class Auth {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAzuVhH9pqpx9Ez0rowdFV0-_7MoUOu3i8",
        authDomain: "klung-chana-inventory.firebaseapp.com",
        projectId: "klung-chana-inventory",
        storageBucket: "klung-chana-inventory.appspot.com",
        messagingSenderId: "1050273407277",
        appId: "1:1050273407277:web:e8c8f8c09a11517fe1f3a4"
        });
    } else {
      console.log('firebase apps already running');
    }
  }

  signIn = (email, password, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        reject(error);
      });
  };

  signOut = (success, reject) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        success(null);
      })
      .catch(function (error) {
        reject(error);
      });
  };

  createUser = (email, password, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        reject(error);
      });
  };

  resetUser = (email, success, reject) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        success(null);
      })
      .catch(function (error) {
        reject(error);
      });
  };

  listeningCurrentUser = (getSuccess) => {
    firebase.auth().onAuthStateChanged(function (user) {
      getSuccess(user);
    });
  };
}

const auth = new Auth();

export default auth;
