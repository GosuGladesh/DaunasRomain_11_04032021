import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import fecthData from "../../data/logements.json"


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
        <div className="gallery">  
          {this.state.logements.map( logement =>  <Thumbnail key={logement.title} title={logement.title} cover={logement.cover} id={logement.id}/>)}
        </div>
      );
    }
  }

  export default Gallery;