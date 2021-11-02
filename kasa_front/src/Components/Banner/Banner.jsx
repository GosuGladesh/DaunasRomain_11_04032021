import React from "react";
import img from "../../img/IMG.png"


class Banner extends React.Component {


    render() {
      return (
        <div class="banner__wrapper">
          <img class="banner" src={img} alt="" />
          <p class="banner__title">Chez vous, partout et ailleurs</p>
        </div>
        
      );
    }
  }

  export default Banner;