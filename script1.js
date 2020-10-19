let inputTask = document.getElementById("input-task"); //get input task access
let btnAdd = document.getElementById("btn-add"); //get add button access
btnAdd.addEventListener("click", () => {
	//event after add btn is clicked
	let task = inputTask.value;
	const getTask = localStorage.getItem("todo");
	if (task.trim() != "") {
		if (getTask == null) {
			var userTask = [];
		} else {
			userTask = JSON.parse(getTask);
		}
		userTask.push(task);
		localStorage.setItem("todo", JSON.stringify(userTask));
		// inputTask.value = "";
	} else {
		inputTask.focus();
	}
	showTask();
});
const del = (id) => {
	const getTask = localStorage.getItem("todo");
	if (getTask == null) {
		var userTask = [];
	} else {
		userTask = JSON.parse(getTask);
	}
	userTask.splice(id, 1);
	localStorage.setItem("todo", JSON.stringify(userTask));
	showTask();
};
const update = (id, content) => {
	inputTask.value = content;
	inputTask.focus();
	btnAdd.style.display = "none";
	const btnSave = document.getElementById("btn-save");
	btnSave.style.display = "";
	btnSave.addEventListener("click", () => {
		const getTask = localStorage.getItem("todo");
		if (getTask == null) {
			var userTask = [];
		} else {
			userTask = JSON.parse(getTask);
		}
		let inputValue = document.getElementById("input-task");
		const newValue = inputValue.value;
		console.log(inputValue.value);
		userTask[id] = newValue;

		localStorage.setItem("todo", JSON.stringify(userTask));
		showTask();
		// inputValue.value = "";
	});
};
const showTask = () => {
	const getTask = JSON.parse(localStorage.getItem("todo"));
	const taskUl = document.getElementById("list");

	let html = "";
	getTask.forEach((ele, ind) => {
		html += `<li ><span class="ele">${ele}</span> <span class="btn-con"> <button onclick="update(${ind},'${ele}')">update</button> <button onclick="del(${ind})">delete</button></span>`;
	});
	taskUl.innerHTML = html;
	// console.log(getTask);
};
showTask();
