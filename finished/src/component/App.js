import React, { useState } from 'react';
import RepoList from './RepoList';
import '../styles/App.css'

const App = () => {
  //Returns array of two elements inside of it. Similar to destructuring
  const [resource, setResource] = useState('BboyAkers');
    return (
      <div>
        <div>
          <button onClick={() => setResource('BboyAkers')}>Austin Akers</button>
          <button onClick={() => setResource('sdras')}>Sarah Drasner</button>
        </div>
        <RepoList resource={resource} />
      </div>
    );
}

export default App