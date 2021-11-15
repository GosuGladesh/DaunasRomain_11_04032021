import React from "react";

class Host extends React.Component {

    
    render() {
        return (
            <div class="details__host">
                    <p class="details__host__name">{this.props.name}</p>
                    <img class="details__host__picture" alt="" src={this.props.picture}/>
            </div>
        );
    }

}

export default Host;