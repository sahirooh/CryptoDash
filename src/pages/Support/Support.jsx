import React from 'react'
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

const Support = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="flex-grow">
        <Header title={'Support'} />
      </div>
    </div>
  );
}

export default Support