import React from "react";

class Dropdown extends React.Component {

    render() {
      return (
        <div class="dropdown">
          <button class="dropdown__button">Dropdown <i class="fas fa-angle-down"></i> </button>
          <div class="dropdown__content">
            <p>A Bunch of text</p>
          </div>
        </div>
      );
    }
  }

  export default Dropdown;