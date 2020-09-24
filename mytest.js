const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


form.addEventListener('submit', (e) => {
	if(name.value == "" || email.value == "" || password.value == ""){
		e.preventDefault();
		document.getElementById("errorresponse").innerHTML="All fields are required.";
	} else if(name.value.length<3) {
		e.preventDefault();
		document.getElementById("errorresponse").innerHTML="Name must be atleast 3 characters long.";
	} else if(password.value.length<8) {
		e.preventDefault();
		document.getElementById("errorresponse").innerHTML="Password must be 8 characters long."; 
	} else if((password.value.search(/[0-9]/) == -1) || (password.value.search(/[a-z]/) == -1) || (password.value.search(/[A-Z]/) == -1)) {
		e.preventDefault();
		document.getElementById("errorresponse").innerHTML="Password must conatin at least 1 uppercase, 1 lowercase & 1 number.";
	} 
	else {
		localStorage.clear();
		localStorage.setItem("Name", name.value);
		window.location.href="mytest.html";
	}
})