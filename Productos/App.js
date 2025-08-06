import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

let productos = [
  { codigo: 101, nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45 },
  { codigo: 102, nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25 },
  { codigo: 103, nombre: "CocaCola", categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.75 },
  { codigo: 104, nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.60 },
  { codigo: 105, nombre: "Chicles Trident", categoria: "Golosinas", precioCompra: 0.15, precioVenta: 0.25 }
];

let esNuevo = true;
let indiceSeleccionado = -1;//almacena el indice del elemento seleccioando para edidcion

export default function App() {
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [precioCompra, setPrecioCompra] = useState();
  const [precioVenta, setPrecioVenta] = useState();
  const [numElementos, setNumElemnetos] = useState(productos.length);

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].codigo == codigo) {
        return true;
      }
    }
    return false;
  }

  let guardarProducto = () => {
    if (!codigo || !nombre || !categoria || !precioCompra || !precioVenta ) {
      Alert.alert("Campos obligatorios", "Por favor, complete todos los campos.");
      return;
    }
    if (esNuevo) {
      if (existeProducto()) {
        Alert.alert("INFO", "Ya existe el codigo de producto " + codigo);
      } else {
        let producto = { codigo: codigo, nombre: nombre, categoria: categoria, precioCompra: precioCompra, precioVenta: precioVenta };
        productos.push(producto);
        setCodigo(null);
        limpiar();
        setNumElemnetos(productos.length);
      }
    } else {
      productos[indiceSeleccionado].codigo = codigo;
      productos[indiceSeleccionado].nombre = nombre;
      productos[indiceSeleccionado].categoria = categoria;
      productos[indiceSeleccionado].precioCompra = precioCompra;
      productos[indiceSeleccionado].precioVenta = precioVenta;
    }
    limpiar();
  }
  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setPrecioCompra(null);
    setPrecioVenta(null);
    esNuevo = true;
  }
  let ItemProducto = (props) => {
    return <View style={styles.producto}>
      <View style={styles.codigo}>
        <Text>{props.producto.codigo}</Text>
      </View>
      <View style={styles.dproducto}>
        <Text>{props.producto.nombre}</Text>
        <Text>{props.producto.categoria}</Text>
      </View>
      <View style={styles.dventa}>
        <Text>{props.producto.precioVenta}</Text>
      </View>
      <View style={styles.dbotones}>
        <Button
          title=' E '
          color='green'
          onPress={() => {
            indiceSeleccionado = props.indice
            setCodigo(String(props.producto.codigo));
            setNombre(props.producto.nombre);
            setCategoria(props.producto.categoria);
            setPrecioCompra(String(props.producto.precioCompra));
            setPrecioVenta(String(props.producto.precioVenta));
            esNuevo = false;
          }} />
        <Button
          title=' X '
          color='red'
          onPress={() => {
            indiceSeleccionado = props.indice;
            productos.splice(indiceSeleccionado, 1);
            setNumElemnetos(productos.length);
          }} />
      </View>
    </View>
  }
  
  return (
    <View style={styles.container}>


      <View style={styles.cabecera}>
        <ScrollView>
          <Text style={styles.txtCab}>PRODUCTOS</Text>
          <TextInput style={styles.caja} value={codigo} placeholder='Codigo de producto'
            onChangeText={setCodigo} editable={esNuevo}></TextInput>
          <TextInput style={styles.caja} value={nombre} placeholder='Nombre de producto'
            onChangeText={setNombre}></TextInput>
          <TextInput style={styles.caja} value={categoria} placeholder='Categoria de producto'
            onChangeText={setCategoria}></TextInput>
          <TextInput style={styles.caja} value={precioCompra} placeholder='Precio de compra de producto'
            onChangeText={(txt) => {
              setPrecioCompra(txt)
              let pVenta = parseFloat(txt) * 1.20;
              setPrecioVenta(pVenta.toFixed(2))
            }}></TextInput>
          <TextInput style={styles.caja} value={precioVenta} placeholder='Precio de venta de producto'
            onChangeText={setPrecioVenta} editable={false}></TextInput>
          <View style={styles.botones}>
            <Button title='GUARGAR' onPress={guardarProducto}/>
            <Button title='NUEVO' onPress={limpiar}/>
            <Text>Cantidad de productos: {numElementos}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.cuerpo}>
        <FlatList style={styles.c3}
          data={productos}
          renderItem={(elemento) => {
            return <ItemProducto indice={elemento.index} producto={elemento.item} />
          }}
          keyExtractor={(item) => {
            return item.codigo;
          }}
        />
      </View>
      <View style={styles.pie}>
        <Text>CREADO POR : CARLOS TIPAN</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 45,
  },
  cabecera: {
    flex: 15,
    justifyContent: 'center',
    padding: 15
  },
  txtCab: {
    fontSize: 15,
    paddingBottom: 6
  },
  caja: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cuerpo: {
    flex: 25
  },
  producto: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: "skyblue",
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  codigo: {
    flex: 2
  },
  dproducto: {
    flex: 5
  },
  dventa: {
    flex: 2
  },
  dbotones: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //paddingHorizontal:10
  },
  titulo: {
    fontSize: 15
  },
  valor: {
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  pie: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
