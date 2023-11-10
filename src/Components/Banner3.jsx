import React from 'react';
import SectionTitle from './SectionTitle';
import banner from '../assets/home/featured.jpg';
import moment from 'moment/moment';

const Banner3 = () => {
    const style = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        width:"full",
        height:"600px",
       
    }
    return (
        <>
            <div className='mb-20 bg-fixed ' style={style}>
           <div className='bg-black bg-opacity-60 h-full'>
           <div>
                    <SectionTitle
                        heading={"FROM OUR MENU"}
                        subHeading={"---Check it out---"}
                    >

                    </SectionTitle>
                </div>

                <div className='flex justify-center  items-center gap-10  '>
                    <div>
                        <img className='w-[400px] h-[300px]' src={banner} alt="" />
                    </div>
                    <div className='w-[600px] text-white'>
                        <p className='text-xl'>{moment().format('dddd,M,YYYY')}</p>
                        <p className='text-2xl'>WHERE CAN I GET SOME?</p>
                        <p className='text-base font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                </div>
           </div>


            </div>
        </>
    );
};

export default Banner3;