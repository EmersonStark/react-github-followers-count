import React, { useState, useEffect } from 'react';
import './App.css';

import api from './services/api';

interface IntUserData {
  followers: number;
  following: number
}

function App() {
  const [username, setUsername] = useState('');
  const [userdata, setUserData] = useState<IntUserData>({ followers: 0, following: 0 });

  async function findGithubUser(username: string) {
    try {
      const { data } = await api.get(`/${username}`);
      setUserData(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search">
          <input
            className="input"
            placeholder="Digite o nome do usuário"
            value={username}
            onChange={text => setUsername(text.target.value)}
          />
          
          <button className="button" onClick={() => findGithubUser(username)}>Buscar</button>
        </div>
        <hr />
        <hr />
        <hr />
        <div>FOLLOWERS: {`${userdata.followers}`}</div>
        <div>FOLLOWING: {`${userdata.following}`}</div>
      </header>
    </div>
  );
}

export default App;
