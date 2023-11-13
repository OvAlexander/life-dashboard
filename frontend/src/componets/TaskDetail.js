const TaskDetail = ({ task }) => {
  return (
    <div className="task-detail">
      <h4>{task.title}</h4>
      <p>
        <strong>Due date: </strong>
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
    </div>
  );
};

export default TaskDetail;
