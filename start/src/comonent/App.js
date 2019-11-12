import React from 'react';
import RepoList from './RepoList';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App View</h1>
        <RepoList />
      </div>
    );
  }
}

export default App;