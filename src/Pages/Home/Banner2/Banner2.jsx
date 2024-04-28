import { FaLocationArrow } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
const Banner2 = () => {
  return (
    <section>

      <div className="hero h-[350px] " style={{ backgroundImage: 'url(	https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cta_bg_6.jpg)' }}>

        <div className="  ">
          <div className="  flex items-center justify-around mx-auto gap-20 w-11/12 ">


            <div className="w-full text-start text-white">
              <h1 className="mb-2 text-6xl font-extrabold tracking-tighter">Agriculture Matters To </h1>


              <blockquote className="text-5xl mt-2 font-semibold t text-slate-900 py-2">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span className="relative text-teal-100 mb-5 text-5xl font-extrabold tracking-tighter">The Future Of Bangladesh</span>
                </span>

              </blockquote>


              <p className="mb-5 text-lg my-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn flex items-center justify-center border-none text-white hover:text-black text-lg font-bold bg-[#5dc001] ">BUY PRODUCTS <FaLocationArrow /></button>
            </div>
            <div className="w-full mx-auto  text-end flex justify-center items-center">
              <FaRegCirclePlay className="text-7xl " />
            </div>
          </div>


        </div>
      </div>

    </section>
  );
};

export default Banner2;