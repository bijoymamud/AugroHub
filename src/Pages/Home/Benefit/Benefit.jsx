import { FaCheckCircle } from "react-icons/fa";


const Benefit = () => {
  return (
    <section className='pt-32'>

      <div className="w-5/6 pt-32 mx-auto md:flex justify-center items-center">

        <div className="w-4/6">
          <h2 className="text-2xl pb-2 font-bold text-amber-600">WHY CHOOSE US</h2>
          <h2 className="text-5xl font-extrabold pb-1">The Most Complete</h2>
          <h2 className="text-5xl font-extrabold pb-5">Fresh Fruit And Vegetable <br /><span className='text-[#5dc001]'>Organic Farming.</span></h2>
          <p className="text-lg w-4/6 pb-10 text-gray-500">Organic farmers use mechanical methods such as hoeing, mulching, and mowing to control weeds. This helps prevent weed competition and preserve soil moisture</p>


          <div className="grid grid-cols-3 items-center justify-center w-full pb-15">

            <div>
              <h1 className="text-xl pb-2 font-bold">Organic Idea</h1>
              <h2 className="text-5xl font-extrabold text-[#5dc001]">80%</h2>
            </div>



            <div className=" font-bold">
              <div className="flex items-center gap-5 w-full">
                <FaCheckCircle className="text-[#5dc001] " /> Organic Food
              </div>
              <div className="flex items-center gap-5">
                <FaCheckCircle className="text-[#5dc001]" /> Fresh Vegetable
              </div>
              <div className="flex items-center gap-5">
                <FaCheckCircle className="text-[#5dc001]" /> Organic Fruits
              </div>
            </div>


          </div>
        </div>


        <div>

          <img src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/why_4_1.png" alt="" />

        </div>

      </div>

    </section>
  );
};

export default Benefit;