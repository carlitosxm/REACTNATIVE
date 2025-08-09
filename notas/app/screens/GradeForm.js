import { Text,View,StyleSheet } from "react-native"
import { Button,Input } from "@rneui/base";
import { useState } from "react";
import {saveGrade,updateGrade} from '../services/GradeServices'

export const GradeForm=({navigation,route})=>{

  let isNew=true;

  let subjectR;
  let gradeR;

  if(route.params.notita!=null){
    isNew=false;
  }

  if(!isNew){
    subjectR=route.params.notita.subject;
    gradeR=route.params.notita.grade;
  }

  const [subject,setSubjet]=useState(subjectR); 
  const [grade,setGrade]=useState(gradeR==null?null:gradeR+""); 
  const [errorSubject,setErrorSubjet]=useState();
  const [errorGrade,setErrorGrade]=useState();
  const hasError=false;
  
  const save=()=>{
    setErrorGrade(null);
    setErrorSubjet(null);
    validate();
    if(!hasError){
      if(isNew){
        saveGrade({subject:subject,grade:grade});
      }else{
        updateGrade({subject:subject,grade:grade});
      }
    navigation.navigate("ListGrandesNavs");
    route.params.fnRefresh();
    }
  }

  const validate=()=>{
    if(subject==null || subject==''){
      setErrorSubjet('debeingresar una materia');
      hasError=true;
    }
    let gradeFloat=parseFloat(grade);
    if(grade==null || isNaN(gradeFloat) ||  gradeFloat<0 || gradeFloat>11 ){
      setErrorGrade('debeingresar una nota entre 0 y 10');
      hasError=true;
    }
  }
    return <View style={styles.container}>
        <Input
        value={subject}
        onChangeText={setSubjet}
        label='Materia'
        placeholder="Ejjemplo: mate"
        errorMessage={errorSubject}
        disabled={!isNew}
        ></Input>

        <Input
        value={grade}
        onChangeText={setGrade}
        label='Nota'
        placeholder="0-10"
        errorMessage={errorGrade}
        ></Input>
        <Button
        title='Guardar'
        icon={{
          name:"save",
          type:"entypo",
          color:"white"
        }}
        buttonStyle={styles.saveButton}
        onPress={save}
        ></Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveButton:{
      backgroundColor:'green'
    },
  });
  