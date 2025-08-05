import { StatusBar } from 'expo-status-bar';
import { Button, TextInput,StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [peso,setPeso]=useState();
  const [estatura,setEstatura]=useState();
  const [mensaje,setMensaje]=useState();
  let imc=0.00;
  let ec=parseFloat(estatura)/100;
  const calcular=()=>{
    imc=parseFloat((parseFloat(peso))/(parseFloat(ec)*parseFloat(ec)));
    if(imc<18.5){
      setMensaje('Su imc es '+imc+ ' su peso es inferior al normal');
    }else if (imc>=18.5 && imc<25) {
      setMensaje('Su imc es '+imc+ ' su peso es normal');
    } else if (imc>=25&&imc<30){
      setMensaje('Su imc es '+imc+ ' su peso superior al normal');
    } else {
      setMensaje('Su imc es '+imc+ ' tiene obesidad');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de ICM</Text>
      <TextInput placeholder='Ingrese su peso' style={styles.caja} onChangeText={(txt1)=>{
        setPeso(txt1)
      }}/>
      <TextInput placeholder='Ingrese su estatura en centimetros' style={styles.caja} onChangeText={(txt2)=>{
        setEstatura(txt2)
      }}/>
      <Button title='CALCULAR' style={styles.btn} onPress={calcular}/>
      <Text>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    paddingHorizontal:10,
  },
  caja:{
    paddingBottom:10,
    borderColor:'black',
    borderWidth:1,
    marginBottom:10,
  },
  titulo:{
    fontSize:15,
    color:'gray',
    marginBottom:10,
  }
});
