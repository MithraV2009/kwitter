var firebaseConfig = {
    apiKey: "AIzaSyDjRN2UF37xABgHZCqZOwvcc3OQ5TopQTU",
    authDomain: "kwitterr-67499.firebaseapp.com",
    databaseURL: "https://kwitterr-67499-default-rtdb.firebaseio.com",
    projectId: "kwitterr-67499",
    storageBucket: "kwitterr-67499.appspot.com",
    messagingSenderId: "993965976395",
    appId: "1:993965976395:web:bc26f86b05d006d608d6ce"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //add fb links//

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
//  //

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html"
    //   //
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}