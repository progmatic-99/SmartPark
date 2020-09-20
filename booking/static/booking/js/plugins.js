//auto increment
var firebaseConfig = {
  apiKey: "#",
  authDomain: "smart-parking-51b36.firebaseapp.com",
  databaseURL: "https://smart-parking-51b36.firebaseio.com",
  projectId: "smart-parking-51b36",
  storageBucket: "smart-parking-51b36.appspot.com",
  messagingSenderId: "896172750089",
  appId: "1:896172750089:web:107f3613b8b66ac74c0fd8",
  measurementId: "G-ZCV4DBC045"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().variable;
    if(ledStatus == "free"){
      $(".lightStatus").text("free");
    } else {
      $(".lightStatus").text("nospace");
    }
  });

  /* $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  }); */
});



//navbar breakage
$(document).on("scroll", function(){
	if
  ($(document).scrollTop() > 86){
	  $("#banner").addClass("shrink");
	}
	else
	{
		$("#banner").removeClass("shrink");
	}
});

//Preloader
var overlay = document.getElementById("loader");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

//right side navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "330px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(document).ready(function(){
  $(".navbar-toggler-icon").click(function(){
    $(".sidenav").addClass("padding-50");
  });
});

$(document).ready(function(){
  $("#closebtn1").click(function(){
    $(".sidenav").removeClass("padding-50");
  });
});
