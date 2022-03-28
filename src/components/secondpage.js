import React from 'react';
// import DataTwo from './dataTwo';
import Data from './data';
import MyButton from './mybutton';
import "./styles/pages.css";
export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tech: null};
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {
        this.setState({...e}); // come back and look at this later
    }
    componentDidMount() {
        document.title = "Fun Technology";

        
        
    }
    render() {
        const techReact = {
            name: "React Details",
            title: "React.js",
            author: "https://reactjs.org/",
            content: "A front-end JavaScript framework",
            comments: "I have been really enjoying working with React for this assignment and personal projects!"
        };
        const ai = {
            name: "AI Details",
            title: "Artificial Intelligence",
            author: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
            content: "Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities of the human mind.",
            comments: "I find it very interesting to see how people are able to make computers do such complex tasks, and provide them with the ability to 'think'."
        }
        const raspberryPi = {
            name: "Raspberry Pi Details",
            title: "Raspberry Pi",
            author: "https://www.raspberrypi.com/",
            content: "Raspberry Pi is the name of a series of single-board computers made by the Raspberry Pi Foundation, a UK charity that aims to educate people in computing and create easier access to computing education.",
            comments: "I have a raspberry pi machine and I have enjoyed making small projects to run on the machine. It is a super affordable way to get projects running wherever I would like them."
        }
        

        return(
            <div className="second-page">
                <h1>Hello {this.props.displayName}</h1>
                <p>This is the second page</p>
                <hr></hr>
                
                <MyButton handleClick={this.handleClick} data={{dataName: {...techReact}}}></MyButton>
                <MyButton handleClick={this.handleClick} data={{dataName: {...ai}}}></MyButton>
                <MyButton handleClick={this.handleClick} data={{dataName:{...raspberryPi}}}></MyButton>
                <Data data={this.state}></Data>
                <hr></hr>
            </div>
        )
    }

}