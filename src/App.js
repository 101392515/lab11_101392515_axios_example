import React from 'react';
import './App.css';
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User List</h1>
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
