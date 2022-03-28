import React from "react";
import secret from "../images/secret.svg";
import MyButton from "./mybutton.js";
import Data from "./data.js";
import "./styles/pages.css";

export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contentToDisplay: null };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.title = "My Playground";
    }
    handleClick(data) {
        this.setState({ contentToDisplay: data });
    }
    render() {
        const myPoem = {
            name: "Colin's Poem",
            title: "Toes in the ocean, seat in the sand",
            author: "Colin Peterson",
            content:
                "Egypt - I've always loved the history of ancient Egypt and who doesn't want to see the pyramids in person?",
            comments: "",
        };
        const otherPoem = {
            name: "Fun Poem",
            title: "The Red Wheelbarrow",
            author: "William Carlos Williams",
            content:
                "so much depends upon a red wheel barrow glazed with rain water beside the white chickens",
            comments: "",
        };
        const clearPoem = {
            name: "Clear Poem",
            title: "",
            author: "",
            content: "",
            comments: "",
        };
        return (
            <div className="first-page">
                <h1>My Playground</h1>
                <h2>Hello {this.props.displayName}</h2>
                <p>Colin Peterson</p>
                <p>Mobile Computing</p>
                <p>March 26, 2022</p>
                <MyButton
                    handleClick={this.handleClick}
                    data={{ dataName: { ...myPoem } }}
                ></MyButton>
                <MyButton
                    handleClick={this.handleClick}
                    data={{ dataName: { ...otherPoem } }}
                ></MyButton>
                <MyButton
                    handleClick={this.handleClick}
                    data={{
                        className: "clear-button",
                        dataName: { ...clearPoem },
                    }}
                ></MyButton>
                <Data data={this.state.contentToDisplay}></Data>

                <img
                    src={secret}
                    style={{ position: "absolute", right: 0, bottom: 0 }}
                    alt="Not so hidden easter egg"
                ></img>
            </div>
        );
    }
}
