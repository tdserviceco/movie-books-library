import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  useEffect(() => {
    document.title = 'Bibliotek av filmer och böcker';
  })
  return (
    <main className='landing'>
      <div className='landing__container'>
        <h1 className='landing__container-title'>
          Choose!
        </h1>
        <div className='landing__container__choices'>
          <div className='landing__container__choices-movies'>
            <Link to="movies">
              Movies
            </Link>
          </div>
          <div className='landing__container__choice-books'>
            <Link to="books">
              Books
            </Link>
          </div>
          <div className='landing__container__choice-all'>
            <Link to="all">
              All (books and movies)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;