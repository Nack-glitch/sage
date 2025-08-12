import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}             >
      <Text style={{fontSize:30,fontFamily:"sans sirif",}} >my first app</Text>
    <Image source={{uri:"https://cdn.wallpapersafari.com/44/55/kp50Ri.jpg"}}
    style={{width:100,height:100}}
    />
    <TextInput 
    placeholder='ENTER YOUR NAME'
    style={{borderWidth:1 ,padding:20}}
    />
    <Button title='click me' onPress={()=>alert("clicked")}
       style={{setStatusBarBackgroundColor:"red"}}/>
      
    </View>
  );
}


