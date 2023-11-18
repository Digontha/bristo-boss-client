import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../UseHook.jsx/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../UseHook.jsx/useCart';

const RecommendCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item || {};
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = () => {

        const cartItem = {
            menuId: _id,
            name,
            image,
            price,
            email: user?.email
        }
        axiosSecure.post("/carts", cartItem)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire('Add Successfully')
                    refetch()

                }
            })
    }

    return (
        <div>
            <div className="card h-[500px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-full h-60">
                    <img src={image} alt="Shoes" className="rounded-xl   h-60" />

                </figure>
                <div className='w-12 absolute end-10 top-8 '>
                    <p className='bg-black rounded-lg text-white'>${price}</p>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div onClick={handleAddToCart} className="card-actions">
                        <button className="btn btn-outline btn-neutral">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;