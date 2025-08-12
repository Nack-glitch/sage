import React from 'react';

export default function About(){
  return (
    <div className="card" style={{maxWidth:820, margin:'0 auto'}}>
      <h3 style={{fontSize:18}}>About MyTasks</h3>
      <p style={{marginTop:10, color:'var(--muted)'}}>MyTasks is a small demo Task Manager built with React, React Router and Redux Toolkit. It's designed to be a friendly starter project for learning state management and routing.</p>
      <ul style={{marginTop:12, color:'var(--muted)', paddingLeft:18}}>
        <li>Add / toggle / delete tasks</li>
        <li>Built with clean components</li>
        <li>Plain CSS for easy customization</li>
      </ul>
    </div>
  );
}