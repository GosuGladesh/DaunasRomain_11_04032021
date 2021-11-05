import React from "react";
import starGrey from "../../img/star_grey.svg";
import starColor from "../../img/star_color.svg";

class Rating extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      return (
          <div className="rating">
               <img src={starGrey} alt =""/>
               <img src={starGrey} alt =""/>
               <img src={starGrey} alt =""/>
               <img src={starGrey} alt =""/>
               <img src={starGrey} alt =""/>
          </div>
           

      );
    }
  }

  export default Rating;