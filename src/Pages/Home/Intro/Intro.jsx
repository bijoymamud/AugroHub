// import React from 'react';

// const Intro = () => {
//   return (
//     <section className='my-32 w-5/6 mx-auto'>

//       <div className='flex items-center justify-center gap-20'>
//         <div className=' w-5/6'>
//           <img className='rounded-3xl' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_5_1.jpg" alt="" />
//         </div>


//         <div className='w-full '>

//           <h3 className='text-5xl font-bold'>High Quality Agriculture  & <br /> </h3>

//           <h3 className='mt-2 text-5xl font-bold'><span className='space-y-10'>Organic Product</span> <span className='text-[#5dc001] '>Farm</span>
//           </h3>

//           <p className='text-gray-500 w-10/12 my-10 text-lg'>There are many variations of passages of ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>





//           <div className='flex items-center justify-between gap-10 w-11/12'>

//             <div className='flex items-center justify-center gap-5'>
//               <div>
//                 <img className='h-[80px]' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_list_1.svg" alt="" />
//               </div>
//               <div>
//                 <h3 className='text-2xl font-bold'>100% Guaranteed
//                   Organic Product</h3>
//               </div>
//             </div>


//             <div className='md:flex items-center justify-center gap-5'>
//               <div>
//                 <img className='h-[80px]' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_list_2.svg" alt="" />

//               </div>
//               <div>
//                 <h2 className='text-2xl font-bold'>
//                   Top-Quality Healthy
//                   Foods Production</h2>
//               </div>
//             </div>

//           </div>

//           <div className='flex justify-center items-center gap-4'>
//             <div className="border-l-4 border-[#5dc001]  h-[50px] ">

//             </div>
//             <span className='mr-5 w-5/6 '>Understanding the environments, situations, and contexts in which users will interact with the product. This informs design decisions related to usability and functionality.</span>
//           </div>



//         </div>

//       </div>
//       <div className='box'>

//         <div className='bg-[#5dc001] text-center pt-3 w-1/6 h-[150px] rounded-3xl'>
//           <span className='pt-5'><h2 className='text-6xl font-bold text-white'>25+</h2>
//             <h5 className='text-lg font-extrabold mt-2 text-white'>Years of Experience in <br /> Agriculture services</h5></span>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Intro;




const Intro = () => {
  return (
    <section className='my-32 w-5/6 mx-auto'>
      <div className='flex items-center justify-center gap-20'>
        <div className='w-5/6'>
          <img className='rounded-3xl' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_5_1.jpg" alt="" />
        </div>
        <div className='w-full relative'>
          <div className='box absolute bottom- transform -translate-x-[240px] left-0 px-2 drop-shadow-xl'>
            <div className='bg-[#5dc001] hover:bg-amber-500 text-center pt-3 w-full h-[150px] rounded-3xl'>
              <span className='pt-5'>
                <h2 className='text-6xl font-bold text-white'>25+</h2>
                <h5 className='text-lg font-extrabold mt-2 px-2 text-white'>Years of Experience in <br /> Agriculture services</h5>
              </span>
            </div>
          </div>
          <div className='w-full'>


            <h3 className='text-5xl font-bold '>High Quality Agriculture & <br />
              <blockquote className="text-5xl mt-5 font-semibold t text-slate-900">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span className="relative text-white">Organic Product</span>
                </span>

              </blockquote>

            </h3>


            <p className='text-gray-500 w-10/12 my-10 text-lg'>There are many variations of passages of ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>
            <div className='flex items-center justify-between gap-10 w-11/12'>
              <div className='flex items-center justify-center gap-5'>
                <div>
                  <img className='h-[80px]' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_list_1.svg" alt="" />
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>100% Guaranteed Organic Product</h3>
                </div>
              </div>
              <div className='md:flex items-center justify-center gap-5'>
                <div>
                  <img className='h-[80px]' src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/about_list_2.svg" alt="" />
                </div>
                <div>
                  <h2 className='text-2xl font-bold'>
                    Top-Quality Healthy Foods Production
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-center items-center my-5 gap-4'>
                <div className="border-l-4 border-[#5dc001]  h-[50px] "></div>
                <span className='mr-5 w-5/6 '>Understanding the environments, situations, and contexts in which users will interact with the product. This informs design decisions related to usability and functionality.</span>
              </div>
              <button className='btn btn-primary bg-amber-600 border-none  ms-10 text-white hover:bg-green-600'>Discover More</button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
