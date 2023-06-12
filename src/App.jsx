import { Routes, Route } from 'react-router-dom';


import React from 'react';

import './App.scss';

import { Header, Footer } from './components/molecules';
import { CaseStory_Home, Home } from './containers';
import { CountryDetails } from './components/molecules/CountryDetails';

function App() {

   return (
    <div className="App">
      
      <Header />

			<main className='mv-3 ph-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quiz/:country' element={<CaseStory_Home />} />
          <Route path='admin/country/:country' element={<CountryDetails />} />
        </Routes>
			</main>

      <Footer />

    </div>
  );
}

export default App;
