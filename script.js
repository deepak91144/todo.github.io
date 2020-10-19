const btnAdd = document.getElementById("btn-add");

const deleteTask = (id) => {
	if (confirm("are you sure")) {
		const todos = JSON.parse(localStorage.getItem("todo"));
		todos.splice(id, 1);
		localStorage.setItem("todo", JSON.stringify(todos));
	}

	showTask();
};
const updateTask = (id, content) => {
	const todos = JSON.parse(localStorage.getItem("todo"));
	const btnSave = document.getElementById("btn-save");
	const btnAdd = document.getElementById("btn-add");
	btnAdd.style.display = "none";
	btnSave.style.display = "";
	const inputBox = document.getElementById("input-task");
	inputBox.value = content;
	inputBox.focus();
	btnSave.addEventListener("click", () => {
		todos[id] = inputBox.value;
		localStorage.setItem("todo", JSON.stringify(todos));
		showTask();
		btnAdd.style.display = "";
		btnSave.style.display = "none";
		// inputBox.value = "";
	});
};
const showTask = () => {
	const todos = JSON.parse(localStorage.getItem("todo"));
	// console.log(todos);
	const ul = document.getElementById("list");
	let html = "";
	if (todos != null || todos != "") {
		todos.forEach((ele, ind) => {
			html += `<li><span class="ele">${ele}</span><span class="btn-con"><button onclick="updateTask(${ind},'${ele}')">update</button><button onclick="deleteTask(${ind})">delete</button></span></li>`;
		});
		ul.innerHTML = html;
	}
};

const addTask = () => {
	const inputBox = document.getElementById("input-task");
	const inputValue = inputBox.value;
	if (inputValue.trim() == "") {
		inputBox.focus();
	} else {
		const todos = localStorage.getItem("todo");
		if (todos == null) {
			userTask = [];
		} else {
			userTask = JSON.parse(todos);
		}
		userTask.push(inputValue);
		localStorage.setItem("todo", JSON.stringify(userTask));
		inputBox.value = "";
	}
	showTask();
};
btnAdd.addEventListener("click", addTask);
showTask();
