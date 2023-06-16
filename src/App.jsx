import { Routes, Route } from 'react-router-dom';


import React from 'react';

import './App.scss';

import { Header, Footer, CountryDetails } from './components/molecules';
import { CaseStory_Home, Home, Login, Register, Quiz, PageNotFound, Account, RequireAuth } from './containers';
import { Layout } from './layouts';

import data_user from "./data_user.json";

function App() {

   return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='/' element={<Home />} />
        <Route path='quiz/:country' element={<CaseStory_Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* protected routes */}
        {/* connected routes */}
        <Route element={<RequireAuth allowedAccess="1" />}>
          <Route path='quiz/:country/:quiz' element={<Quiz />} />
          <Route path='my-account' element={<Account />} />
        </Route>
        
        {/* administration routes */}
        <Route element={<RequireAuth allowedAccess="2" />}>
          <Route path='admin/country/:country' element={<CountryDetails />} />
        </Route>

        {/* catch all */}
        <Route path='*' element={<PageNotFound/>} />  
      </Route>
    </Routes>
  );
}

export default App;
