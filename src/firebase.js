import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBik_H0T6GQO3IFT-jLjdJvgMiDtrD8t2M",
    authDomain: "disneyplus-clone-d8308.firebaseapp.com",
    projectId: "disneyplus-clone-d8308",
    storageBucket: "disneyplus-clone-d8308.appspot.com",
    messagingSenderId: "587502839588",
    appId: "1:587502839588:web:38f242a6e9a327101b35b1",
    measurementId: "G-2B96X6896Y"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;