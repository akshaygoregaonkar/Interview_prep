import React from "react";

const Hoc = (PreviousComponent) => {

  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userList: [],
      };
    }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => this.setState({ userList: json }));
    }

    render() {
      
      return <PreviousComponent data={this.state.userList} />;
    }
  }
  return HOC;
};

export default Hoc;