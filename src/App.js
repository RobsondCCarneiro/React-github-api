import React from 'react';
import layout from './components/layout'

function App() {
  return (
    <main>
      <layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/43090615?v=4" alt="Picture of user" />
          <h1>Robson da Costa</h1>
          <h3>Username</h3>
          <span>RobsondCCarneiro</span>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </layout>
    </main>
  );
}

export default App;
