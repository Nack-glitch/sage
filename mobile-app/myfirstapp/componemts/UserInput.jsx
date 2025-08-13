import {Text, TextInput, View } from "react-native-web";
import { useState } from "react";

export default function UserInput(){
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    return(
     <View style={{padding:20}}>
  
   <TextInput
   placeholder="ENTER YOUR NAME"
   value={name}
   onChangeText={setName}
   style={{borderWidth:2, padding:10}}
   />
    <TextInput
   placeholder="ENTER YOUR PASSWORD"
   secureTextEntry
   value={password}
   onChangeText={setPassword}
   style={{borderWidth:2, padding:10}}
   />
   <Text>youe name is :{name} </Text>


     </View>

    )
    
}