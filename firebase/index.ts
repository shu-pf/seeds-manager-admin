import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBy-lO-XdZJWImWokXvEbsk7NZ0R6bCuDI',
    authDomain: 'seeds-manager-1b4c8.firebaseapp.com',
    projectId: 'seeds-manager-1b4c8',
    storageBucket: 'seeds-manager-1b4c8.appspot.com',
    messagingSenderId: '1046335247188',
    appId: '1:1046335247188:web:cbd928d6518bdfc2956ec1',
    measurementId: 'G-3LZ6LGZ2M0',
};
  
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const auth = getAuth();