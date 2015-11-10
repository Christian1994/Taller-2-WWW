// Evento de carga de página (funcion anonima) 
// windows.onload permite la carga de propiedades de la pagina despues de renderizacion
window.onload = function(){	
	display = document.getElementById('display');		//	It will edit the <input id="display"> properties
	suma = document.getElementById('suma');				//	It wlll edit the <input type="button" id="suma"> properties
	resta = document.getElementById('resta');			//	It wlll edit the <input type="button" id="resta"> properties
	producto = document.getElementById('producto');		//	It wlll edit the <input type="button" id="producto"> properties
	cociente = document.getElementById('cociente');		//	It wlll edit the <input type="button" id="cociente"> properties
	
	//	These variables will allow save the values in the form
	valor_a = document.getElementById('valor_a');
	valor_b = document.getElementById('valor_b');
	operacion = document.getElementById('operacion');
	result = document.getElementById('resultado');
	
	submit = document.getElementById('submit');			//	It will be used to enable and disable the submit button
}

x = "0";	//	Variable that saves the number in the textarea
xi = 1;		//	Begin number in screen
coma = 0;	//	Initial decimal point state
ni = 0;		//	Number in standby
op = "no"	//	Current operation. no = No operation

// Function that will catch the pressed number as parameter
function numero(num){
	if(x == "0" || xi == 1){			// 	this means if we need to start writing a number
		display.value = num;			// 	display.value: Allows collect an input tag content to be returned or updated, and showed in screen
		x = num;						// 	save the number
		
		if (num == "."){ 				//	if we start writing with a decimal point
			display.value = "0."; 		//	write 0.
			x = num; 					//	save number
			coma = 1; 					//	change coma state
		}
	}
	else{								//	continue writing the number
		if(num == "." && coma == 0){	// 	if the "." button is pressed first time
			display.value += num;		//	this "." will be added and showed in screen
			x += num;					//	add and save the number
			coma = 1;					//	change coma state
		}
		else if(num == "." && coma == 1){}	// if the "." button was previously pressed, no futher actions
		else{							//	in other case
			display.value += num;		//	add and show in screen
			x += num;					// 	add and save the number (concatenation)			
		}
	}
	xi = 0;								//	the number is started and we can extend
}

//	Function that will catch the operator as parameter and will make the corresponded operation
function operar(sign){
	resultado();						//	the current operations will be made in first time
	ni = x;								//	save the first wrote number
	valor_a.value = ni;					//	save the "valor_a" variable in the form	
	op = sign;							//	save the operator
	operacion.value = op;				//	save the "op" variable in the form	
	xi = 1;								//	initialize screen
	coma = 0;							//	change coma state allowing the possibility to write the second number as decimal
	
	//	It will evaluate which of those buttons will change of background color according to the operation what I want to do
	switch(sign){
		//	If the '+' button is pressed, it will turn the background color to blue. The rest as equal as before
		case '+':
			suma.style.backgroundColor = '#0000FF';
			resta.style.backgroundColor = '#000000';
			producto.style.backgroundColor = '#000000';
			cociente.style.backgroundColor = '#000000';
		break;
		
		//	If the '-' button is pressed, it will turn the background color to blue. The rest as equal as before
		case '-':
			suma.style.backgroundColor = '#000000';
			resta.style.backgroundColor = '#0000FF';
			producto.style.backgroundColor = '#000000';
			cociente.style.backgroundColor = '#000000';
		break;
		
		//	If the '*' button is pressed, it will turn the background color to blue. The rest as equal as before
		case '*':
			suma.style.backgroundColor = '#000000';
			resta.style.backgroundColor = '#000000';
			producto.style.backgroundColor = '#0000FF';
			cociente.style.backgroundColor = '#000000';
		break;

		//	If the '/' button is pressed, it will turn the background color to blue. The rest as equal as before
		case '/':
			suma.style.backgroundColor = '#000000';
			resta.style.backgroundColor = '#000000';
			producto.style.backgroundColor = '#000000';
			cociente.style.backgroundColor = '#0000FF';
		break;
	}
	
	submit.disabled = true;				//	if the "=" button was not pressed yet, "submit" button will continue disabled
}

// Function that will solve the operation and will show its result in the screen
function resultado(){
	if(op == "no"){						//	if we don't have any operation to do
		display.value = x;				//	we will show the same number
	}
	else{								//	in other case, if we have an operation to do
		valor_b.value = x;				//	save the "valor_b" variable in the form
		sol = ni + op + x;				//	we will write the operation in a string
		solucion = eval(sol);			//	we use the eval(p) function. This js predefined function allows to convert the p string passed as parameter 
										//	in an authentic operation between two numbers. It solves that operation and will save the solution in a variable
		display.value = solucion;		//	we will show the solution of that operation in the screen
		x = solucion;					//	we will save the solution in case of sequential operations
		result.value = x;				//	save the "result" variable in the form
		op = "no";						//	there isn't any other operation to do
		xi = 1;							//	the screen can be restarted
		submit.disabled = false;		//	the submit button will be enabled
	}

	//	All operation buttons will turn to initial background color	
	suma.style.backgroundColor = '#000000';
	resta.style.backgroundColor = '#000000';
	producto.style.backgroundColor = '#000000';
	cociente.style.backgroundColor = '#000000';
}

//	Function that will delete the last written number
function borrarUltimo(){
	digitos = x.length;					//	get the string information
	br = x.substr(digitos-1, digitos);	//	get the deleted digit to ensure if it was a coma or a digit
	x = x.substr(0, digitos-1);			//	save the number without the last deleted digit
	
	if(x == ""){						//	if the textarea has been void, i.e, if the last shown digit in the screen was deleted
		x = "0";						//	we show the 0 digit in the screen
	}
	if(br == "."){						//	if the deleted digit was a coma
		coma = 0;						//	we come back to allow to write the coma
	}
	
	display.value = x;					//	finally display the number after deleting the last digit
}

//	Function that will clean the screen, i.e, all digits will be deleted
function limpiar(){
	x = "0";							//	we update to 0 value and will be shown in the screen
	coma = 0;							//	the coma state is restarted
	ni = 0;								//	the hidden number or the first saved number is deleted
	op = "no";							//	the current operation is deleted
	display.value = x;					//	the 0 value is displayed in the screen
	
	//	All operation buttons will turn to initial background color
	suma.style.backgroundColor = '#000000';
	resta.style.backgroundColor = '#000000';
	producto.style.backgroundColor = '#000000';
	cociente.style.backgroundColor = '#000000';
	
	//	All value fields will become empty and the submit button will be disabled
	valor_a.value = "";
	valor_b.value = "";
	operacion.value = "";
	result.value = "";
	submit.disabled = true;
}
