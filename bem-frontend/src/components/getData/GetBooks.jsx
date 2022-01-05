import React from 'react';
import { DisplayPosts, Pagination } from '..';
import { useSelector } from 'react-redux';
const GetBooks = ({ type }) => {
  const bookData = useSelector(state => state.paginationDataBooks);
  if (bookData === null) {
    return (<></>)
  }
  else {
    const { books } = bookData;
    return (
      <>
        {books !== null &&
          <div className={`${type}__container`}>
            <h2 className={`${type}__container-title`}>{books.data.length > 1 ? 'Böcker' : 'Bok'}  ({books.meta.pagination.total})</h2>
            <div className={`${type}__container__gallery`}>
              <div className={`${type}__container__gallery__posts`}>
                <DisplayPosts posts={books.data} type={type} />
              </div>
              <Pagination type='books' meta={books.meta.pagination} />
            </div>
          </div>
        }
      </>
    );
  }

};

export default GetBooks;