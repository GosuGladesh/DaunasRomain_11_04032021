import React from "react";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery"
class Home extends React.Component {

    render() {
      return (
        <div>
          <Banner />
          <Gallery />
        </div>
      );
    }
  }

  export default Home;