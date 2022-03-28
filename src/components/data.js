import React from "react";
// Params should be one object referred to as 'data'
// with key value pairs for title, author, content and comments
// Else show no data
export default class Data extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...this.props.data};
    // }
    // componentDidUpdate(prevProps){
    //     if (prevProps.data !== this.props.data){
    //         this.setState({...this.props.data});
    //     }
    // }

    render() {
        return this.props.data !== null ? (
            <div>
                <p>{this.props.data["title"]}</p>
                <p>{this.props.data["author"]}</p>
                <p>{this.props.data["content"]}</p>
                <i>{this.props.data["comments"]}</i>
            </div>
        ) : (
            <div className="no-data"></div>
        );
    }
}
