//your JS code here. If required.
window onLoad = function(){
 if(localStorage.getItem("username") && localStorage.getItem("password")){
	 document.getElementById("existing").style.display = "block";
 }

 document.getElementById("existing").onClick = function() {
	 let savedUSerName = localStorage.getItem("username");
	 alert ("logged in as ${savedUsername}.");
 }	

 document.getElementById("loginForm").onSubmit = function(e) {
	 e.preventDefault();

	 let userName = document.getElementById("username").value;
	 let password = document.getElementById("password").value;
     let rememberMe = document.getElementById("rememberMe").checked;

	 if(rememberMe) {
		 localStorage.setItem("username", username);
		 localStorage.setItem("password", password);
	 } else {
		 localStorage.removeItem("username");
		 localStorage.removeITem("password");
	 }

	  alert(`Logged in as ${username}.`);
 };	
	
};
