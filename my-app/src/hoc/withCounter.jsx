import React from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      count: 0,
      a: 1,
      b: 2,
    };

    handleAdd = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    componentDidUpdate() {
      console.log("with counter component did update");
    }

    render() {
      return (
        <WrappedComponent
          handleAdd={this.handleAdd}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
