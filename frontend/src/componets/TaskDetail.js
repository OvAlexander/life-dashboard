import { useTaskContext } from "../hooks/useTaskContext";
import { formatDistanceToNow, format } from "date-fns";

const TaskDetail = ({ task }) => {
  const { dispatch } = useTaskContext();
  const handleClick = async () => {
    const response = await fetch("/api/tasks/" + task._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="task-detail">
      <h4>{task.title}</h4>
      <p>
        <strong>Due date? </strong>
        {task.duedate}
      </p>
      <p>
        <strong>Urgency: </strong>
        {task.urgency}
      </p>
      <p>
        <strong>Done: </strong>
        {task.done}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default TaskDetail;
