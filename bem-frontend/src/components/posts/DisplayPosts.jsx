import React from 'react';
import { PostContent } from '.';
import { useSelector } from 'react-redux';

const DisplayPosts = ({ posts, type }) => {
  let pageNumber
  if (type === 'books') {
    pageNumber = useSelector(state => state.paginationNumberBooks)
  }
  else {
    pageNumber = useSelector(state => state.paginationNumberMovies)
  }

  return posts.map((post, key) => (

    <div className={`${type}__container__gallery__posts-content ${key === 0 && posts.length > 1 && pageNumber === 1 ? 'feature' : ''}`} key={key}>
      <img
        src={`http://localhost:8082/uploads/${post.attributes.cover.data.attributes.formats.small.hash}${post.attributes.cover.data.attributes.formats.small.ext}`}
        srcSet={
          `http://localhost:8082/uploads/${post.attributes.cover.data.attributes.formats.medium.hash}${post.attributes.cover.data.attributes.formats.medium.ext} 920w,
      http://localhost:8082/uploads/${post.attributes.cover.data.attributes.formats.large.hash}${post.attributes.cover.data.attributes.formats.large.ext} 1366w,
      http://localhost:8082/uploads/${post.attributes.cover.data.attributes.hash}${post.attributes.cover.data.attributes.ext} 1920w,
      `
        }
        sizes='(min-width: 920px) 920px,
      (min-width: 1366px) 1366px,
      (min-width: 1920px) 1920px'

        alt={`${post.attributes.cover.data.attributes.caption}`}
        className={`${type}__container__gallery__posts-content-image`}
      />

      <PostContent type={type} data={post.attributes} />
    </div>
  ))
};

export default DisplayPosts;