import { Camera,CameraView } from "expo-camera";
import { useState ,useRef} from "react";
export default function App() {
  const[haspermission,setHasPermission]=useState(null)
  const[photo,setPhoto]=useState(null)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

