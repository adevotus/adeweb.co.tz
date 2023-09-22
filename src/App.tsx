import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Routes, Route } from 'react-router-dom';
import Portifolia from './component/Portifolia';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const queryClient = new QueryClient();

function App() {
  return (


    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio" element={<Portifolia />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}


export default App
