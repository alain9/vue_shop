import  * as firebase  from "firebase";
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNXMpqaIdFeGxFlWP_3d40DlYXAJRbDHU",
  authDomain: "vueshops-6ae6c.firebaseapp.com",
  databaseURL: "https://vueshops-6ae6c.firebaseio.com",
  projectId: "vueshops-6ae6c",
  storageBucket: "vueshops-6ae6c.appspot.com",
  messagingSenderId: "458456516061",
  appId: "1:458456516061:web:fbc495343b3f12425ae234",
  measurementId: "G-34C7HS35RG"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();