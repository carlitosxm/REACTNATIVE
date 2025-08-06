import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: 'Thor', apellido: 'Ape', cedula: '12345678999' },
  { nombre: 'Thor2', apellido: 'Ape1', cedula: '22345678999' },
  { nombre: 'Thor3', apellido: 'Ape2', cedula: '33345678999' }
];

let esNuevo = true;
let indiceSeleccionado = -1;//almacena el indice del elemento seleccioando para edidcion

export default function App() {
  const [txtcedula, setTxtCedula] = useState();
  const [txtnombre, setTxtNombre] = useState();
  const [txtapellido, setTxtApellido] = useState();
  const [numElementos, setNumElemnetos] = useState(personas.length);

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtcedula) {
        return true;
      }
    }
    return false;
  }

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Ya existe la persona con cedula " + txtcedula);
      } else {
        let persona = { nombre: txtnombre, apellido: txtapellido, cedula: txtcedula };
        personas.push(persona);
        //console.log("PERSONAS ",personas);
        setTxtCedula(null);
        limpiar();
        setNumElemnetos(personas.length)
      }
    } else {
      personas[indiceSeleccionado].nombre = txtnombre;
      personas[indiceSeleccionado].apellido = txtapellido;
    }
    limpiar();
  }

  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text style={styles.textoPrincipal}>{props.indice}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.persona.nombre} {props.persona.apellido} </Text>
          <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=' E '
            color='green'
            onPress={() => {
              indiceSeleccionado = props.indice
              setTxtCedula(props.persona.cedula);
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido);
              esNuevo = false;
            }} />
          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = props.indice;
              personas.splice(indiceSeleccionado, 1);
              setNumElemnetos(personas.length);
            }} />

        </View>
      </View>);
  }

  let limpiar = () => {
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>Personas</Text>
        <TextInput style={styles.txt} value={txtcedula}
          placeholder="ingrese su cedula"
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo} />
        <TextInput style={styles.txt} value={txtnombre}
          placeholder="ingrese su nombre"
          onChangeText={setTxtNombre} />
        <TextInput style={styles.txt} value={txtapellido}
          placeholder="ingrese su apellido"
          onChangeText={setTxtApellido} />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Numero de elentos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          data={personas}
          renderItem={(elemento) => {
            return <ItemPersona indice={elemento.index} persona={elemento.item} />
          }
          }
          keyExtractor={(item) => {
            return item.cedula;
          }}
        />
        < StatusBar style="auto" />
      </View >
      <View style={styles.areaPie}>
        <Text>AUTOR: CARLOS TIPAN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  lista: {
    //backgroundColor:'lightpink',
  },
  itemPersona: {
    backgroundColor: 'lightgreen',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },
  textoPrincipal: {
    fontSize: 20,
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  areaCabecera: {
    flex: 4,
    //sbackgroundColor: 'chartreuse',
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral',

  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemIndice: {
    //backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  itemContenido: {
    //backgroundColor: 'cornflowerblue',
    flex: 9,
    paddingLeft: 10
  },
  itemBotones: {
    //backgroundColor:'gray',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    borderWidth: 1,
    borderColor: "gray",
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  }
});
