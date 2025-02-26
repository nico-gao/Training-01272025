import React from "react";

// PureComponent: it provides a default shouldComponentUpdate
class ClassComponent extends React.Component {
  constructor(props) {
    console.log("constructor");

    super(props);

    // state initilization
    this.state = {
      count: 0,
    };

    // bind methods
    // this.handleAdd = this.handleAdd.bind(this);
  }

  // a shorthand way to initialize the component state without using a constructor
  // state = {
  //   count: 0
  // }

  // handleAdd() {
  //   // undefined
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        class component
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleAdd}>Add to count</button>
      </div>
    );
  }

  // equivalent to useEffect with empty dep array
  componentDidMount() {
    console.log("component did mount");
  }

  // equivalent to useEffect with no dep arr and non-empty dep arr
  componentDidUpdate() {
    console.log("component did update");
  }

  // equivalent to useEffect clean up function
  componentWillUnmount() {
    console.log("component will unmount");
  }

  // side effect - anything that happens outside of the React component
  // setTimeout, setInterval
  // fetching from an API
  // manipulate DOM
  // localstorage

  shouldComponentUpdate(nextProps, nextState) {
    // by default, React will do a shallow comparison on the props and states to determine whether the component needs a re-render
  }
}

export default ClassComponent;

class Foo {
  hi() {
    console.log(this);
  }
}

// const foo = new Foo();
// foo.hi(); // foo instance

// const fn = foo.hi;
// fn(); // window/undefined

// shallow comparison: loop through the objs to check if they have the same reference
const obj1 = {
  a: 1,
  b: 2,
  c: {
    name: "alice",
  },
};

const obj2 = {
  a: 1,
  b: 2,
  c: {
    name: "alice",
  },
};

// deep comparison: loop through the objs to check all the nested objects and values.

// for primitive data types
// loose comparison ==
// strict comparison ===

// console.log(obj1 == obj2); // false
