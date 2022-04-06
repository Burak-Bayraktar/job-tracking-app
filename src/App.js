import React from 'react'
import { JobProvider } from './contexts/JobContext';
import Layout from './views/Layout';
import MainPage from './views/MainPage';

function App() {
  return (
    <div className="app-container">
      <JobProvider>
        <Layout>
          <MainPage />
        </Layout>
      </JobProvider>
    </div>
  );
}

export default App;
