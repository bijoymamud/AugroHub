import React from 'react';


const PopularVag = () => {
  return (
    <section>

     

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JqjXbf9/close-up-old-farmer-holding-basket-vegetables-man-is-standing-garden-senior-black-apron.jpg)' }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-10/11">
              <p className="mb-2 text-xl ">FRESHNESS PICKED <span className='text-[#5dc001]'>JUST FOR YOU</span></p>

              <div className="border-b-4 w-[200px] mx-auto border-amber-500"></div>

              <blockquote className="text-5xl mt-10  mb-32 font-semibold t text-slate-900">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <h2><span className="relative text-white tracking-widert ">Quality Fruits & Vegetables</span></h2>
                </span>

              </blockquote>


              {/* <h1 className="mb-5 text-5xl font-bold">Quality Fruits & <span className='font-thin text-[#5dc001]'>Vegetables</span></h1> */}


              <div className='md:grid grid-cols-6 gap-10 text-white'>



                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white opacity-100">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_1.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Apple</h2>

                  </div>
                </div>


                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="	https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_2.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Blueberry</h2>

                  </div>
                </div>


                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_3.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Strawberry</h2>

                  </div>
                </div>


                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_4.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Eggplant</h2>

                  </div>
                </div>


                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_5.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Cabbage</h2>

                  </div>
                </div>


                <div className="card w-44  bg-transparent shadow-xl image-full hover:bg-white duration-300">
                  <figure></figure>
                  <div className="card-body">
                    <img className='w-[60px] mx-auto' src="	https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cat_2_6.png" alt="" />
                    <h2 className="card-title mx-auto text-center">Carrot</h2>

                  </div>
                </div>
















              </div>

            </div>
          </div>

        </div>
    
    </section >
  );
};

export default PopularVag;