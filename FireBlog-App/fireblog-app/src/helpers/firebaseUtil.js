import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import "firebase/database";

const firebaseUtil = {
  apiKey: process.env.REACT_APP_FIREBLOG_apiKey,
  authDomain: process.env.REACT_APP_FIREBLOG_authDomain,
  databaseURL: process.env.REACT_APP_FIREBLOG_databaseURL,
  projectId: process.env.REACT_APP_FIREBLOG_projectId,
  storageBucket: process.env.REACT_APP_FIREBLOG_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBLOG_messagingSenderId,
  appId: process.env.REACT_APP_FIREBLOG_appId,
};

const app = initializeApp(firebaseUtil);

export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();