import React from "react";

export default class DataTwo extends React.Component {
    render() {
        return this.props.data !== null ? (
            <div>
                <p>{this.props.data["title"]}</p>
                <p><a href={this.props.data["author"]}>{this.props.data["author"]}</a></p>
                <p>{this.props.data["content"]}</p>
                <i>{this.props.data["comments"]}</i>
            </div>
        ) : (
            <div className="no-data"></div>
        );
    }
}
