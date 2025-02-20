import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({text}) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemtext}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    ) 
}

const styles= StyleSheet.create({
item:{
    backgroundColor: '#FFF',
    padding:15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
},
itemleft:{
    flexDirection:'row',
    alignItems: 'center',
    flexWrap:'wrap',
},
square:{
    width: 24,
    height:24,
    backgroundColor:'#55BCF666',
    opacity: 0.4,
    marginRight: 15,
    borderRadius:5,
},
itemtext:{
    fontFamily: 'bold',
    maxWidth: '80%',
},
circular:{
    width: 24,
    height:24,
    borderWidth: 5,
    borderColor:'#55BCF6',
    borderRadius:8,
},
})


export default Task;