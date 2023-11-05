import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingNewBugPage = () => {
  return (
    <div className='max-w-2xl'>
      <Skeleton />
      <Skeleton height="16rem"/>
    </div>
  );
};
    
export default LoadingNewBugPage;