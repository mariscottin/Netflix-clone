import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5rFk486ctS_wICxP24FQkrNWSiJsVv6Y",
    authDomain: "netflix-clone-4685d.firebaseapp.com",
    projectId: "netflix-clone-4685d",
    storageBucket: "netflix-clone-4685d.appspot.com",
    messagingSenderId: "1011730958857",
    appId: "1:1011730958857:web:88ae806fb12571f20206d8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;