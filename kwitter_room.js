var firebaseConfig = {
      apiKey: "AIzaSyAWd0knrQ9wvgNIrNMiP1MEuoReFJLmpq4",
      authDomain: "kwitter-7ac57.firebaseapp.com",
      databaseURL: "https://kwitter-7ac57-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ac57",
      storageBucket: "kwitter-7ac57.appspot.com",
      messagingSenderId: "730551301040",
      appId: "1:730551301040:web:bbc68cf08f2d14f4609c75",
      measurementId: "G-3YGMLXTSRX"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    user_name = localStorage.getItem("user_name");
    document.getElementById(user_name).innerHTML = "Welcome" + user_name + "!";

    function Addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.datadase().ref("/").child(room_name).update({
                purpose : "Adding room name"

          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name is :"+ room_name);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirecttoroomname(this.id)'> #" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}