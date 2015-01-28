"use strict";

const calculadora=require("./modules/calculadoraModule.js"),
      validaciones=require("./modules/validacionesModule.js");

let opcion=process.argv[2],
    a=process.argv[3],
    b=process.argv[4],
    opciones=["--sumar","--restar","-multiplicar","--dividir","--help"];
    

function help()
{
  console.log("uso: ");
  console.log("node -- harmony calculadora.js --<opcion> a b");
  console.log("Opciones: sumar, restar, multiplicar, dividir.");
  console.log("a y b deben ser valores numericos");
} 
//console.dir(process.argv);

//fail-fast fail-safe
if(!validaciones.validarOpcion(opciones,opcion))
{
    help();
    return;//el programa se acaba aqui,hiciste esto mal, vuevelo a hacer.
}


if(opcion!=="--help")
{
	if(!validaciones.validarNumero(a)||!validaciones.validarNumero(b))
	{
	    help();
   	 return;
	}
}


switch(opcion)
{
  case "--sumar":
    var total = calculadora.sumar(a, b);
    console.log(total);
    break;
  case "--restar":
    var total = calculadora.restar(a, b);
    console.log(total);
    break;
  case "--multiplicar":
    var total = calculadora.multiplicar(a, b);
    console.log(total);
    break;
  case "--dividir":
    var total = calculadora.dividir(a, b);
    console.log(total);
    break;
  case "--help":
    help();
    break;

}
