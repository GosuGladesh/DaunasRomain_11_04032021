import React from "react";
import {withRouter} from "react-router-dom";
import Details from "../Details/Details";
import Carrousel from "../Carrousel/Carrousel";

import logementData from "../../Data/logements.json";
import placeHolder from "../../Data/placeholder.json";
class Logement extends React.Component {

    constructor(props) {
      super(props)
      for(let l of JSON.parse(JSON.stringify(logementData))) {
        if( l.id === this.props.match.params.id){
          this.state = {logement : l};
          console.log();
          return;
        }
        this.state = {logement : JSON.parse(JSON.stringify(placeHolder))}
      }
    }
      
    render() {
      return (
        <div>
          <Carrousel/>
          <Details logement={this.state.logement}/>    
        </div>
      );
    }
}

  export default withRouter(Logement);