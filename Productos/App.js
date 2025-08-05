import { StatusBar } from 'expo-status-bar';
import { FlatList,StyleSheet, Text, View } from 'react-native';


let productos=[
  {nombre:"Doritos",categoria:"Snacks",precioCompra:0.40,precioVenta:0.45,id:100},
  {nombre:"Manicho",categoria:"Golosinas",precioCompra:0.20,precioVenta:0.25,id:101},
  {nombre: "CocaCola", categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.75, id: 102},
  {nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.60, id: 103},
  {nombre: "Chicles Trident", categoria: "Golosinas", precioCompra: 0.15, precioVenta: 0.25, id: 104}  
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
      <Text>PRODUCTOS</Text>
      </View>
      <FlatList style={styles.c3} 
        data={productos}
        renderItem={(elemento)=>{
          return <View style={styles.c2}>
            <Text style={styles.titulo}>{elemento.item.nombre} ({elemento.item.categoria})</Text>
            <Text style={styles.valor}>USD {elemento.item.precioVenta}</Text>
          </View>
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:45,
  },
  c1:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  c2:{
    backgroundColor:'lightblue',
    marginBottom:15,
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderColor:'gray',
    borderWidth:1
  },
  c3:{
    paddingHorizontal:10,
  },
  titulo:{
    fontSize:15
  },
  valor:{
    color:'black',
    fontStyle:'italic',
    fontWeight: 'bold',
  },
});
