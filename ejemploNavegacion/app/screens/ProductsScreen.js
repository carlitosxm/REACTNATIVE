import { Button,StyleSheet, Text, View } from 'react-native';

export const Products=({navigation})=>{
    return <View style={styles.container}>
        <Text>ESTOY EN PRODUCTOS</Text>
        <Button title='IR A HOME'  
            onPress={()=>{
                navigation.navigate('HomeNav');
        }}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center',
    },
  });
  