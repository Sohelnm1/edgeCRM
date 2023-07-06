import React, { Component } from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-top: 100px;
`;

class Form extends Component {
  state = {
    value: "Double click on me😊",
    isInEditMode: false,
  };
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  updateValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value,
    });
  };
  editViewRender = () => {
    return (
      //   <WrapperStyled>
      <div>
        <input type="text" defaultValue="Some text here" ref="theTextInput" />
        <button onClick={this.changeEditMode}>Cancel❌</button>
        <button onClick={this.updateValue}>🆗</button>
      </div>
      //   {/* </WrapperStyled> */}
    );
  };

  defaultViewRender = () => {
    return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>;
  };
  render() {
    return (
      <WrapperStyled>
        <div>
          <h2>Double click on the below text to edit</h2>
          {this.state.isInEditMode
            ? this.editViewRender()
            : this.defaultViewRender()}
        </div>
      </WrapperStyled>
    );
  }
}

export default Form;
