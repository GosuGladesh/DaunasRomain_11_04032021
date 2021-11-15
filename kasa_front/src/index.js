import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Nav from './Components/Nav/Nav';
import NotFound from './pages/NotFound/NotFound'
import Logement from './pages/Logement/Logement'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>      
      <Switch>
        <Route path="/apropos">
          <About />
        </Route>
        <Route path="/logement/:id">
          <Logement />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
