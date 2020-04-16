import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAqCDhzlpVs14PsauBtUoR8aCLsfEpGDbo',
    authDomain: 'note-frames.firebaseapp.com',
    databaseURL: 'https://note-frames.firebaseio.com',
    projectId: 'note-frames',
    storageBucket: 'note-frames.appspot.com',
    messagingSenderId: '668237051147',
    appId: '1:668237051147:web:c4fbb92231847d750f1e0e',
    measurementId: 'G-78C9ZY4J5H'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;