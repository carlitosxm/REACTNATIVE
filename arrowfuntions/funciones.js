ejecutarSumar=()=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("valor1 "+valor1+"calor 2"+valor2);

    resultadoSuma=sumar(valor1,valor2);
    console.log(resultadoSuma);
}

sumar=(sum1,sum2)=>{
    let resultado=sum1+sum2;
    return resultado;
}

ejecutarResta=()=>{
   let val1=recuperarFlotante("txtValor1");
   let val2=recuperarFlotante("txtValor2");
   console.log(resta(val1,val2)); 
}

resta=(val1,val2)=>{
    return val1-val2;
}