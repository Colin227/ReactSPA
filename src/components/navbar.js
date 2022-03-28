import React from 'react';
import './styles/navbar.css';


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; // add state here for active nav button to change class
    }
    toggleActive = (e) => {
        let inactiveContainer = e.currentTarget.parentNode; // Select the parent <ul> element
        
        // for (let i = 0; i < inactiveContainer.childNodes.length; i++){
        //     inactiveContainer.childNodes[i].firstChild.classList.remove('nav-active');
        //     inactiveContainer.childNodes[i].firstChild.classList.add('nav-inactive');
        //     // console.log(inactiveContainer.childNodes[i]);
        // }
        for (let i=0; i < inactiveContainer.children.length - 1; i++){
            // console.log(inactiveContainer.children[i].firstChild);
            let inactiveBtn = inactiveContainer.children[i].firstChild;
            inactiveBtn.classList.remove("nav-active");
            //inactiveContainer.children[i].firstChild.classList.add('nav-inactive');
        }
        // console.log(inactiveContainer.children);
        
        //console.log('toggleActive');
        //console.log(e.target.className);
        e.target.classList.add("nav-active");
        //console.log(e.target.className);
        //console.log(e.target.parentNode.parentNode);
        // this.classList.add('active-nav');
    }
    // Simple Navbar with buttons that call the parent component's click
    // handler method.
    render() {
        return(
            <ul className="navbar-container"> 
                <li className="navbar-element" onClick={this.toggleActive}><button className="navbar-button" onClick={() => this.props.handleClick(1)} type="button" value="1">First Page</button></li>
                <li className="navbar-element" onClick={this.toggleActive}><button className="navbar-button" onClick={() => this.props.handleClick(2)} type="button" value="2">Second Page</button></li>
                <li className="navbar-element" onClick={this.toggleActive}><button className="navbar-button" onClick={() => this.props.handleClick(3)} type="button" value="3">Third Page</button></li>
                
                <li className="navbar-element "><button className="navbar-button signout-button" onClick={() => this.props.toggleLogin(false, null)} type="button" value="0">Sign Out</button></li>
                <li className="navbar-element nav-display-name">Welcome: {this.props.displayName}</li>
            </ul>
        )
    }
}