import React from "react";

class Carrousel extends React.Component {

    constructor(props) {
      super(props);
      this.state = {images : this.props.images, current : 0}

      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next(){
      this.setState(state => {
        if(this.state.current !== this.state.images.length-1){
          return {current: state.current+1}
        }
        else{
          return {current: 0}
        }
      });
    }
    previous(){
      this.setState(state => {
        if(this.state.current !== 0){
          return {current: state.current-1}
        }
        else{
          return {current: this.state.images.length-1}
        }
      });
    }
    render() {
      return (
          <div className="carrousel">
                {this.state.images.length !== 1 ? <button onClick={this.previous} className="carrousel__button carrousel__button__previous"><i className="fas fa-angle-left "></i></button>: null} 
                <img src={this.state.images[this.state.current]} alt="" className="carrousel__image"/>
                <p className="carrousel__text">{this.state.current+1}/{this.state.images.length} </p>
                {this.state.images.length !== 1 ? <button onClick={this.next} className="carrousel__button carrousel__button__next"><i className="fas fa-angle-right "></i></button>: null}
          </div>
      );
    }
  }

  export default Carrousel;