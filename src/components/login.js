import React from "react";
import CreateAccount from "./createAccount";
import './styles/login.css';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { accountExists: false };
        this.toggleAccountExists = this.toggleAccountExists.bind(this);
        this.loginHandler = this.loginHandler.bind(this); //must bind "this" in event handler to correct context
    }

    // check for account in localStorage
    // if exists, change state of accountExists to true
    getAccount = () => {
        let account = localStorage.getItem("account");
        if (account !== null) {
            this.setState({ accountExists: true });
        }
    };

    // On component mount, check for account in localStorage
    componentDidMount() {
        this.getAccount();
    }
    createAccountHandler() {
        this.setState({ accountExists: false });
    }

    // During log in event, this gets the username and password from localStorage
    // then compares them to the current input values stored in state
    loginHandler(e) {
        e.preventDefault();
        console.log("Attempting to login..."); // Testing purposes
        let account = localStorage.getItem("account");
        account = JSON.parse(account);

        if (account !== null) {
            if (
                this.state.usernameLogin === account["username"] &&
                this.state.passwordLogin === account["password"]
            ) {
                console.log("Logged in successfully");

                this.props.toggleLogin(true, account["displayname"]);
            } else {
                alert("Username or password was incorrect.");
            }
        } else {
            console.log("Please create an account");
        }
        // console.log(this.state.password);
    }

    handleChange = (e) => {
        const input = e.target; // key is set from the input
        const value = input.value; // value is set
        this.setState({ [input.name]: value });
    };

    // Toggle accountExists state
    toggleAccountExists() {
        this.setState((prevState) => ({
            accountExists: !prevState.accountExists,
        }));
    }

    render() {
        return this.state.accountExists ? (
            <div className="login-form">
                <h2>Login Here!</h2>
                <form>
                    <label className="form-label">
                        <input
                            type="text"
                            name="usernameLogin"
                            placeholder="Username"
                            autoComplete="Username"
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <br></br>
                    <label className="form-label">
                        
                        <input
                            type="password"
                            name="passwordLogin"
                            placeholder="Password"
                            autoComplete="Password"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <button className="form-label" type="button" onClick={this.loginHandler}>
                    Log in
                </button>

                <p>Don't have an account yet?</p>
                <button className="form-label" type="button" onClick={this.toggleAccountExists}>
                    Create One
                </button>
                </form>

            </div>
        ) : (
            <div className="login-form">
                <h2>Create an Account</h2>
                <CreateAccount
                    accountExists={this.state.accountExists}
                    toggleAccountExists={this.toggleAccountExists}
                ></CreateAccount>
            </div>
        );
    }
}
