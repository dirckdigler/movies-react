import React, { Component } from 'react';
import Navbar from './../navbar/Navbar';
import { popular } from './../../constants/ApiUrls';
import MovieList from './../MovieList';


class FrontpageMovies extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  };

  getData = cover_items => {
    console.log(cover_items, 'data');
    debugger;
  }

  componentDidMount() {
    fetch(popular)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result.results
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    const { error, isLoaded, data} = this.state;
    if (error) {
      return <div>Error: { error.message }</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='page_wrap movie_wrap'>
          <Navbar></Navbar>
          <div className='media'>
            <h1 className='title'>Películas Populares</h1>
            <div className='results flex results_poster_card'>
              <MovieList movie={ data } />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default FrontpageMovies;
