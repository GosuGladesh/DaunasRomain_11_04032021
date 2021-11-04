import React from "react";
import logo from "../../img/LOGO.svg"

class Footer extends React.Component {

 
    render() {
      return (
        <div class="footer">
          <img src={logo} alt="" class="footer__logo"/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      );
    }
  }

  export default Footer;