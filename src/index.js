import "./styles.css";
import React from "react";
import { render } from "react-dom";
import { Header } from "./app/Components/Header";
import { Home } from "./app/Components/Home";

class App extends React.Component {
  render() {
    var myobj = {
      gender: "male",
      weight: "60",
      nicName: ["zadas", "sdfs", "sdfsd", "dfgdf", "cvb", "cvb", "fdgd"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Venu"} Age={25} others={myobj} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
