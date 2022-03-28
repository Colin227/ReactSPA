import React from "react";
import FirstPage from "./firstpage.js";
import SecondPage from "./secondpage.js";
import ThirdPage from "./thirdpage.js";
import Navbar from "./navbar.js";
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageToDisplay: 1 }; // possibly have which page to render here?
        this.navigateToPage = this.navigateToPage.bind(this);
    }
    navigateToPage(page) {
        this.setState({ pageToDisplay: page});
        
    }
    // This is the main page routing - render page corresponding to pageToDisplay value
    render() {
        let pageToDisplay = this.state.pageToDisplay;
        return pageToDisplay === 1 ? (
            <div>
                <Navbar
                    handleClick={this.navigateToPage}
                    toggleLogin={this.props.toggleLogin}
                    displayName={this.props.displayName}
                ></Navbar>
                <FirstPage displayName={this.props.displayName}></FirstPage>
            </div>
        ) : pageToDisplay === 2 ? (
            <div>
                <Navbar
                    handleClick={this.navigateToPage}
                    toggleLogin={this.props.toggleLogin}
                    displayName={this.props.displayName}
                ></Navbar>
                <SecondPage displayName={this.props.displayName}></SecondPage>
            </div>
        ) : pageToDisplay === 3 ? (
            <div>
                <Navbar
                    handleClick={this.navigateToPage}
                    toggleLogin={this.props.toggleLogin}
                    displayName={this.props.displayName}
                ></Navbar>
                <ThirdPage displayName={this.props.displayName}></ThirdPage>
            </div>
        ) : (
            <div>404: No page found</div>
        );
    }
}
