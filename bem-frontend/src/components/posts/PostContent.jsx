import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Category } from '.';
const PostContent = ({ type, data }) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div className={`${type}__container__gallery__post-content-container`}>
      <button type="button" className="popup" onClick={() => setToggleStatus(!toggleStatus)}>
        {toggleStatus ? <Icon icon="si-glyph:arrow-two-up" className='rotate' /> : <Icon icon="si-glyph:arrow-two-up" />}
      </button>
      <div className={`${type}__container__gallery__post-content-wrapper ${toggleStatus ? 'active' : ''}`}>
        <div className={`${type}__container__gallery__post-content-more-information`}>
          <ul role="list">
            {type === 'movies' &&
              <>
                <li>
                  <h3>Title: {data.title}</h3>
                </li>
                <li>
                  <h3>Time: {data.length}t</h3>
                </li>
                <li>
                  <h3>Grade: {data.grade}</h3>
                </li>
                <li>
                  <h3>Release date: {data.releasedate}</h3>
                </li>
              </>
            }
            {type === 'books' &&
              <>
                <li>
                  <h3>Title: {data.title}</h3>
                </li>
                <li>
                  <h3>Author: {data.author}t</h3>
                </li>
                <li>
                  <h3>Grade: {data.grade}</h3>
                </li>
                <li>
                  <h3>Published: {data.published}</h3>
                </li>
                <li>
                  <h3>Pages: {data.pages}</h3>
                </li>
              </>
            }
          </ul>
        </div>
        <div className={`${type}__container__gallery__post-content-category`}>
          <h4>Categories</h4>
          <div className='categories'>
            <Category categoryData={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContent;