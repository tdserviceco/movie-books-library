import React from 'react';
import { GetAllMovies, GetAllBooks } from '..';

const GetCategoryById = ({ categoryData }) => {
  return (
    <div className='categories__container'>
      <GetAllMovies type='movies' movies={categoryData.movies} />
      <GetAllBooks type='books' books={categoryData.books} />
    </div>
  );
};

export default GetCategoryById;