
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddTask(){
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title.trim()));
    setTitle('');
    navigate('/');
  }

  return (
    <div className="card" style={{maxWidth:720, margin:'0 auto'}}>
      <h3 style={{fontSize:18, marginBottom:12}}>Add New Task</h3>
      <form onSubmit={onSubmit} style={{display:'grid', gap:12}}>
        <div className="form-group">
          <label className="h-sub">Task title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Study React" className="input" />
        </div>

        <div style={{display:'flex', gap:10}}>
          <button type="submit" className="btn btn-primary">Add Task</button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}