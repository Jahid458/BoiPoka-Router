import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src={bannerImg}
        className="max-w-2xl  rounded-lg shadow-2xl " />
      <div>
        <h1 className="text-5xl font-bold py-10">Books to freshen up your bookshelf</h1>
        <button className="btn bg-green-700 text-white">View The Book List</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;