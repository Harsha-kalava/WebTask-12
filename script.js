function saveToLocal(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const obj = {
		name,
		email,
	};
	// Assigning details
	localStorage.setItem(email, JSON.stringify(obj));

	// Getting details
	let getItems = JSON.parse(localStorage.getItem(email));
	console.log(getItems);

	getUserList(getItems);

	// Need to ask about refresh thing
}

// window.addEventListener("load", getUserList(getItems));
function getUserList(user) {
	const userList = document.getElementById("userList");
	listArr = Object.values(user);
	console.log(`listArr --> ${listArr}`);

	const li = document.createElement("li");
	li.appendChild(document.createTextNode(`${user.name}, ${user.email}`));
	// const childHTML = `<li>${key}</li>`;
	userList.appendChild(li);
}
