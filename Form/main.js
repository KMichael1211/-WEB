
var objPeople = [
	{	username: 'Michael',
		password: 'Michael123'},
	{	username: 'Valera',
		password: 'Valera123'},
	{	username: 'Alan',
		password: 'Alan123'}
]

function registerUser() {

	var registerUsername = document.getElementById('newUsername').value
	var registerPassword = document.getElementById('newPassword').value
	var newUser = {
		username: registerUsername,
		password: registerPassword,
	}

	for (var i = 0; i < objPeople.length; i++) {
		if (registerUsername == objPeople[i].username) {
			alert('Это имя пользователя уже используется, выберите другое')
			break
		}
   }
	 for (var i = 0; i < objPeople.length; i++) {
			if (registerPassword.length < 8) {
				alert('Нужно 8 или более символов')
			break
			}
		}
		for (var i = 0; i < objPeople.length; i++){
			if (registerUsername !== objPeople[i].username && registerPassword.length > 8) {
				objPeople.push(newUser)
				console.log(objPeople)
				alert('Вы успешно зарегистрировались')
				break
			 }
		 }
}

function login() {

	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + ' Добро пожаловать на сайт')
			break
		}
		if (username != objPeople[i].username && password != objPeople[i].password) {
			alert('неверное имя пользователя или пароль')
			break
		}
	}
}
