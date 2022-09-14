import React from 'react';
import Layout from './components/layout'
import useGithub from './hooks/github-hooks'
import Profile from './components/profile'
import Repositories from './components/repositories'

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
        {githubState.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}</>
      ) : (
        <div>Nenhum usuario encontrado</div>
      )}
    </Layout>
  );
}

export default App;
