importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyDp-gUitLJKTSx_3Qz0hOjTs8S1jePI4SE",
    authDomain: "push-notifications-et.firebaseapp.com",
    databaseURL: "https://push-notifications-et.firebaseio.com",
    projectId: "push-notifications-et",
    storageBucket: "push-notifications-et.appspot.com",
    messagingSenderId: "535192270333",
    appId: "1:535192270333:web:bd9d6cbc3ae4998d0c5594"
})

firebase.messaging();