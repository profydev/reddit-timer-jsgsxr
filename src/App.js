import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Header from './components/header/Header';
import GlobalStyle from './assets/styles/globalStyles';
import Home from './routes/Home';
import Footer from './components/footer/Footer';
// import Search from './routes/Search';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/search" />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
