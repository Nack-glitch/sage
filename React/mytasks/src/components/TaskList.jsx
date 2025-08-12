import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList(){
  const tasks = useSelector(state => state.tasks);

  if (!tasks.length) return (
    <div className="card" style={{textAlign:'center', padding:'48px'}}>
      <h3 style={{fontSize:18, marginBottom:8}}>No tasks yet</h3>
      <p style={{color:'var(--muted)'}}>Add a task to get started — it's fast and fun.</p>
    </div>
  );

  return (
    <div style={{display:'grid', gap:12}}>
      {tasks.slice().reverse().map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}