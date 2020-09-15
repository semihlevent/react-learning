import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {

    state = {lat: null, errorMessage: ''};


    constructor(props) {
        super(props);

        //this is the only time we do direct assignment
        
        
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My componenet was updated - it rerendered.");
    }

    render() {
        
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        } else if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <div>Loading...</div>;
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);