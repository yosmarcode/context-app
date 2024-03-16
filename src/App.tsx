import React, { Suspense } from 'react';

import './App.css';
import PageDashboard from './pages/PagesDashboard/PageDashboard';
import { PageContextProviderDashboard } from './pages/PagesDashboard/context/PageContextDashboard';

function App() {
  return (
    <PageContextProviderDashboard>
  
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Loading...</p>}>
        <PageDashboard />
        </Suspense>
      
      </header>
    </div>
    </PageContextProviderDashboard>
  );
}

export default App;
