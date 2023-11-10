

const PopularList = ({ item }) => {
    const { name, image, price, recipe } = item || {};
   
    return (
        <>
            <div className="flex items-center">
                <div>
                    <img className="w-28 h-24" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
                </div>

                <div className="ml-5 ">
                    <p className="uppercase">{name}------------</p>
                    <p className="font-medium">{recipe}</p>
                </div>

                <div>
                    <p className="text-[#BB8506]">{price}$</p>
                </div>
            </div>
        </>
    );
};

export default PopularList;