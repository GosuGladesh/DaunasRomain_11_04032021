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
                    <h1 class="details__title">{this.props.logement.title}</h1>
                    <p class="details__location">{this.props.logement.location}</p>
              </div>
               <div class="details__host">
                    <p class="details__host__name">{this.props.logement.host.name}</p>
                    <img class="details__host__picture" alt="" src={this.props.logement.host.picture}/>
               </div>
                
                <div class="tag__container">
                  {this.props.logement.tags.map(tag => <Tag tag={tag}/>)}
                </div> 

                <Rating />
          </div>
           

      );
    }
  }

  export default Details;