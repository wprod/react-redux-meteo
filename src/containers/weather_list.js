import React, {Component} from "react";
import {connect} from "react-redux";
import {weather} from "../actions/index";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const data = cityData.list.map((weather) => weather.main);

        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        const {lat, lon} = cityData.city.coord; // ES6 <3
        console.log(lat);
        console.log(lon);


        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={data} dataKey={'temp'} fillColor={'orange'}/>
                </td>
                <td>
                    <Chart data={data} dataKey={'pressure'} fillColor={'red'}/>
                </td>
                <td>
                    <Chart data={data} dataKey={'humidity'} fillColor={'green'}/>
                </td>
            </tr>
        )
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}; // Similar to {weather: weather} ES6 !
}

// Also similar to :
// function mapStateToProps(state) {
//   return {weather: state.weather};
// }

export default connect(mapStateToProps)(WeatherList);
