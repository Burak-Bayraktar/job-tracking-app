import React from 'react'
import Layout from './views/Layout';
import MainPage from './views/MainPage';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;
