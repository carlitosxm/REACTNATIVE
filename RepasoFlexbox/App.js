import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>    
      <View style={styles.c1}>
        <Button title='X' color="#888"/>
        <Button title='Y' color="#888"/>
        <Button title='Z' color="#888"/>
      </View>
      <View style={styles.c2}>
      <View style={styles.c21}>
      <View style={styles.c211}>
      <Button title='BOTON 1' color="#888"/>
      <Button title='BOTON 2' color="#888"/>
      </View>
      <View style={styles.c212}>
      <Button title='OPERACION 1' color="#888"/>
      <Button title='OPERACION 2' color="#888"/>
      <Button title='OPERACION 3' color="#888"/>
      </View>
      </View>
      <View style={styles.c22}>
      <Button title='ACCION 1' color="#888"/>
      <Button title='ACCION 2' color="#888"/>
      </View>
      </View>
      <View style={styles.c3}>
      <Button title='BOTON FINAL' color="#888"/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  btn:{
    borderColor:'black',
    color:'#888'
  },
  c1:{
    flex:1,
    backgroundColor:'skyblue',
    justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row'
  },
  c2:{
    flex:6,
    backgroundColor:'green'
  },
  c21:{
    flex:4,
    backgroundColor:'pink',
    flexDirection:'row'
  },
  c211:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column',
    justifyContent:'space-evenly',
  },
  c212:{
    flex:1,
    backgroundColor:'white',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'flex-start'
  },
  c22:{
    flex:1,
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  c3:{
    flex:1,
    backgroundColor:'orange',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }

});
