import { Text,View,StyleSheet,FlatList,TouchableHighlight } from "react-native"
import {getGrades} from '../services/GradeServices'
import { Avatar,FAB, ListItem } from '@rneui/base';
import { useState } from "react";

export const ListGrades=({navigation})=>{
  const [time,setTime]=useState();
  const refresList=()=>{
    setTime(new Date().getTime());
  }
  const ItemGrade=({nota})=>{
    return <TouchableHighlight onPress={()=>{
      navigation.navigate("GradeFormNavs",{notita:nota,fnRefresh:refresList});

    }}>
    <ListItem bottomDivider>
      <Avatar title={nota.subject.substring(0,1)}
      containerStyle={{backgroundColor:'#6733b9'}}
      rounded ></Avatar>
      <ListItem.Content>
      <ListItem.Title>
        {nota.subject}
      </ListItem.Title>
      </ListItem.Content>
      <ListItem.Content>
      <ListItem.Subtitle>
        {nota.grade}
      </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron></ListItem.Chevron>
    </ListItem>
    </TouchableHighlight>
  }
    return <View style={styles.container}>
        <FlatList
          data={getGrades()}
          renderItem={({item})=>{
            return <ItemGrade nota={item}/>
          }}
          keyExtractor={(item) => {return item.subject}}
          extraData={time}
        />
        <FAB
        title='+'
        placement="right"
        onPress={()=>{
          navigation.navigate("GradeFormNavs",{notita:null,fnRefresh:refresList});
        }}></FAB>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });