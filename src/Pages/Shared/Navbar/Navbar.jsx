
import { Link } from 'react-router-dom';


const navItems = <>


  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/">Home</Link>

  </li>
  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/findDoc">About Us</Link>

  </li>

  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/services">Services</Link>
  </li>
  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/">Pages</Link>
  </li>
  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/">Blogs</Link>
  </li>

  <li tabIndex={0}>
    <Link className='font-bold text-lg text-white' to="/contact">Contact</Link>
  </li>





</>



const Navbar = () => {
  return (


    <div className="navbar bg-[#5DC001] h-24 navbar2 sticky__header md:px-20  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-white shadow bg-base-100 rounded-box w-52">
            {navItems}


          </ul>
        </div>
        <img className="w-[130px] mt-2" src="https://i.ibb.co/5kcWs2q/Green-Minimalist-Urban-Farming-Illustration-Organic-Food-Logo-1-removebg-preview.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {
            navItems
          }


        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex items-center gap-5'>
          {/* {user &&
            <div className="tooltip  tooltip-left mt-10" data-tip={user.displayName}>
              <button>  <img className='h-[40px] w-[40px] rounded-full' src={user?.photoURL} alt="" /> </button>
            </div>
          } */}

          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" ">
              {user &&
                <div className="tooltip  tooltip-left mt-10" data-tip={user.displayName}>
                  <button >  <img className=' mb-1 h-[40px] w-[40px] rounded-full' src={user?.photoURL} alt="" /> </button>
                </div>
              }
            </label>
            <ul tabIndex={0} className="dropdown-content 
             menu p-2 shadow bg-yellow-50 rounded w-48">



              {
                isAdmin ? <>
                  <li><Link to='/dashboard/manageUser
              '>Dashboard</Link></li></> : <>
                  <li><Link to='/dashboard/myAppointments
              '>Dashboard</Link></li></>
              }


            </ul>
          </div> */}

          {/* {user ?
            <button onClick={handleLogOut} className=""> <FaArrowRightFromBracket className="text-red-400 text-xl" />  </button> :
            <Link to='/login'>
              <button className=" btn">Login</button>
            </Link>

          } */}

          <div className="indicator md:flex items-center md:me-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5  md:mt-2 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

            <Link className='md:ms-5 btn btn-active bg-black border-none text-white hover:bg-amber-600 btn-accent' to="/">Shop Now</Link>

          </div>


        </div>

      </div>
    </div >

  );
};

export default Navbar;