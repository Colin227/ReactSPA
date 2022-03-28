import React from "react";

// Account creation form component
export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { accountExists: props.accountExists, username: null, password: null, displayname: null };
        
        // Must bind these methods due to passing them through to the child components
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
    }
    // Handles setting the state for username and password
    // Updates as the input text value changes
    handleChange = (e) => {
        const input = e.target; // key is set from the input target 
        const value = input.value; // value is set
        this.setState({ [input.name]: value }); 
    };

    handleCreateAccount(e) {
        e.preventDefault(); // stop page from default refresh event
        
        // Regex expression checking password for only numbers
        let passNums = /^[0-9]+$/.test(this.state.password);
        
        // If there are non-numeric characters, passNums will evaluate
        // as false, alerting the user to only input numbers.
        if (passNums === false){
            alert('Passwords must contain numeric values only!');
            return;
        }

        // create a json string for the account values
        let accountjson = JSON.stringify({"username": this.state.username, "password": this.state.password, "displayname": this.state.displayname});
        localStorage.setItem("account", accountjson); // store account info in local storage
        this.props.toggleAccountExists();
    }

    render() {
        return (
            <form>
                <label className="form-label">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="Username"
                    onChange={this.handleChange}
                ></input></label>
                <br></br>
                <label className="form-label"> 
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="Password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onChange={this.handleChange}
                ></input></label>
                <br></br>
                <label className="form-label"> 
                <input
                    type="text"
                    name="displayname"
                    placeholder="Display Name"
                    autoComplete="nickname"
                    onChange={this.handleChange}
                ></input></label>
                <br></br>
                <button type="button" onClick={this.handleCreateAccount}>Create Account</button>
                <p>Already have an account?</p>
                <button type="button" onClick={this.props.toggleAccountExists}>Log In</button>
            </form>
            
        );
    }
}
