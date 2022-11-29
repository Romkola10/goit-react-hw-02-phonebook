import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Form/Form";

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  render() {
    return (
      <div className="div">
        <Form />
      </div>
    )
  }

}

export default App;