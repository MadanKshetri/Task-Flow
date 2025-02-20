import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native'
import React,{useState}from 'react'
import Task from './Components/Task';

const index = () => {
const[task, setTask]= useState();
const[taskItem, setTaskItem]= useState([]);

const handleAddTask = ()=>{
  Keyboard.dismiss();
  setTaskItem([...taskItem, task]);
  setTask(null);
}
const completeTask = (index) => {
  let itemsCopy = [...taskItem];
  itemsCopy.splice(index, 1); 
  setTaskItem(itemsCopy); 
};


  return (
    <View style={styles.container}>

      {/* Today's tasks */}
      <View style={styles.TasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.item}>
       {/* this is where the task will go */}
      {taskItem.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
           <Task  text={item} />
        </TouchableOpacity>
       
      ))}
        </View>

        </View>


        {/* Write a Task */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
       <TextInput 
      style={styles.input}
      placeholder={"Enter your task here"} 
      value={task}
      onChangeText={text => setTask(text)} />


       <TouchableOpacity onPress={()=> handleAddTask()}>
       <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
       </View>
       </TouchableOpacity>
       </KeyboardAvoidingView>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED'
  },
 
  TasksWrapper:{
paddingTop: 100,
paddingHorizontal: 20,
  },

sectionTitle:{
fontSize:24,
fontWeight:'bold'
},

item:{
margin:30,
},

writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical:5,
  paddingHorizontal:6,
  borderRadius:2,
},
input:{
  paddingVertical: 15,
  paddingHorizontal:15,
  backgroundColor:'#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width:250,
},

addWrapper:{
  height:60,
  width:60,
  backgroundColor:'#FFF',
  borderRadius:60,
  justifyContent: 'center',
  alignItems:'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
  
},
addText:{},

})