 ejecutarOperacion=(operar)=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultado;
    resultado=operar(valor1,valor2);
    console.log(resultado);
 }

sumar=(sum1,sum2)=>{
    let resultado=sum1+sum2;
    return resultado;
}

resta=(val1,val2)=>{
    return val1-val2;
}

ejecutar=(fn)=>{
    console.log("estoy ejecutando funcion");
    fn();
}

imprimir=()=>{
    console.log("estoy imprimiendo");
}

saludar=()=>{
    alert("aprediendo programacion funcional");
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("soy funcion sin nombre");
    })
}

