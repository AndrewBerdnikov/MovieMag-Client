import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/style.css';
import Main from './pages/Main';
import {Context} from '.';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';
import Footer from './components/Footer';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
        user.setUser(true);
        user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
    </BrowserRouter>
  );
});

export default App;
