import PopularList from "../Components/PopularList";


const UseCategory = ({ items }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 space-y-10 '>
                {
                    items?.map(item => <PopularList key={item._id} item={item}></PopularList>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <button className='btn btn-outline  border-0 border-b-4 mt-4'>Order Your Food</button>
            </div>
        </>
    );
};

export default UseCategory;