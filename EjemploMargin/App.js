import { StatusBar } from 'expo-status-bar';
import { Button,TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre,setNombre]=useState();
  const [apellido,setApellido]=useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO</Text>
      <TextInput
      style={styles.caja}
      value={nombre} onChangeText={setNombre} placeholder='Ingrese su nombre'></TextInput>
      <TextInput
      style={styles.caja}
      value={apellido} onChangeText={setApellido} placeholder='Ingrese su apellido'></TextInput>
      <Button title='OK'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent:'center',//verticak
    alignItems:'stretch',//horizontal
    paddingHorizontal:10
  },
  caja:{
    borderColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:10,
  },
  titulo:{
    fontSize:15,
    marginBottom:10,
    fontWeight:'bold',
  }
});
