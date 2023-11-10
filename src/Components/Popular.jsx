import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import PopularList from './PopularList';

const Popular = () => {
    const [Food, setFood] = useState([])
  
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])

    const popular = Food.filter(food =>food.category==="popular")
    console.log(popular);

    return (
        <>
            <div>
                <SectionTitle
                    heading="FROM OUR MENU"
                    subHeading="---Check It Out---"
                >
                </SectionTitle>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 space-y-5'>
             {
                popular.map(food=><PopularList key={food._id} item={food}></PopularList>)
             }
            </div>
        </>
    );
};

export default Popular;