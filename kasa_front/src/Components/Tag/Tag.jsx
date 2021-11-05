import React from "react";

class Tag extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tag : ""};
  }

    render() {
      return (
        <div class="tag">
          <p>{this.props.tag}</p>
        </div>
      );
    }
  }

  export default Tag;