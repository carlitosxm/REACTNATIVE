import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View } from 'react-native';
import { Button,Icon,Input  } from '@rneui/base';
import { useState } from 'react';

export default function App() {
  const [name,setName] =useState()

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input value={name}
      onChangeText={setName}
      placeholder='ongrese su nombre'
      label='nombre' />
      <Text>{name}</Text>
      <Button 
      title='ok'
      icon={{
        name: 'home',
        type: 'font-awesome',
        size: 15,
        color: 'white',
      }}
      onPress={()=>{
        Alert.alert("Info","Su nombre es "+name)
      }}
      />
      
      <Button 
      title='ok'
      icon={{
        name: 'plancast',
        type: 'zocial',
        size: 20,
        color: 'white',
      }}
      />
      <Icon 
      name='cloud-outline'
      type='ionicon'
      color='black'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
