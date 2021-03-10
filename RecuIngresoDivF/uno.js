
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir;



	let acumqa = 0;
	let contqa = 0;
	let acumProgramador = 0;
	let contProgramador = 0;
	let acumAnalista = 0;
	let contAnalista = 0;
	let promedioprogramador = 0;
	let promedioqa = 0;
	let promedioAnalista = 0;

    let nombreMayorSueldo;
	let flagMayorSueldo = 1;


	let mayorSueldo;
	let sexoMayorSueldo;
	let contProgramadorNoBinario = 0;
	
	let flagMujerMayorSueldo = 1;
	let mayorSueldoF;
	
	
	//pido datos
	do {
	  nombre=prompt("ingrese nombre: ");
	  edad = parseInt(prompt("ingrese edad (entre 18 y 100): "))
	  while (isNaN(edad) || edad < 18 || edad >100){
		edad = parseInt(prompt("Error. ingrese edad (entre 18 y 100): "));
	  }

	  sexo = prompt("ingrese sexo para masculino 'm',  femenino  'f' y para no binario 'n' : ").toLowerCase();
	  while (sexo != "f" && sexo != "m" && sexo !="n"){
		sexo = prompt("Error, sexo invalido. Ingrese sexo (m para masculino, f para femenino y n para no binario): ").toLowerCase();
	  }
	  puesto= prompt("ingrese puesto de trabajo (programador, analista, qa): ").toLowerCase();
	  while (!(puesto == "programador" || puesto == "analista" || puesto == "qa")) {
		puesto= prompt("Error, Puesto incorrecto. Ingrese puesto de trabajo (programador, analista, qa): ").toLowerCase();
	  }
	  sueldo = parseInt(prompt("ingrese el sueldo entre 15000 y 7000): "));
	  while (sueldo < 15000 || sueldo > 70000){
		sueldo = parseInt(prompt("sueldo incorrecto, ingrese el sueldo entre 15000 y 70000: "));	
	  }
	

        //acumuladores y contadores de puestos: 

	  switch (puesto){
	
		case "analista":
		  acumAnalista += sueldo;
		  contAnalista++;
		  break;

		case "programador":
		  acumProgramador += sueldo;
		  contProgramador++;
		  break;


		case "qa":
		  acumqa += sueldo;
		  contqa++;
		  break;
	
	  }
	
	  
	  //sexo que tiene mayor sueldo
	  
	  if(flagMayorSueldo || sueldo > mayorSueldo){
		mayorSueldo = sueldo;
		sexoMayorSueldo = sexo;
		flagMayorSueldo = 0;
	  }
	  
	  // Contador de no binarios con sueldo entre 20000 y 55000
	
	  if(sexo == 'no binario' && puesto == 'programador' && (sueldo <= 55000 && sueldo >= 20000)){
		contprogramadorNobinario ++;
	}

 
	  //empleado femenino con mayor sueldo
	
	  if (sexo == "f" && (flagMujerMayorSueldo || mayorSueldo < sueldo)){
		mayorSueldoF = sueldo;
		nombreMayorSueldo = nombre
		flagMujerMayorSueldo = 0;
	
	  }
	  
	  
	  
	  
	  
	  
	  
	  seguir= prompt("quiere continuar ? s/n: ")
	} while (seguir == "s");
	
	
	//A ) promedio de cada puesto


	if(contqa != 0){
	  promedioqa = acumqa / contqa;
	
	}
	if (contProgramador != 0){
	  promedioprogramador = acumProgramador / contProgramador;
	
	}
	if (contAnalista !=0 ){
	  promedioAnalista = acumAnalista / contAnalista;
	}
	
	
	console.log("El promedio de sueldo de programadores es: " + promedioprogramador + ", el promedio de sueldo de analistas es: " + promedioAnalista + ", el promedio de sueldo de qa es: " + promedioqa);
	
	console.log("El sexo que percibe mayor sueldo es: " + sexoMayorSueldo );
	
	
	
	if (flagMujerMayorSueldo == 0){
	  console.log("El nombre del empleado femenino con mayor sueldo es: " + nombreMayorSueldo);
	
	}else {
	  console.log(" No se ingresaron empleados femeninos ");
	}
	
	if (contProgramadorNoBinario != 0){
	
	  console.log(" La cantidad de programadores no binarios que cobran entre 20000 y 55000 es  : " + contProgramadorNoBinario );
	}else{
	  console.log(" No se ingresaron programadores no binarios con sueldos entre 20000 y 55000");
	}
}