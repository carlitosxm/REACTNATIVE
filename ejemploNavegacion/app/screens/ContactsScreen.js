import { Button,StyleSheet, Text, View } from 'react-native';

export const Contacs=({navigation})=>{
    return <View style={styles.container}>
        <Text>ESTOY EN CONTACS</Text>
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
  