recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    frutas.push("banana");
    return frutas;
}

testRecuoerar=()=>{
    let misFrutas=recuperar();
    let frutaPrimera = misFrutas[0];
    let otraFruta=misFrutas[1];

    console.log("1 "+frutaPrimera);
    console.log("2 "+otraFruta);
}

testRecuperarDes=()=>{
    let [frutaPrimera,frutasegunda,frutaTercera] =recuperar();
    console.log("1 "+frutaPrimera);
    console.log("2 "+frutasegunda);
    console.log("3 "+frutaTercera);
}