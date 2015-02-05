var controlCheckbox = document.getElementById('mainChekcbox'),
addBtn = document.getElementById('addNewObserver'),
container = document.getElementById('observersContainer');

extend(new Subject(), controlCheckbox);
controlCheckbox['onclick'] = new Function('controlCheckbox.Notify(controlCheckbox.checked)');
addBtn['onclick'] = AddNewObserver;

function AddNewObserver(){
	var check = document.createElement('input');
	check.type = 'checkbox';
	extend(new Observer(), check);
	check.Update = function(value){
		this.checked = value;
	};
	controlCheckbox.AddNewObserver(check);
	container.appendChild(check);
}