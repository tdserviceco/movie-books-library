import React from 'react';
import { Link } from 'react-router-dom';
const Category = ({ categoryData }) => {
  const { categories } = categoryData;
  return categories.data.map((c, key) => (
    <Link to={`/all/category/${c.id}`} key={key}>{c.attributes.name}</Link>
  ))
};

export default Category;