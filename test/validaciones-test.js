"use strict";
const validador=require("./../modules/validacionesModule.js");

exports.opcionPresenteEnElArray=function(test)
{
	test.expect(1);
	//arrange
	let opciones=["uno","dos","tres"],
	    opcionSeleccionada="dos";
	//act
	let resultado=validador.validarOpcion(opciones,opcionSeleccionada);
	//asert
	test.equal(resultado, true);
	test.done();
}

exports.opcionNoPresenteEnElArray=function(test)
{
	test.expect(1);
	//arrange
	let opciones=["modulo","raiz","expo"],
	    opcionSeleccionada="divi";
	//act
	let probar=validador.validarOpcion(opciones,opcionSeleccionada);
	//assert
	test.equal(probar,false);
	test.done();
}

exports.numeroValido=function(test)
{
        test.expect(1); 
        //arrange
        let num=5;   
        //act
        let probar=validador.validarNumero(num);
        //assert
        test.equal(probar,true);
        test.done();
}

exports.numeroIsNaN=function(test)
{
        test.expect(1);
        //arrange
        let num="A";  
        //act
        let probar=validador.validarNumero(num);
        //assert
        test.equal(probar,false);
        test.done();

}
