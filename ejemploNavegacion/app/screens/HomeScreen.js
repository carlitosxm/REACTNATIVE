import {Button, View,Text,StyleSheet} from 'react-native'

export const Home=({navigation})=>{
    return <View style={styles.container}>
        <View style={styles.grupo}>
        <Text>Home</Text>
        </View>
        <View style={styles.botoner}>
        <Button title='Contactos'
        onPress={()=>{
            navigation.navigate('ContacsNav');
        }} />
        <Button title='Productos'
        onPress={()=>{
            navigation.navigate('ProductsNav');
        }} />
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center',
    },
    grupo:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    botoner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-start',
        width:250,
    },
  });
  