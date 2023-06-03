import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCT3G3U5V_R_MXzNni6uXad9XjcWiuKicA",
  authDomain: "fiverr-clone-dfff6.firebaseapp.com",
  projectId: "fiverr-clone-dfff6",
  storageBucket: "fiverr-clone-dfff6.appspot.com",
  messagingSenderId: "562485623174",
  appId: "1:562485623174:web:0dff5ec47d4dc725f99407",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
