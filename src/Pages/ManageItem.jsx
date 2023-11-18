import React from 'react';
import useCart from '../UseHook.jsx/useCart';
import SectionTitle from '../Components/SectionTitle';

const ManageItem = () => {
    const [cart] = useCart()
    console.log(cart);
    return (
        <>
            <SectionTitle subHeading={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"}>

            </SectionTitle>

            <div className="lg:overflow-x-auto  lg:w-full mx-auto bg-slate-200 lg:p-10 ">
                <div className='text-2xl lg:ml-14 font-bold'>
                    Total Item : {cart?.length}
                </div>
                <table className="lg:table table-xs lg:w-full ">
                    {/* head */}

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>image</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        cart.map(item => <>
                            <tbody>

                                <tr>
                                    <th>

                                    </th>
                                    <td>
                                        <div className="lg:flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>${item?.price}</td>
                                    <th>
                                        <button className="btn btn-neutral btn-outline btn-xs">Update</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-warning btn-outline btn-xs">Delete</button>
                                    </th>
                                </tr>

                            </tbody>


                        </>)
                    }

                </table>
            </div>
        </>
    );
};

export default ManageItem;