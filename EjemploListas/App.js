import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

let personas = [
  { nombre: 'Thor', apellido: 'Ape', cedula: '12345678999' },
  { nombre: 'Thor2', apellido: 'Ape1', cedula: '22345678999' },
  { nombre: 'Thor3', apellido: 'Ape2', cedula: '33345678999' }
];
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Personas</Text>
      <FlatList style={styles.lista}
        data={personas}
        renderItem={(elemento) => {
          return <View style={styles.itemPersona}>
            <Text style={styles.textoPrincipal}>{elemento.index}{elemento.item.nombre}
              {elemento.item.apellido} </Text>
            <Text style={styles.textoSecundario}>{elemento.item.cedula}</Text>
          </View>
        }
      }
      keyExtractor={(item)=>{
        return item.cedula;
      }}
      />
      < StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems:'stretch',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  lista:{
    //backgroundColor:'lightpink',
  },
  itemPersona:{
    backgroundColor:'lightgreen',
    marginBottom:10,
    padding:10,
  },
  textoPrincipal:{
    fontSize:20,
  },
  textoSecundario:{
    fontStyle:'italic',
    fontSize:16,
  }
});
