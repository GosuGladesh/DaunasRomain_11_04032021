import React from "react";
import logo from "../../img/404.png"

class NotFound extends React.Component {

    render() {
      return (
        <div class="notfound">
          <img src={logo} alt=""/>
          <p>Oups! La page que vous demandez n'existee pas.</p>
          <a href="/">Retourner sur la page d'accueil</a>
        </div>
      );
    }
  }

  export default NotFound;