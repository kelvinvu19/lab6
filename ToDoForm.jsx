import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function ToDoForm({ setTasks }) {
  const [loading, setLoading] = useState(true);
  const [tasks, setLocalTasks] = useState([]); 
  const [selectedTask, setSelectedTask] = useState(''); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./tasks.json'); 
        const data = await response.json();
        setLocalTasks(data); 
        setTasks(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setTasks]);

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setSelectedTask(randomTask);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Loading tasks...</Text>
      ) : (
        <Text style={styles.successText}>Tasks Loaded Successfully!</Text>
      )}
      
      {/* Input field displaying the selected task */}
      <TextInput
        style={styles.input}
        value={selectedTask}
        placeholder="Selected Task"
        editable={false}
      />

      {/* Button to trigger random task generation */}
      <Button title="Generate Random Task" onPress={handleAddTask} />

      {/* You can also add tasks manually */}
      <Button
        title="Add New Task"
        onPress={() => setTasks((prev) => [...prev, 'New Task'])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingText: {
    fontSize: 16,
    color: 'gray',
  },
  successText: {
    fontSize: 16,
    color: 'green',
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    marginBottom: 16,
    borderColor: 'gray',
    backgroundColor: '#f0f0f0',
  },
});

export default ToDoForm;
