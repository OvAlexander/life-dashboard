import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskForm = () => {
  const { dispatch } = useTaskContext();

  const [title, setTitle] = useState("");
  const [duedate, setDueDate] = useState("");
  const [urgency, setUrgency] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setDueDate("");
      setUrgency("");
      setDone(false);
      setError(null);
      dispatch({ type: "CREATE_TASKS", payload: json });
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
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Due Date:</label>
      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={duedate}
        className={emptyFields.includes("duedate") ? "error" : ""}
      />

      <label>Urgency:</label>
      <input
        type="text"
        onChange={(e) => setUrgency(e.target.value)}
        value={urgency}
        className={emptyFields.includes("urgency") ? "error" : ""}
      />

      {(e) => setDone(false)}
      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
