import React from "react";

class Dropdown extends React.Component {

    constructor(props){
      super(props);
      this.state = {dropped : false}

      this.drop = this.drop.bind(this);
    }

    drop() {
      this.setState(state => ({
        dropped: !state.dropped
      }));
    }
    render() {
      let content;
      if(this.state.dropped) {
        content = <div class="dropdown__content"> <ul>{this.props.content}{/*this.props.content.map(item => {return <li>{item}</li>})*/}</ul></div>;
      }
      else{
        content = null;
      }
      return (
        <div class="dropdown">
          <button class="dropdown__button" onClick={this.drop}>{this.props.title} <i class="fas fa-angle-down"></i> </button>
            {content}
        </div>
      );
    }
  }

  export default Dropdown;