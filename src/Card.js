import React from "react";
import "tachyons";
class Card extends React.Component {
  render() {
    return (
      <div className="tc bg-light-green dib br3 ma2 pa3 grow shadow-3">
        <img
          src={`https://robohash.org/${this.props.id}?200x200`}
          alt="robot"
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
