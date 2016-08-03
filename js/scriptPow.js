

function pow(a, b){
	var result;
	result = Math.pow(a, b)
	console.log('answer =', result);
	alert('Ответ в консоли');
}
pow( prompt('Введите число', 1), prompt('Введите степень', 1) );

/*var names = [];

for( var i = 0; i < 5; i++){
	var result = prompt('add name', '');
	names.push(result);
	
}

var userName = prompt('Введите имя пользователя', '');

if(userName == names[0]){
	alert(userName + ', вы успешно вошли!');
}else if(userName == names[1]){
	alert(userName + ', вы успешно вошли!');
}else if(userName == names[2]){
	alert(userName + ', вы успешно вошли!');
}else if(userName == names[3]){
	alert(userName + ', вы успешно вошли!');
}else if(userName == names[4]){
	alert(userName + ', вы успешно вошли!');
}else{
	alert('!!!FATAL ERROR!!!! Your computer will be destroyed')
}
*/