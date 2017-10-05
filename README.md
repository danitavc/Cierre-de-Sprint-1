#  Cifrando y descifrando con el código César
____
###### By Daniela Valero Calles

###Descripcion

##### Se creó una web que al abrirse, tuviera dos botones, para que el usuario decida qué actividad desea hacer, cifrar o descifrar. Después, por medio de un prompt(), se le pida ingresar una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha, o si desea, ingresar el mensaje encriptado, para ser desencriptado nuevamente.

###Pasos a seguir

1. Genero un prompt para ingresar el valor a cifrar este se gatilla presionando el boton en el html
2. Convierto todas las letras ingresadas en el prompt a mayúsculas (Este paso se realiza para que tanto las letras ingresadas mayúsculas como minúsculas, me devuelvan el mismo valor cifrado o descifrado de la letra.)
3. Calculo el largo del texto ingresado en el prompt y se lo asigno a una variable que llamé longTxt
4. Defino mi parámetro de referencia
	var parRef = 33;
5. Creo un array vacío en donde iré colocando cada letra cifrada llamado txtCifrado
6. Genero un ciclo for que recorrerá mi string y cifrará cada letra para luego insertarla dentro del array txtCifrado
7. Cifro la letra convertida a ASCII mediante algortimo de cifrado César
 ((txtCifrar[i].charCodeAt() - 65 + 33) %26 + 65);
8. Convierto letra en ASCII a normal
9. Inserto mediante push la letra en array txtCifrado
10. Uso .join para unir mis elementos del array
11. Uso alert para mostrar mi resultado
12. Repito los pasos desde el 1 hasta el 12, para decifrar, pero cambio la formula en el paso 7 para obtener el codigo descifrado 
((txtCifrar[i].charCodeAt() - 65 - 7 + 52) %26 + 65);

## Diagrama

![](https://image.ibb.co/eVTFyw/diagrama_Cesar_Page_1.jpg)
# Cierre-de-Sprint-1
