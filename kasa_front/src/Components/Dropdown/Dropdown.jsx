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
        content = <div className="dropdown__content"> <ul>{this.props.content}</ul></div>;
      }
      else{
        content = null;
      }
      return (
        <div className="dropdown">
          <button className="dropdown__button" onClick={this.drop}>{this.props.title} {this.state.dropped ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>} </button>
            {content}
        </div>
      );
    }
  }

  export default Dropdown;