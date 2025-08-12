import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

export default function TaskItem(props) {
  const dispatch = useDispatch();
  const task = props.task;

  function handleToggle() {
    dispatch(toggleTask(task.id));
  }

  function handleDelete() {
    dispatch(deleteTask(task.id));
  }

  // Class for checkbox
  let checkboxClass = 'checkbox';
  if (task.completed) {
    checkboxClass = 'checkbox checked';
  }

  // Background style for the box
  let boxStyle = { background: 'transparent' };
  if (task.completed) {
    boxStyle.background = 'linear-gradient(90deg, var(--accent-1), var(--accent-2))';
  }

  // Class for task title
  let titleClass = 'task-title';
  if (task.completed) {
    titleClass = 'task-title done';
  }

  return (
    <div className="card task-row">
      <div className="task-left">
        <div className={checkboxClass} onClick={handleToggle}>
          <input type="checkbox" checked={task.completed} readOnly />
          <div className="box-fill" style={boxStyle}></div>
        </div>

        <div>
          <div className={titleClass}>{task.title}</div>
          <div className="task-meta">ID: {task.id}</div>
        </div>
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
