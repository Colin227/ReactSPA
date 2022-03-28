import React from "react";
// Params should be one object referred to as 'data'
// with key value pairs for title, author, content and comments
// Else show no data - hr elements will be shown to maintain styling
export default class Data extends React.Component {
    render() {
        return this.props.data !== null ? (
            <div>
                <hr></hr>
                <p>{this.props.data["title"]}</p>
                <p>{this.props.data["author"]}</p>
                <p>{this.props.data["content"]}</p>
                <i>{this.props.data["comments"]}</i>
                <hr></hr>
            </div>
        ) : (
            <div className="no-data">
                <hr></hr>
                <hr></hr>
            </div>
        );
    }
}
