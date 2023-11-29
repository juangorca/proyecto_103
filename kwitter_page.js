//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
    apiKey: "AIzaSyBVY0kkfAhsUVdxBTtpKXBk75EmkZRoSK4",
    authDomain: "proyecto-base-de-datos-100.firebaseapp.com",
    projectId: "proyecto-base-de-datos-100",
    storageBucket: "proyecto-base-de-datos-100.appspot.com",
    messagingSenderId: "882924434248",
    appId: "1:882924434248:web:5def3658b0033c4331397d",
    measurementId: "G-2V2EN42WKT"
  };


user_name = localStorage.getItem ("user_name");
room_name = localStorage.getItem ("room_name");

function send()
{
  msg = document.getElementById ("msg.value");
  firebase.database().ref (room_name).push({
      name:user_name,
      message:msg ,
      like:0
  });
  document.getElementById("msg").value = "" ;
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Inicia el código

//Termina el código
} });  }); }
getData();

function updateLike(message_id)
{


firebase.database().ref(room_name).child(message_id).update({
like : updated_likes  
});

}

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
}