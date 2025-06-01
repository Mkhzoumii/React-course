import React from "react";
import Attack from "../image/attack.png";
import Defence from "../image/defend.png";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handelAttack = this.handelAttack.bind(this);

    this.state = {
      Count: 0,
    };
    this.handelDefence = this.handelDefence.bind(this);
  }

  handelAttack() {
    this.setState((prevState) => {
      return { Count: prevState.Count + 1 };
    });
  }

  handelDefence() {
    this.setState((prevState) => {
      return { Count: prevState.Count - 1 };
    });
  }
  render() {
    return (
      <div className="row text-light text-center">
        <h1>Game Score : {this.state.Count} </h1>
        <p> You win at +20 points and you lose at -20 points</p>
        <p> Lets play : </p>
        <h3> Game Status</h3>
        <div className=" col-6 ">
          <img
            style={{
              width: "100px",
              cursor: "pointer",
              border: "2px solid green",
            }}
            className="p-4 rounded"
            src={Attack}
            alt="Attack"
            onClick={this.handelAttack}
          />
        </div>
        <div className=" col-6  ">
          <img
            style={{
              width: "100px",
              cursor: "pointer",
              border: "2px solid red",
            }}
            className="p-4 rounded"
            src={Defence}
            alt="Defence"
            onClick={this.handelDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button className="btn btn-secondary w-100 mt-4">Random Game</button>
          <br />
          <button className="btn btn-warning w-100 mt-4">Reset</button>
        </div>
      </div>
    );
  }
}
