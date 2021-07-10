var firebaseConfig = {
      apiKey: "AIzaSyD8Msyw2ORNK81wgYFWlvNkoZjtcdVBe3s",
      authDomain: "kwitter-d7e9d.firebaseapp.com",
      databaseURL: "https://kwitter-d7e9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-d7e9d",
      storageBucket: "kwitter-d7e9d.appspot.com",
      messagingSenderId: "491868464244",
      appId: "1:491868464244:web:2bcbd3b8a799c0c405dd21"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+ "!";
function addRoom() {;
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}