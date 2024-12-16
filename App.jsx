/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <SafeAreaView>
      {/* Pass tasks to ToDoList */}
      <ToDoList tasks={tasks} />

      {/* Pass setTasks to ToDoForm for updating tasks */}
      <ToDoForm setTasks={setTasks} />
    </SafeAreaView>
  );
}

export default App;
