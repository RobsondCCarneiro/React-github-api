import React from 'react';
import Layout from './components/layout'
import Profile from './components/profile'
import { ResetCSS } from './global/resetCSS'

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <div>
          <Profile/>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
