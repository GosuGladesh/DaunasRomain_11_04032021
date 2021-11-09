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
          <div class="carrousel">
                <button onClick={this.previous} class="carrousel__button carrousel__button__previous"><i class="fas fa-angle-left fa-7x"></i></button>
                <img src={this.state.images[this.state.current]} alt="" class="carrousel__image"/>
                <p class="carrousel__text">{this.state.current+1}/{this.state.images.length} </p>
                <button onClick={this.next} class="carrousel__button carrousel__button__next"><i class="fas fa-angle-right fa-7x"></i></button>
          </div>
           

      );
    }
  }

  export default Carrousel;