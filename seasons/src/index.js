import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {

    constructor(props) {
        super(props);

        //this is the only time we do direct assignment
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }


    render() {
        
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>;
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