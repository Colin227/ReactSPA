import React from 'react';
import './styles/navbar.css';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {className: 'nav-active'}
    }
    // Simple Navbar with buttons that call the parent component's click
    // handler method.
    render() {
        return(
            <ul className="navbar-container"> 
                <li className="navbar-element"><button className="navbar-button" onClick={() => this.props.handleClick(1)} type="button" value="1">First Page</button></li>
                <li className="navbar-element"><button className="navbar-button" onClick={() => this.props.handleClick(2)} type="button" value="2">Second Page</button></li>
                <li className="navbar-element"><button className="navbar-button" onClick={() => this.props.handleClick(3)} type="button" value="3">Third Page</button></li>
                <li className="navbar-element "><button className="navbar-button signout-button" onClick={() => this.props.toggleLogin(false, null)} type="button" value="0">Sign Out</button></li>
                <li className="navbar-element nav-display-name">Welcome: {this.props.displayName}</li>
            </ul>
        )
    }
}