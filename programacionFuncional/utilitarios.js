/*recuperarTexto=function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorComponente=componente.value;
    return valorComponente;
}*/

//ARROW function

recuperarTexto=(idComponente)=>{
    let componente = document.getElementById(idComponente);
    let valorComponente=componente.value;
    return valorComponente;
}

recuperarEntero=(idComponente)=>{
    let valorTexto=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}

recuperarFlotante=(idComponente)=>{
    let valorTexto=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorTexto);
    return valorFlotante
}