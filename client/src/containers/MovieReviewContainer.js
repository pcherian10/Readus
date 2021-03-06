import React, { Component } from 'react';

import MovieReviewList from '../components/movieReview/MovieReviewList'

const uri = `https://api.nytimes.com`;

class MovieReviewContainer extends Component {
  state = {
    movies: []
  };

  getMovies = () =>{
    fetch(`${process.env.REACT_APP_API_URL}/svc/movies/v2/reviews/search.json?
      &api-key=${process.env.REACT_APP_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({movies: data.results}))
  };


  componentDidMount(){
    this.getMovies()
  };

  render(){
    return(
      <MovieReviewList movieReview={this.state.movies} />
    );
  }

};

export default MovieReviewContainer
