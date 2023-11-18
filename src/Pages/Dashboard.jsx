import { FaHome, FaList, FaUser } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:gap-20  lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><FaList></FaList></label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                        <div className='flex flex-col text-center mb-10'>
                            <a className="btn btn-ghost normal-case text-2xl"> <span>BISTRO BOSS</span></a>
                            <span className='text-xl'>R e s t a u r a n t</span>
                        </div>
                        {/* Sidebar content here */}
                        <NavLink to="/dashboard"><li className="text-xl font-medium"><a><FaHome></FaHome> Admin Home</a></li></NavLink>
                        <NavLink to="/dashboard/addItem"><li className="text-xl font-medium"><a><ImSpoonKnife></ImSpoonKnife> add items</a></li></NavLink>
                        <NavLink to="/dashboard/manageItem"><li className="text-xl font-medium"><a><FaList></FaList> Manage bookings</a></li></NavLink>
                        <NavLink to="/dashboard/users"> <li className="text-xl font-medium"><a><FaUser></FaUser> all users</a></li></NavLink>
                        <hr className="mt-10 mb-10" />
                        <NavLink to="/"><li className="text-xl font-medium"><a><FaHome></FaHome>Home</a></li></NavLink>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;