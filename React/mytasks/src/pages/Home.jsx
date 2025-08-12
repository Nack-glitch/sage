import React from 'react';
import TaskList from '../components/TaskList';

export default function Home(){
  return (
    <div>
      <div className="header">
        <div>
          <h2 className="h-title">Your Tasks</h2>
          <p className="h-sub">Manage your day, one small step at a time.</p>
        </div>
        <div>
          {/* Could place quick stats here */}
        </div>
      </div>

      <TaskList />
    </div>
  );
}