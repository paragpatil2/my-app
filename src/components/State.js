// The state is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-renders

// State is basically like a global object that is available everywhere in a component.
// The state data is a private object and is used within components inside a class.

import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props){
        super(props);
    // count is a variable in the state object ; 
    // since state is global , we can access count anywhere in the  program
    // Initialise the state in the class constructor
    this.state = {
        count: 0
    };
}
    // setState is a predefined method in React , with this method we are setting the value the count variable.
// Incrementing the  value by 1 , every time the user clicks the button (onClick() event)

    render() {
        return(
            <div>
                <p>This is form State Example</p>
                <p>You clicked the button {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click Me</button>
            </div>
        );
    }
}

export default StateExample;

 