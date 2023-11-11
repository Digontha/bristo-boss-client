import React from 'react';
import RecommendCard from '../Components/RecommendCard';

const UseOrder = ({items}) => {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 space-y-10 mb-10'>
            {
                items?.map(item => <RecommendCard key={item._id} item={item}></RecommendCard>)
            }
        </div>
        
    </>
    );
};

export default UseOrder;