import React from "react";

class MovieCard extends React.Component {
  render() {
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
            <div className="title">The Avengers</div>
            <div className="plot">
              Earth's mightiest heroes must come together and learn to fight as
              a team if they are going to stop the mischievous Loki and his
              alien army from enslaving humanity.
            </div>
            <div className="price">Rs. 199</div>
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">Star</div>
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