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
          <div class="details">
              <div>
                    <h1 class="details__title">Title</h1>
                    <p class="details__location">Location</p>
              </div>
               <div calss="details__host">
                    <p class="details__host__name">Host Name</p>
                    <img class="details__host__picture" alt=""/>
               </div>
                
                <div class="tag__container">
                    <Tag tag="premier"/>
                    <Tag tag="deuxieme"/>
                </div>                
                <Rating />
          </div>
           

      );
    }
  }

  export default Details;