import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Routes, Route } from 'react-router-dom';
import Portifolia from './component/Portifolia';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './component/Gallery';
import About from './component/About';
import Blog from './component/Blog';
import Exibihation from './component/Exibihation';



const queryClient = new QueryClient();

function App() {
  return (


    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portifolia" element={<Portifolia />}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/exibihation" element={<Exibihation/>}></Route>


        </Routes>
      </Router>
    </QueryClientProvider>
  );
}


export default App
