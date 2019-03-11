import React from 'react';

const DetailsMovie = (props) => (
  <div className={`item_${props.movie.id}`}>
    <div className='image_content'>
      <a id={`movie_${props.movie.id}`} className="result" href={`/movie/${props.movie.id}`} title={props.movie.title} alt={props.movie.title}>
        <img className='poster' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ props.movie.backdrop_path }`}/>
      </a>
      <div className='info'>
        <div className='wrapper'>
          <a id={`movie_${props.movie.id}`} className="title result" href={`/movie/${props.movie.id}`}
          title={props.movie.title} alt={props.movie.title}>{props.movie.title}</a>
          <span>{props.movie.release_date}</span>
        </div>
        <div className='overview'>{props.movie.overview}</div>
        <p className="view_more"><a id={`movie_${props.movie.id}`} className="result" href={`/movie/${props.movie.id}`} title={props.movie.title} alt={props.movie.title}>Más Información</a></p>
      </div>
    </div>
  </div>

);

export default DetailsMovie;
