import React from 'react';
import RecommendCard from '../Components/RecommendCard';

const UseOrder = ({items}) => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-10'>
            {
                items?.map(item => <RecommendCard key={item._id} item={item}></RecommendCard>)
            }
        </div>
        
    </>
    );
};

export default UseOrder;