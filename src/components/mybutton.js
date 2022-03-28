import React from "react";

export default class MyButton extends React.Component {
    // Take in the data and set state on each button.
    // Pass through appropriate data for each button.
    render() {
        // If we pass a className, set it - otherwise give it a default class
        let className = "my-button ";
        if (this.props.data["className"]) {
            className = this.props.data["className"]; // could append to maintain previous class if needed
        }
        return (
            
            <button
                className={className}
                onClick={() => this.props.handleClick(this.props.data.dataName)}
            >
                {this.props.data.dataName["name"]}
            </button>
        );
    }
}
