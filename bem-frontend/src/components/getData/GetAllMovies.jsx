import React from 'react';
import { DisplayPosts } from '..';
const GetAllMovies = ({ movies, type }) => {
  return (
    <div className='all-movies'>
      <div className={`${type}__container`}>
        <h2 className={`${type}__container-title`}>{movies.data.length > 1 ? 'Filmer' : 'Film'}  ({movies.data.length})</h2>
        <div className={`${type}__container__gallery`}>
          <div className={`${type}__container__gallery__posts`}>
            <DisplayPosts posts={movies.data} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllMovies;