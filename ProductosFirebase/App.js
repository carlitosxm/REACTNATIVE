import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {ListarProductos} from './app/screens/ListarProductos'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ContenidoA} from './app/screens/ContenidoA'
import {ContenidoB} from './app/screens/ContenidoB'
import {Icon} from '@rneui/base'

const Stack=createNativeStackNavigator();
const loginStack=createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab=createBottomTabNavigator();
let login = true;


const TabNav=()=>{
  return(
  <Tab.Navigator>
    <Tab.Screen
    name='TabContenidoA'
    component={ContenidoA}
    options={{
      headerShown:false,
      tabBarLabel:"Configuracion",
      tabBarIcon:(size,tintColor)=>{
        <Icon name="tool" size={size} color={tintColor} type="ant-design"/>
      }
    }}
    />
    <Tab.Screen
    name='TabContenidoB'
    component={ContenidoB}
    options={{
      headerShown:false,
      tabBarLabel:"Acerca De",
      tabBarIcon:(size,tintColor)=>{
        <Icon name="user" size={size} color={tintColor} type="ant-design"/>
      }
    }}
    />
  </Tab.Navigator>)
}
const DrawerNav=()=>{
  return<Drawer.Navigator>
    <Drawer.Screen
    name='DrawerProductosNav'
    component={ListarProductos}
    options={{
      title : "Productos",
    }}
    ></Drawer.Screen>
    <Drawer.Screen
    name='DrawerEjemploTabs'
    component={TabNav}
    options={{
      title : "Ejemplo Tabs",
    }}
    ></Drawer.Screen>
    <Drawer.Screen
    name='DrawerFinSesion'
    component={ListarProductos}
    options={{
      title : "Finalizar Sesion",
    }}
    ></Drawer.Screen>
  </Drawer.Navigator>
}


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav></DrawerNav>
    </NavigationContainer>
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
