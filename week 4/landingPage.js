function printData() {

	if(document.getElementById('txtName').value == ""){
		alert("All Fields are mandatory.\nPlease Enter Name");
		console.log("Please Enter Name");
		return false;
	}
	else if (document.getElementById('txtEmail').value == "") {
		alert("All Fields are mandatory.\nPlease Enter Email");
		console.log("Please Enter Email");
		return false;
	}

	else if (document.getElementById('txtPhone').value == "") {
		alert("All Fields are mandatory.\nPlease Enter Phone number");
		console.log("Please Enter Phone number");
		return false;
	}

	else if (document.getElementById('txtMsg').value == "") {
		alert("All Fields are mandatory.\nPlease Enter Message");
		console.log("Please Enter Message");
		return false;

	}

	else{

		var name = document.getElementById('txtName').value;
		var email = document.getElementById('txtEmail').value;
		var phone = document.getElementById('txtPhone').value;
		var message = document.getElementById('txtMsg').value;

		
		if(checkPhone(phone) && checkMail(email)){
			console.log("Name    : "+name);
			console.log("Email   : "+email);
			console.log("Phone No: "+phone);
			console.log("Message : "+message);
		}
	}

	/*document.getElementById('txtName').value = "";
	document.getElementById('txtEmail').value = "";
	document.getElementById('txtPhone').value = "" ;
	document.getElementById('txtMsg').value = "" ;
*/}



function checkPhone(phone) {
	if (phone.length < 10 || phone.length > 10) {
			alert("Please Enter Valid Phone number");
			console.log("Please Enter Valid Phone number");
			return false;
		}

	for( var i = 0; i < phone.length; i++){
		
		if(phone.charCodeAt(i) > 57){
			alert("Please Enter Valid Phone number");
			console.log("Please Enter Valid Phone number");
			return false;
		}
		else{
			return true;
		}
	}

}

function checkMail(email) {
	
	var expr = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

	if(email.match(expr)){
		return true;
	}
	else{
		alert("Please Enter Valid Email");
		console.log("Please Enter Valid Email");
		return false;
	}
}