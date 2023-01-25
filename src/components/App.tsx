import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Login = lazy(() => import('./Login/Login'));


const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
