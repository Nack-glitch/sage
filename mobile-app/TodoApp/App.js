import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

const add = () => {
  if (task) {
    const newTask = { id: Date.now(), text: task }; 
    setTasks([...tasks, newTask]); 
    setTask(''); 
  }
};


  const del = id => setTasks(tasks.filter(t => t.id !== id));

  return (
    <View style={{ flex: 1, paddingTop: 40, alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}> Todo list</Text>

      <View style={{ flexDirection: 'row', width: '90%', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 10 }}
          placeholder="Add task..."
          placeholderTextColor="#888"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity
          style={{ width: 70, backgroundColor: '#6200ee', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
          onPress={add}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: '90%' }}>
        {tasks.map(item => (
          <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#6200ee', padding: 16, marginVertical: 4, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{item.text}</Text>
            <TouchableOpacity onPress={() => del(item.id)}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
