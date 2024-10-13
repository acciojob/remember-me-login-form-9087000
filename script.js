//your JS code here. If required.
const form = document.getElementById('loginForm');
		const usernameInput = document.getElementById('username');
		const passwordInput = document.getElementById('password');
		const checkbox = document.getElementById('checkbox');
		
		form.addEventListener('submit', function(event){
			event.preventDefault();
			const username = usernameInput.value;
			const password = passwordInput.value;

			if(rememberMeCheckbox.checked){
				localStorage.setItem('username', username);
				localStorage.setItem('password', password);
			}
			else{
				localStorage.removeItem('username');
				localStorage.removeItem('password');
			}
			alert('Logged in as ${username}');
		});

		existingButton.addEventListener('click', function(){
			const existingUsername = localStorage.getItem('username');
			if(existingUsername){
				alert('Logged in an ${existingUsername}');
			}
		});