import React from 'react';
import bannerImg from "../assets/home/banner.jpg"

const Banner2 = () => {
    const banner={
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        width:"full",
        height:"400px",


    }
    return (
        
        <div className="hero bg-base-200 rounded-2xl mb-10" style={banner}>
        <div className="hero-content text-center px-32">
          <div className="w-full  bg-white p-10 rounded-2xl">
            <h1 className="text-3xl font-bold uppercase">Bistro Boss</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           
          </div>
        </div>
      </div>
        
    );
};

export default Banner2;