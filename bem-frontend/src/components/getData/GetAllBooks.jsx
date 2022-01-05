import React from 'react';
import { DisplayPosts } from '..';
const GetAllBooks = ({ books, type }) => {
  return (
    <div className='all-books'>
      <div className={`${type}__container`}>
        <h2 className={`${type}__container-title`}>{books.data.length > 1 ? 'Böcker' : 'Bok'}  ({books.data.length})</h2>
        <div className={`${type}__container__gallery`}>
          <div className={`${type}__container__gallery__posts`}>
            <DisplayPosts posts={books.data} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllBooks;