function cipher(){
	//genero un prompt para ingresar el valor a cifrar este se gatilla presionando el boton en el html
	var txtCifrar = prompt('Ingresa el texto a cifrar, sólo ingresar letras.');
	//convierto todas las letras ingresadas en el prompt a mayúsculas
	txtCifrar = txtCifrar.toUpperCase();
	//calculo el largo del texto ingresado en el prompt y se lo asigno a la variable longTxt
	var longTxt = txtCifrar.length;
	//defino mi parámetro de referencia
	var parRef = 33;
	//creo un array vacío en donde iré colocando cada letra cifrada
	var txtCifrado =[];
	//genero un ciclo for que recorrerá mi string y cifrará cada letra para luego insertarla dentro del array txtCifrado
	for (var i = 0; i < longTxt; i++) {1
		//cifro la letra convertida a ASCII mediante algortimo de cifrado César
		var letraCifrada = ((txtCifrar[i].charCodeAt() - 65 + 33) %26 + 65);
		//convierto letra en ASCII a normal
		letraCifrada = String.fromCharCode(letraCifrada);
		//inserto mediante push la letra en array txtCifrado
		txtCifrado.push(letraCifrada);
	}
	//uso .join para unir mis elementos del array
	var txtFinal = txtCifrado.join("");
	//uso alert para mostrar mi resultado
	alert(txtFinal);
}

function decipher(){ 

	var txtDeCifrar = prompt('Ingresa el texto a descifrar, sólo ingresar letras.');
	txtCifrar = txtDeCifrar.toUpperCase();
	var longTxt = txtDeCifrar.length;
	var parRef = 33;

	var txtDeCifrado =[];

	for (var i = 0; i < longTxt; i++) {
		var letraDeCifrada = ((txtDeCifrar[i].charCodeAt() - 65 - 7 + 52) %26 + 65);
		letraDeCifrada = String.fromCharCode(letraDeCifrada);
		txtDeCifrado.push(letraDeCifrada);
	}
	
	var txtFinal = txtDeCifrado.join("");
	alert(txtFinal);
}