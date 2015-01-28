"use strict";
const calculadoraModule = require("./../modules/calculadoraModule.js");
exports.testSumar = function(test)
{
  test.expect(1);
//arranged 
  var a=3;
  var b=4;
//act
  var prueba1 = calculadoraModule.sumar(a,b);
//aset
  test.equal(prueba1, 7, "sumando 3 mas 4");
  test.done(); 
}

exports.testRestar = function(test)
{
  test.expect(1);
 //arranged 
  var a=3;
  var b=4;
 //act= actuar
  var prueba1 = calculadoraModule.restar(a,b);
//asert
  test.equal(prueba1, -1, "restando 3 menos 4");
  test.done();
}

exports.testMultiplicar = function(test)
{
  test.expect(1);
//arranged 
  var a=3;
  var b=4;
//act
  var prueba1 = calculadoraModule.multiplicar(a,b);
//aset
  test.equal(prueba1, 12, "multiplicando 3 por 4");
  test.done();
}

exports.testDividir = function(test)
{
  test.expect(1);
 //arranged 
  var a=3;
  var b=4;
//act
  var prueba1 = calculadoraModule.dividir(a,b);
//asert
   test.equal(prueba1, .75, "dividiendo 3 entre 4");
   test.done();
}

