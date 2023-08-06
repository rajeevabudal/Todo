import React, { useState } from "react";
import { Input, Button, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";

//import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container mx-auto p-4">
      <h1 className="text-2xl mb-4">Todo App</h1>
      <div className="flex mb-4">
        <Input
          placeholder="Enter a task"
          value={task}
          onChange={handleTaskChange}
          onPressEnter={addTask}
          className="flex-grow mr-2"
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={addTask}>
          Add Task
        </Button>
      </div>
      <List
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item
            className="flex justify-between items-center"
            actions={[
              <Button danger onClick={() => removeTask(index)}>
                Delete
              </Button>
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
