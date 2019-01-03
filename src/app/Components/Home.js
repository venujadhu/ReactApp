import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Age: props.Age
    };
  }
  onbuttonClicked() {
    this.setState({
      Age: this.state.Age + 3
    });
  }
  render() {
    return (
      <div>
        <p> User Details </p>
        <p>name = {this.props.name}</p>
        <p>age = {this.props.Age}</p>
        <p>My Age after 3 Years = {this.state.Age}</p>
        <hr />
        <button onClick={() => this.onbuttonClicked()}>Get My Age</button>
      </div>
    );
  }
}
