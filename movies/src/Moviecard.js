import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }
  addStars = () => {
    if (this.state.stars >= 10) {
      return;
    }
    // form - I
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // form - II
    this.setState((previousState) => {
      return {
        stars: previousState.stars + 0.5,
      };
    });
    // this.state.stars += 0.5;
    // console.log("Star added", this.state.stars);
  };
  decreaseStar = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((previousState) => {
      return {
        stars: previousState.stars - 0.5,
      };
    });
  };
  render() {
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
              alt="Poster"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                  onClick={this.decreaseStar}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                  alt="stars"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
