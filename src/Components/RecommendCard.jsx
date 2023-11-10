import React from 'react';

const RecommendCard = ({ item }) => {
    const { name, image, recipe,price } = item || {};
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-neutral">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;