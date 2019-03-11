import React from 'react';
import DetailsMovie from './Frontpage/DetailsMovie';

const MovieList = (props) => (

  <div className='testing'>
  {console.log(props.movie)}
    {props.movie.map(item => (
      <div className='item poster card' key={ item.title }>
      <DetailsMovie movie={ item } />
      </div>
    ))}
    </div>
);

export default MovieList;
