import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import fecthData from "../../Data/logements.json"


class Gallery extends React.Component {

    constructor(props) {
      super(props);
      this.state = { logements : []};
    }

    componentDidMount() {
      //fetch
      /*
      fetch("./logements.json")
        .then(response => response.json())
        .then(data => {
          this.setState({logements : data});
          console.log(this.state.logements);
          }
        )
        */
       this.setState({logements : JSON.parse(JSON.stringify(fecthData))});
    }

    render() {      
      return (
        <div class="gallery">  
          {this.state.logements.map( logement =>  <Thumbnail key={logement.title} title={logement.title} cover={logement.cover}/>)}
        </div>
      );
    }
  }

  export default Gallery;