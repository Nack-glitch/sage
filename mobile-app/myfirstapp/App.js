import {View,Text,Image,TextInput,Button} from "react-native";
import { SafeAreaView,SafeAreaProvider} from "react-native-safe-area-context";
import Greet from "./componemts/Greet";
import UserInput from "./componemts/UserInput";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SmallList from "./component/SmallList"
export default function App(){
  const Stack=createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator  initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>

       </Stack.Navigator>
    <SmallList/>

    </NavigationContainer>

    //   <SafeAreaProvider>
    //   <SafeAreaView>
    // <View style={{flex:"1",justifyContent:"center",alignItems:"center"}}>
    
    //   <Text>react native</Text>
    //   <Greet name="naol"/>
    //   <Image source={{uri:"https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-1036x780.jpg"}}
    //   style={{height:100,width:100}}/>
    //   <UserInput/>
    //   <TextInput
    //   placeholder="write as you want"
    //   style={{borderWidth:1,padding:20}}/>
    //   <Button title="click me " onPress={()=>alert("not allowed")}/>
    // </View>
    // </SafeAreaView>
    // </SafeAreaProvider>
  )
}