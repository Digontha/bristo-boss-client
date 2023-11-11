import React, { useEffect, useState } from 'react';
import RecommendCard from './RecommendCard';
import SectionTitle from './SectionTitle';

const Recommends = () => {
    const [Food, setFood] = useState([])
  
    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    const popular = Food.filter(food =>food.category==="popular")
    return (
       <>
       <SectionTitle
       heading={"CHEF RECOMMENDS"}
       subHeading={"---Should Try---"}
       >

       </SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-10'>
            {
                popular.map(food =><RecommendCard key={food._id} item={food}></RecommendCard>)
            }
        </div>
       </>
    );
};

export default Recommends;