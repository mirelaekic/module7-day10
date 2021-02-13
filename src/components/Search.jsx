import React, { Component } from "react";
import { connect } from "react-redux";
import "./Search.css";
import Result from "./Result";
import {Container } from "react-bootstrap"
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getWeather: (query) =>
    dispatch(async (dispatch, getState) => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e9af686df62def8f8f6557c77ae7ab51`
      );
      let weather = await response.json();
      if (response.ok) {
        dispatch({
          type: "GET_WEATHER",
          payload: weather,
        });
        console.log(weather, "IN FETCH");
      } else {
        console.log(weather);
      }
    }),
});
class Search extends React.Component {
  state = {
    weather: {},
    query: "",
  };
  fetchweateher = async (query) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e9af686df62def8f8f6557c77ae7ab51`
      );
      if (response.ok) {
        let weather = await response.json();
        this.setState({ weather: weather });
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getWeather(this.state.query);
    this.fetchweateher(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    const { weather } = this.state;
    console.log(this.state.weather, "DATAA");
    return (
      <div>
        <div id="form-container">
          <form id="form" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              id="form-input"
              onChange={(e) => this.setState({ query: e.currentTarget.value })}
              value={this.state.query}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        {this.state.weather.name === undefined ? (
            <Container className="mt-5"><h2 style={{color:"white"}}>Search for the city</h2></Container>
        ) : (
          <Result data={weather} />
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
