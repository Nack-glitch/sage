import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Switch, KeyboardAvoidingView, Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  const add = () => task && setTasks([{ id: Date.now().toString(), text: task, done: false }, ...tasks]) & setTask('');
  const toggle = id => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const del = id => setTasks(tasks.filter(t => t.id !== id));

  const theme = dark ? { bg:'#121212', text:'#fff', input:'#2c2c44', btn:'#ff6b81' } : { bg:'#f0f0f0', text:'#333', input:'#fff', btn:'#6200ee' };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.container, { backgroundColor: theme.bg }]}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.text }]}>📝 To-Do</Text>
            <Switch value={dark} onValueChange={setDark}/>
          </View>

          {/* Tasks */}
          <FlatList
            data={tasks}
            keyExtractor={t => t.id}
            renderItem={({ item }) => (
              <View style={[styles.task, { backgroundColor: item.done ? '#6c5ce7' : '#00cec9' }]}>
                <TouchableOpacity style={{ flex: 1 }} onPress={()=>toggle(item.id)}>
                  <Text style={[styles.text, item.done && { textDecorationLine: 'line-through', color:'#fff' }]}>{item.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>del(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="#fff"/>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
          />

          {/* Input */}
          <View style={[styles.inputContainer, { backgroundColor: theme.input }]}>
            <TextInput 
              style={[styles.input, { color: theme.text }]} 
              placeholder="Add task..." 
              placeholderTextColor="#888" 
              value={task} 
              onChangeText={setTask} 
            />
            <TouchableOpacity style={[styles.add, { backgroundColor: theme.btn }]} onPress={add}>
              <Ionicons name="add" size={28} color="#fff"/>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,paddingTop:40},
  header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20},
  title:{fontSize:28,fontWeight:'bold'},
  task:{flexDirection:'row',alignItems:'center',padding:16,margin:8,borderRadius:20},
  text:{fontSize:18},
  inputContainer:{flexDirection:'row',alignItems:'center',padding:12,position:'absolute',bottom:0,width:'100%',borderTopLeftRadius:25,borderTopRightRadius:25,shadowColor:'#000',shadowOffset:{width:0,height:-3},shadowOpacity:0.2,shadowRadius:5,elevation:8},
  input:{flex:1,padding:12,borderRadius:20,backgroundColor:'#ffffffaa',marginRight:10,fontSize:16},
  add:{width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}
});
