import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

class Gallery extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      //fetch
      fetch("../../Data/logements.json")
      .then(response => response.json())
      .then(data => this.setState( {logements : data}))
    }
// {this.state.logements.map( logement =>  <Thumbnail key={logement.title} title={logement.title}/>)}
    render() {      
      return (
        <div class="gallery">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      );
    }
  }

  export default Gallery;