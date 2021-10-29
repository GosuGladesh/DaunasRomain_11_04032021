import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

class Gallery extends React.Component {

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