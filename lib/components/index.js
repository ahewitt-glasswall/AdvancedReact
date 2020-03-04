import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: "test"
        };
    }

    asyncFunction = () => {
        return Promise.resolve(20);
    }

    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunction()
        });
    }

    render() {
        return (
            <div>
                <h2>React Class Component.</h2>
                <p>Answer = {this.state.answer}</p>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);