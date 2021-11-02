/* eslint-disable no-useless-constructor */
import React from "react";

class Thumbnail extends React.Component {

    constructor(props) {
      super(props);
      this.state = {title : props.title,cover: props.cover }
    }

    render() {
      return (
        <a href="" class="thumbnail">
          <img src={this.state.cover} alt=""/>
          <p class="thumbnail__title">{this.state.title}</p>
        </a>
      );
    }
  }

  export default Thumbnail;