import { useEffect, useState } from "react";

//Components
import TaskDetail from "../componets/TaskDetail";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="home">
      <div className="Tasks">
        {tasks &&
          tasks.map((task) => <TaskDetail key={task._id} task={task} />)}
      </div>
    </div>
  );
};

export default Home;
