import React from "react";
import Data from "./data";
import MyButton from "./mybutton";
export default class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {isTracking: false} };
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.showPosition = this.showPosition.bind(this);

        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        document.title = "Where am I?";
        // if (this.state.data.isTracking === true) {
        //     console.log('hello we are tracking now');
        // }
        
    }
    // Start tracking the location
    handleStartClick(e) {
        //console.log(e);
        this.setState({isTracking: true});
        // Get watch ID of the geolocation - this is used for the clearWatch method
        let watchId = navigator.geolocation.watchPosition(this.showPosition);
        this.setState({watchId: watchId});
        //console.log(watchId);

    }
    
    showPosition(position){
        let location = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
        this.setState({ data: {
            className: "button-start",
            title: "Current Location",  
            author: "Currently Tracking",  
            content: location,
            comments: "",
        }})
        // console.log(this.state.data);
    }
    // Stop tracking the location
    handleStopClick(e) {
        //console.log(e);
        this.setState({isTracking: false});
        navigator.geolocation.clearWatch(this.state.watchId);
        this.setState({ data: {
            className: "button-stop",
            title: "Current Location",  
            author: "Not Tracking",  
            content: "",
            comments: "",
        }});
    }
    render() {
        let startTracking = {
            className: "button-start",
            name: "Start Tracking",
            title: "Current Location",
            author: "Currently Tracking",
            content: "",
            comments: "",
        };
        let stopTracking = {
            className: "button-stop",
            name: "Stop Tracking",
            title: "",
            author: "Not Tracking",
            content: "",
            comments: "",
        };
        return (
            <div className="third-page">
                <h1>Hello {this.props.displayName}</h1>
                <MyButton
                    handleClick={this.handleStartClick}
                    data={{ dataName: { ...startTracking } }}
                ></MyButton>
                <MyButton
                    handleClick={this.handleStopClick}
                    data={{ dataName: { ...stopTracking } }}
                ></MyButton>
                <Data data={this.state.data}></Data>
            </div>
        );
    }
}
