import { Routes, Route } from 'react-router-dom';


import React from 'react';

import './App.scss';

import { CountryDetails, Datatable } from './components/molecules';
import { CaseStory_Home, Home, Login, Register, Quiz, PageNotFound, Account, RequireAuth } from './containers';
import { Layout } from './layouts';

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
        <Route path='/admin' element={<RequireAuth allowedAccess="2" />}>
          <Route path='countries' element={<Datatable table="countries" />} />
          <Route path='users' element={<Datatable table="users" />} />
          <Route path='answers' element={<Datatable table="answers" />} />
          <Route path='case_stories' element={<Datatable table="case_stories" />} />
          <Route path='country/:country' element={<CountryDetails />} />
        </Route>

        {/* catch all */}
        <Route path='*' element={<PageNotFound/>} />  
      </Route>
    </Routes>
  );
}

export default App;
