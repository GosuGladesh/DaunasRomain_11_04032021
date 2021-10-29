
import React from "react";
import { Link,BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {

    render() {
      return (
        <div class="nav">
          <img src="../../../public/img/LOGO.svg" alt=""/>
          <Router>
             <Link to="/">Accueil</Link>
              <Link to="/apropos">A Propos</Link> 
          </Router>
          
        </div>
      );
    }
  }

  export default Nav;