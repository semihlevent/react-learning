import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



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

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        } else if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Please accept location request..." />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);