import React from "react";
import {withRouter} from "react-router-dom";
import Details from "../../Components/Details/Details";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import {Redirect} from "react-router-dom"

import logementData from "../../Data/logements.json";
class Logement extends React.Component {

    constructor(props) {
      super(props)
      for(let l of JSON.parse(JSON.stringify(logementData))) {
        if( l.id === this.props.match.params.id){
          this.state = {logement : l};
          return;
        }
        this.state = {logement : false}
      }
    }
      
    render() {
      return (
        <>
          {this.state.logement ? 
          <>
            <Nav />
            <Carrousel images={this.state.logement.pictures}/>
            <Details logement={this.state.logement}/>   
            <Footer /> 
          </>
          :
          <Redirect to="/*"/>} 
        </>
      );
    }
}

  export default withRouter(Logement);