import React from "react";

import img from "../../img/IMG.png"

import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery"
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
class Home extends React.Component {

    render() {
      return (
        <div>
          <Nav />
          <Banner title="Chez vous, partout et ailleurs" img={img}/>
          <Gallery />
          <Footer />
        </div>
      );
    }
  }

  export default Home;