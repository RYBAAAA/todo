import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Lista ToDo</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Dodaj nowe zadanie"
        onKeyDown={e => { if (e.key === "Enter") addTask(); }}
        style={{ padding: "8px", width: "70%" }}
      />
      <button onClick={addTask} style={{ padding: "8px", marginLeft: 8 }}>
        Dodaj
      </button>
      <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: 20 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              borderBottom: "1px solid #ddd",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#999" : "#000"
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={{ cursor: "pointer", flexGrow: 1 }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: 10 }}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
