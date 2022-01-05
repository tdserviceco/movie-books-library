import React, { useEffect, useState } from 'react';
import { Loader, Nav, GetCategoryById } from '../components';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY_BY_ID } from '../GraphQL/Queries';
import { useParams } from 'react-router-dom';
const AllMoviesAndBooksByCategoryID = () => {
  const params = useParams();
  const [categoryDataById, setCategoryDataById] = useState(null);
  const { error, loading, data } = useQuery(QUERY_CATEGORY_BY_ID, {
    variables: {
      id: Number(params.categoryID)
    }
  });

  const getAllCategoryDataById = () => {
    !loading && setCategoryDataById(data.category.data.attributes)
  }


  useEffect(() => {
    getAllCategoryDataById()
  }, [data])
  return (
    <>
      <Nav loading={loading} />
      <section className='categories'>
        {loading && <Loader />}
        {!loading && categoryDataById !== null &&
          <GetCategoryById categoryData={categoryDataById} />
        }
      </section>
    </>
  );
};

export default AllMoviesAndBooksByCategoryID;