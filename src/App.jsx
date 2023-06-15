import { Routes, Route } from 'react-router-dom';
import React from 'react';

import './App.scss';

import { Header, Footer, Datatable } from './components/molecules';
import { CaseStory_Home, Home, Login, Register, Quiz, PageNotFound } from './containers';

import data_user from "./data_user.json";

function App() {
  return (
    <div className="App">
      
      <Header />

			<main className='mv-3 ph-3'>
        <Datatable json={data_user}/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quiz/:country' element={<CaseStory_Home />} />
          <Route path='quiz/:country/:quiz' element={<Quiz />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
			</main>

      <Footer />

    </div>
  );
}

export default App;
