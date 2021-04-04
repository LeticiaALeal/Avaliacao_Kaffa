// Configuração para integração da lista de tarefas com o firebase
var firebaseConfig = {
    apiKey: "AIzaSyAtaPcyrDSenLulfd7Vr7x4vTcoUDKbcxg",
    authDomain: "teste-kaffa.firebaseapp.com",
    projectId: "teste-kaffa",
    storageBucket: "teste-kaffa.appspot.com",
    messagingSenderId: "2052017138",
    appId: "1:2052017138:web:1b122c25a8ce884a83396b"
  };
  
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();