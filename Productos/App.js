import { StatusBar } from 'expo-status-bar';
import { Modal,TouchableHighlight, Alert, Button, TextInput, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);

  let mostrarModalEliminar = (indice) => {
    indiceSeleccionado = indice;
    setModalVisible(true);
  };

  let confirmarEliminacion = () => {
    productos.splice(indiceSeleccionado, 1);
    setNumElemnetos(productos.length);
    // setActualizar(a => !a); // Eliminado
    setModalVisible(false);
    limpiar();
  };

  let cancelarEliminacion = () => {
    setModalVisible(false);
  };

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
  let ItemProducto = ({indice,producto}) => {
    return <View style={styles.producto}>
      <View style={styles.codigo}>
        <Text>{producto.codigo}</Text>
      </View>
      <View style={styles.dproducto}>
        <Text>{producto.nombre}</Text>
        <Text>{producto.categoria}</Text>
      </View>
      <View style={styles.dventa}>
        <Text>{producto.precioVenta}</Text>
      </View>
      <View style={styles.dbotones}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#A5D6A7"
        style={{
          borderRadius: 5,
          padding: 6,
          backgroundColor: 'green',
          marginRight: 5,
        }}
        onPress={() => {
          indiceSeleccionado = indice
            setCodigo(String(producto.codigo));
            setNombre(producto.nombre);
            setCategoria(producto.categoria);
            setPrecioCompra(String(producto.precioCompra));
            setPrecioVenta(String(producto.precioVenta));
            esNuevo = false;
        }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}> E </Text>
      </TouchableHighlight>
        <Button
          title=' X '
          color='red'
          onPress={() => mostrarModalEliminar(indice)} />
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
          renderItem={({index,item}) => {
            return <ItemProducto indice={index} producto={item} />
          }}
          keyExtractor={item => item.codigo
          }
        />
      </View>
      <View style={styles.pie}>
        <Text>CREADO POR : CARLOS TIPAN</Text>
      </View>
      <StatusBar style="auto" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalMessage}>
              ¿Está seguro que quiere eliminar este producto?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableHighlight
                style={[styles.modalButton, styles.cancelButton]}
                onPress={cancelarEliminacion}
                underlayColor="#f0f0f0"
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.modalButton, styles.acceptButton]}
                onPress={confirmarEliminacion}
                underlayColor="#d32f2f"
              >
                <Text style={styles.acceptButtonText}>Aceptar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
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
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  acceptButton: {
    backgroundColor: '#f44336',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
