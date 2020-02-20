import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            test: "test"
        };
    }

    asyncFunction = () => {
        return Promise.resolve(20);
    }

    async componentDidMount() {
        this.setState({
            test: await this.asyncFunction()
        });
    }

    render() {
        return (
            <h2>React Class Component. {this.state.test}</h2>
        )
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);