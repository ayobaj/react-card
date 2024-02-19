import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="w-screen flex fixed text-white">
        <span className=" flex gap-7 mt-7 ml-[1000px]">
        <NavLink to={'/'} className='home border border-white py-3 px-6 rounded-3xl bg-green-700  hover:bg-green-400'>Home</NavLink>
        <NavLink to={'/players'} className='players border border-white py-3 px-6 bg-green-700 rounded-3xl hover:bg-green-400 '>Players</NavLink>
        </span>
        </div>
    )
}

export default NavBar
 