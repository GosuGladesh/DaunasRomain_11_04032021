import React from "react";
import {withRouter} from "react-router-dom";
import Details from "../Details/Details";
import Carrousel from "../Carrousel/Carrousel";
class Logement extends React.Component {

    
    render() {
      return (
        <div>
          <Carrousel/>
          <Details />
        </div>
      );
    }
}

  export default withRouter(Logement);