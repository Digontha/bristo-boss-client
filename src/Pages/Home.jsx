import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Banner2 from '../Components/Banner2';
import Call from '../Components/Call';
import Popular from '../Components/Popular';
import Recommends from '../Components/Recommends';
import Banner3 from '../Components/Banner3';
import Testimonial from '../Components/Testimonial';
import Cover from '../Components/Cover';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <Popular></Popular>
            <Call></Call>
            <Recommends></Recommends>
            <Banner3></Banner3>
            <Testimonial></Testimonial>
            
            
        </div>
    );
};

export default Home;