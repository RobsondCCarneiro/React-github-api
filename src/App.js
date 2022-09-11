import React from 'react';
import layout from './components/layout'
import Profile from './components/profile'

const App = () => {
  return (
    <main>
      <layout>
        <div>
          <Profile/>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </layout>
    </main>
  );
}

export default App;
