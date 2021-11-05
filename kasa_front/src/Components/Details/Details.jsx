import React from "react";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";

class Details extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return (
          <div>
                <h1></h1>
                <p></p>
                <p></p>
                <img />
                <Tag />
                <Rating />
          </div>
           

      );
    }
  }

  export default Details;