import { FaArrowCircleRight } from "react-icons/fa";

const SellingProduct = () => {
  return (
    <section>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/service_bg_2.jpg)' }}>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="my-24">
            <h1 className="mb-5 text-3xl   text-amber-500">What We Do</h1>
            <div className="md:flex items-center justify-center">

              <p className="mb-5 text-6xl text-black font-bold ">Currently We Are Selling</p>
            </div>
            <button className="text-4xl font-bold tracking-wide text-[#5dc001]">Organic Food</button>

            <div className="flex justify-center items-center gap-10 my-20 ">

              <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full h-[200px] transition-transform duration-300 transform hover:scale-110' src="https://i.ibb.co/0fxxnmT/close-up-man-holding-corn-plant.jpg" alt="agricultural pic" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl text-black tracking-widest">AGRICULTURE</h2>
                    <p className="text-start text-gray-600 text-base">Seeing rather her you not esteem men settle genius excuse.</p>
                    <div className="card-actions justify-end">
                      <FaArrowCircleRight className="text-4xl text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full h-[200px] transition-transform duration-300 transform hover:scale-110' src="https://i.ibb.co/0qP1282/close-up-box-with-vegetables-hands-mature-man.jpg" alt="VEGETABLE" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl text-black tracking-widest">FRESH VEGETABLE</h2>
                    <p className="text-start text-gray-600 text-base">Organic rather her you not esteem men settle genius farm.</p>
                    <div className="card-actions justify-end">
                      <FaArrowCircleRight className="text-4xl text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full h-[200px] transition-transform duration-300 transform hover:scale-110' src="https://i.ibb.co/hd8SpQ1/christian-burri-ho-DOPpf-Acm-I-unsplash.jpg" alt="DAIRY FARM" /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl text-black tracking-widest">DAIRY FARM</h2>
                    <p className="text-start text-gray-600 text-base">Fresh & rather her you not esteem men settle genius crops.</p>
                    <div className="card-actions justify-end">
                      <FaArrowCircleRight className="text-4xl text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>


              {/* <div className="flex justify-center items-center gap-10 my-20">
                <div className="card-container">
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure className="card-image overflow-hidden">
                      <img className='w-full h-[300px] transition-transform duration-300 transform hover:scale-110' src="https://i.ibb.co/0fxxnmT/close-up-man-holding-corn-plant.jpg" alt="agricultural pic" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl text-black tracking-widest">AGRICULTURE</h2>
                      <p className="text-start text-gray-600 text-base">Seeing rather her you not esteem men settle genius excuse.</p>
                      <div className="card-actions justify-end">
                        <FaArrowCircleRight className="text-4xl text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>



              </div> */}

            </div>


          </div>
        </div>





      </div>
    </section>
  );
};

export default SellingProduct;