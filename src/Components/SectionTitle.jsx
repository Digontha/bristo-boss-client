import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='my-5 w-3/12 mx-auto text-center'>
            <p className='text-[#D99904] text-xl py-2'>{subHeading}</p>
            <p className='text-3xl border-y-4 py-4'>{heading}</p>
        </div>
    )
};

export default SectionTitle;