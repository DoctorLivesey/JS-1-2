//№1

/*function pow(a, b) {
	var result = a;
 for (var i = 1; i < b; i++){
	 result = result * a;
 }
	alert('Ответ в консоли');
	
	console.log('answer =', result);
}
pow( prompt('Введите число', 1), prompt('Введите степень', 1) );*/



// или №2



function pow(a, b) {
	var result = a;
	var i = 1;
  while(i < b){
	  result = result * a;
	  i++;
  }	
	alert('Ответ в консоли');
	
	console.log('answer =', result);
}
pow( prompt('Введите число', 1), prompt('Введите степень', 1) );

