import React, { useEffect, useState } from 'react';
import { Errors, Nav } from '../components';

const HTMLErrorCodes = ({ status }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setLoading(false)
  })
  return (
    <>
      <Nav loading={loading} />
      <Errors status={status} />
    </>
  );
};

export default HTMLErrorCodes;