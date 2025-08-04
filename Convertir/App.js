import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dolar,setDolar]=useState("0000");
  const [pesosm,setPesosm]=useState("");
  const [pesosc,setPesosc]=useState("");
  const [euros,setEuros]=useState("");
  const calcularPM=()=>{
    setPesosm(18.86*parseFloat(dolar));
  }
  const calcularPC=()=>{
    setPesosc(4127.89*parseFloat(dolar));
  }
  const calcularE=()=>{
    setEuros(0.86*parseFloat(dolar));
  }
  const ejecutarCambio=()=>{
    calcularPM();
    calcularPC();
    calcularE();
  }
  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR</Text>
      <Text>INGRESE EL VALOR EN DOLARES</Text>
      <TextInput value={dolar} onChangeText={(txt)=>{
        setDolar(txt);
      }}></TextInput>
      <Button title='CAMBIO DE MONEDA' onPress={ejecutarCambio}/>
      <Text>El cambio a pesos meximanos es: {pesosm}</Text>
      <Text>El cambio a pesos colombianos es: {pesosc}</Text>
      <Text>El cambio a euros es: {euros}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
