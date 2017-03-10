import React from 'react';
import './App.css';

class Body extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return (
            <div className="location">
                <h1>Where I Live</h1>
                <br/>
                <div id="map" >
                </div>
            </div>
        );
    }
}
export default Body;
