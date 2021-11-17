import React from "react";
import {withRouter} from "react-router-dom";
import Details from "../../Components/Details/Details";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

import logementData from "../../data/logements.json";
import placeHolder from "../../data/placeholder.json";
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
          <Nav />
          <Carrousel images={this.state.logement.pictures}/>
          <Details logement={this.state.logement}/>   
          <Footer /> 
        </div>
      );
    }
}

  export default withRouter(Logement);