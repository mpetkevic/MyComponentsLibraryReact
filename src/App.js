import React, { Component } from "react";
import Users from "./dumbInfo";
import InputWithModal from "./components/InputWithModal";
import { AppWrapper, AppContainer } from "./App.styles";

class App extends Component {
  state = {
    name: "",
    email: "",
    secondEmail: "",
    website: "",
    zipcode: ""
  };

  onSetStateProperty = (property, value) => {
    this.setState(() => ({ [property]: value }));
  };

  render() {
    return (
      <AppWrapper>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>Second Email: {this.state.secondEmail}</p>
          <p>Website: {this.state.website}</p>
          <p>Zipcode: {this.state.zipcode}</p>
        </div>
        <AppContainer>
          <InputWithModal
            Icons
            setStateProperty={this.onSetStateProperty}
            label="User"
            property="name"
            array={Users}
          />
          <InputWithModal
            setStateProperty={this.onSetStateProperty}
            label="Email"
            Icons
            property="email"
            array={Users}
          />
          <InputWithModal
            setStateProperty={this.onSetStateProperty}
            label="Second Email"
            property="secondEmail"
          />
          <InputWithModal
            setStateProperty={this.onSetStateProperty}
            label="Website"
            Icons
            property="website"
            array={Users}
          />
          <InputWithModal
            setStateProperty={this.onSetStateProperty}
            label="Zipcode"
            Icons
            property="address"
            secondProperty="zipcode"
            array={Users}
          />
        </AppContainer>
      </AppWrapper>
    );
  }
}

export default App;
