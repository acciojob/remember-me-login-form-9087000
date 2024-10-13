//your JS code here. If required.

const loginForm = document.getElementById("login-form"); 

document.addEventListener('DOMContentLoaded',()=>{
	const uName = localStorage.getItem("username");
	const pWord = localStorage.getItem("password");
	const exist = document.getElementById("existing")
	if(uName && pWord){
		exist.style.display="block"
		exist.addEventListener('click',()=>{
		alert(`Logged in as ${uName}`) 
	})
	}else{
		exist.style.display="none"
	}

	loginForm.addEventListener("submit",(event)=>{
	event.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const remember = document.getElementById("checkbox").checked;

	if(remember){
		localStorage.setItem('username',username); 
		localStorage.setItem('password', password);
	}else{
		localStorage.removeItem("username"); 
		localStorage.removeItem("password");
	}
	alert(`Logged in as ${username}`)
	document.getElementById("existing").style.display = "block"

	}); 
	 
	
});