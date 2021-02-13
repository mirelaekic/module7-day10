import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Moment from "react-moment";
import MyCard from "./MyCard";
export default class Result extends Component {
  state = {
    image: [],
  };
  fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = ((fTemp - 32) * 5) / 9;
    const message = `${fToCel}\xB0C.`;
    console.log(message);
    return message;
  }
  fetchImage = async (cityname) => {
    try {
      let resp = await fetch(
        `https://api.pexels.com/v1/search?query=${cityname}+query&per_page=1&page=1`,
        {
          headers: {
            Authorization: "563492ad6f917000010000014e53795a7aac4127ba65acf8c8643e17",
          },
        }
      );
      if (resp.ok) {
    
        
        let img = await resp.json();
         const [first] = img.photos
         console.log(first.src.original)
        console.log(img.photos[0].src.large, "DATA");
        this.setState({ image: first.src.original });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchImage(this.props.data.name);
  }
  render() {
      console.log(this.state.image, "THE IMAGE")
    const { data } = this.props;
    return (
      <Container className="mt-5">
        <h1 style={{color:"white"}}>{data.name} today</h1>
        <MyCard
          info={data}
          celsiusT={this.fToC(data.main.temp)}
          feelsLike={this.fToC(data.main.feels_like)}
          sunrise={<Moment format="LTS">{data.sys.sunrise}</Moment>}
          sunset={<Moment format="LTS">{data.sys.sunset}</Moment>}
          image={this.state.image}
        />
      </Container>
    );
  }
}
