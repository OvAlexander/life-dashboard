import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [duedate, setDueDate] = useState("");
  const [urgency, setUrgency] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, duedate, urgency, done };

    const response = await fetch("/api/tasks/", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDueDate("");
      setUrgency("");
      setDone(false);
      setError(null);
      console.log("new task added");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Task</h3>
      <label>Task Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Due Date:</label>
      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={duedate}
      />

      <label>Urgency:</label>
      <input
        type="text"
        onChange={(e) => setUrgency(e.target.value)}
        value={urgency}
      />

      {(e) => setDone(false)}
      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
