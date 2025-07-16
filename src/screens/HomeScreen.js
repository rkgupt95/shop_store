import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

const data=[
    {id:1,name:"Wheat",stock:5,unit:"kg"},
    {id:2,name:"Rice",stock:10,unit:"kg"},
    {id:3,name:"Sugar",stock:15,unit:"kg"},
    {id:4,name:"Pulse",stock:25,unit:"kg"},
    {id:5,name:"Tea",stock:18,unit:"kg"},
    {id:6,name:"Corn",stock:30,unit:"kg"},
    {id:7,name:"Soyabean",stock:50,unit:"kg"}
    
]

const HomeScreen = () => {
    const [view, setview] = useState(0)
    const [data, setdata] = useState([
    {id:1,name:"Wheat",stock:5,unit:"kg"},
    {id:2,name:"Rice",stock:10,unit:"kg"},
    {id:3,name:"Sugar",stock:15,unit:"kg"},
    {id:4,name:"Pulse",stock:25,unit:"kg"},
    {id:5,name:"Tea",stock:18,unit:"kg"},
    {id:6,name:"Corn",stock:30,unit:"kg"},
    {id:7,name:"Soyabean",stock:50,unit:"kg"}
    
])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:"#72C37AFF"}: null]} onPress={() => setview(0) }>
           <Text style={[styles.btnText, view === 0 ? {color:"white"}: null]}>All Items</Text> 
            </Pressable>
            <Pressable style={[styles.button, view === 1 ? {backgroundColor:"#72C37AFF"}: null]} onPress={() => setview(1) }>
           <Text style={[styles.btnText, view === 1 ? {color:"white"}: null]}>Low Stock</Text> 
            </Pressable>
            <Pressable style={[styles.button, view === 2 ? {backgroundColor:"#72C37AFF"}: null]} onPress={() => setview(2) }>
           <Text style={[styles.btnText, view === 2 ? {color:"white"}: null]}>Create</Text> 
            </Pressable>
      </View>

      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter((item)=> item.stock<20)}/>}
      {view === 2 && <CreateScreen data={data} setdata={setdata}/>}
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding: '4%',
        backgroundColor: '#ffffff'
    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        color: '#333',
        textAlign: "center",
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 28,
        marginVertical: 15,
    },
    button:{
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#72C37AFF",
    },
    btnText:{
        color:"green",
        fontSize: 16,
    }
})