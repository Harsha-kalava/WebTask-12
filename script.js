function saveToLocal(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;

	const obj = {
		name,
		email,
	};

	// Fucniton check user comes here
	if (obj.email in localStorage) {
		console.log("Already present");

		// Decalaring function to remove the user from UI
		removeUser(obj.email);
	}

	// Assigning details

	localStorage.setItem(email, JSON.stringify(obj));

	// Getting details
	let getItems = JSON.parse(localStorage.getItem(email));

	console.log(getItems);
	getUserList(getItems);
}
function getUserList(user) {
	const userList = document.getElementById("userList");
	listArr = Object.values(user);

	console.log(`listArr --> ${listArr}`);

	const li = document.createElement("li");
	li.id = `${user.email}`;
	li.appendChild(document.createTextNode(`${user.name}, ${user.email}`));
	userList.appendChild(li);

	const editbtn = document.createElement("button");
	editbtn.id = "edit";
	editbtn.appendChild(document.createTextNode("edit"));
	li.appendChild(editbtn);
	userList.appendChild(li);

	let delBtn = document.createElement("button");
	delBtn.id = "delete";
	delBtn.appendChild(document.createTextNode("delete"));
	delBtn.onclick = function () {
		deleteUser(user.email);
	};
	// delBtn.setAttribute("onclick", deleteUser(`${user.email}`));
	li.appendChild(delBtn);
	userList.appendChild(li);

	// delBtn.addEventListener("click", deleteUser(user.email));
	// let delUser = document.getElementById("delete");
	// delUser.addEventListener("click", deleteUser(user.email));

	// document.getElementById("userList").appendChild(li);
}

// function userDelBtn(email) {
// 	localStorage.removeItem(email);
// 	alert("Deleted successfully");
// }

function removeUser(email) {
	let ul = document.getElementById("userList");
	let li = document.getElementById(email);
	ul.removeChild(li);
	// let arrLi = Array.from(li);
	// arrLi.forEach(function(li.ch)){
	// 	if(li.)
	// }
	// console.log(arrLi);.
}

function deleteUser(emailId) {
	console.log("Attempted");
	localStorage.removeItem(emailId);
	removeUser(emailId);
}
