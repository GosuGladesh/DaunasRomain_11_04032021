import React from "react";
import Tag from "../Tag/Tag";
import Host from "../Host/Host"
import Rating from "../Rating/Rating";
import Dropdown from "../Dropdown/Dropdown";

class Details extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
      let equipementContent = this.props.logement.equipments.map( item => <li>{item}</li>);
      return (
        <div>
          <div className="details">
              <div>
                    <h1 className="details__title">{this.props.logement.title}</h1>
                    <p className="details__location">{this.props.logement.location}</p>
              </div>
               <Host name={this.props.logement.host.name} picture={this.props.logement.host.picture}/>
                
              <div className="tag__container">
                {this.props.logement.tags.map(tag => <Tag key={tag} tag={tag}/>)}
              </div> 

                <Rating rating={this.props.logement.rating}/>
          </div>
          <div className="dropdown__wrapper">
            <Dropdown title={"Description"} content={this.props.logement.description}/>
            <Dropdown title={"Equipements"} content={equipementContent}/>
          </div>
        </div>
          
           

      );
    }
  }

  export default Details;