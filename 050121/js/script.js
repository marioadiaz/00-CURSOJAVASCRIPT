    var saludo = "Hola ";
    var nombre = prompt ("Ingresa tu nombre");
  	window.alert(saludo + nombre);


  	var edad = prompt("Ingrese un nro del 2 al 10");
  	edad= Number(edad);
  	edad = edad*2;
  	edad = edad+5;
  	edad = edad*50;
	var anio = prompt("Ya paso tu cumpleaños? si es asi ingresa 1771, caso contrario 1770");
  	
  	anio = Number(anio);

  	edad = edad + anio;

  	var nacimiento = prompt("Ingrese tu año de nacimiento");

  	nacimiento = Number(nacimiento);

  	edad = edad - nacimiento;	
 	
 	//window.alert(edad);

	edad = edad/100;

	var numoriginal = Math.trunc(edad);

	var edad = (edad - numoriginal)*100;
	
	//window.alert(numoriginal);
	
	
	edad = Math.trunc(edad);

	//window.alert(edad);

 	document.write("el numero que ingresaste es " + numoriginal + " y tu edad es " + edad );