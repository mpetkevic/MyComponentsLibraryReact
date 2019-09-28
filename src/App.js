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
    console.log("SetStateProp", property, value);
    console.log("ThisState", property, `value: ${[property]}`)
    this.setState(() => ({ [property]: value }));
  }

  onInputChange = e => this.setState(() => ({[e.target.name]: e.target.value}));

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
            onInputChange={this.onInputChange}
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
