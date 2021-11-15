import React from "react";



class Banner extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
      return (
        <div class="banner__wrapper">
          <img class="banner" src={this.props.img} alt="" />
          <p class="banner__title">{this.props.title}</p>
        </div>
        
      );
    }
  }

  export default Banner;