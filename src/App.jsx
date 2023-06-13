import { Routes, Route } from 'react-router-dom';


import React from 'react';

import './App.scss';

import { Header, Footer, CountryDetails } from './components/molecules';
import { CaseStory_Home, Home, Login, Register, Quiz, PageNotFound } from './containers';

function App() {

   return (
    <div className="App">
      
      <Header />

			<main className='mv-3 ph-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quiz/:country' element={<CaseStory_Home />} />
          <Route path='quiz/:country/:quiz' element={<Quiz />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='admin/country/:country' element={<CountryDetails />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
			</main>

      <Footer />

    </div>
  );
}

export default App;
