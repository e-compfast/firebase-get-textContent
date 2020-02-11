
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbbe1My0ysq0uLMngCJtc9aDc-Km86gbo",
    authDomain: "project-baru-9eed1.firebaseapp.com",
    databaseURL: "https://project-baru-9eed1.firebaseio.com",
    projectId: "project-baru-9eed1",
    storageBucket: "project-baru-9eed1.appspot.com",
    messagingSenderId: "784001895695",
    appId: "1:784001895695:web:7a7509ead35c996138027a",
    measurementId: "G-DFM408PYH0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function kirim(){
  var dapatNilai = document.getElementById("scoreGet").textContent;
  firebase.database().ref("score").push().set({
    "Nilai" : dapatNilai,
    
  });
    return false;
}