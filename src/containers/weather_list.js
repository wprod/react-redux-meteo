import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { weather } from '../actions/index';

class WeatherList extends Component {
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
