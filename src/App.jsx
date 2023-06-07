import { Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.scss';

import { Header, Footer } from './components/molecules';
import { CaseStory_Home, Home, PageNotFound } from './containers';

function App() {
  return (
    <div className="App">
      
      <Header />

			<main className='mv-3 ph-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quiz/:country' element={<CaseStory_Home />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
			</main>

      <Footer />

    </div>
  );
}

export default App;
