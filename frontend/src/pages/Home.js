import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
//Components
import TaskDetail from "../componets/TaskDetail";
import TaskForm from "../componets/TaskForm";

const Home = () => {
  const { tasks, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="Tasks">
        {tasks &&
          tasks.map((task) => <TaskDetail key={task._id} task={task} />)}
      </div>
      <TaskForm />
    </div>
  );
};

export default Home;
