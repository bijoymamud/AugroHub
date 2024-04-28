import { FaStar } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-20 w-4/6 mx-auto">
      <h2 className="text-2xl text-[#5dc001] text-center">Product Price</h2>
      <h2 className="text-5xl font-extrabold text-center pt-1 mb-20">Our Best Product Price</h2>

      <div className="grid grid-cols-3 gap-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-full w-50 h-72 transition-transform duration-300 transform hover:scale-110" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold hover:text-[#5dc001] ">Orange Fooods</h2>
            <div className="flex gap-2 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-base text-gray-500 py-3">Organic farmers use compost, cover crops, and organic amendments to enrich the soil with essential nutrients.…</p>
            <div className="card-actions">
              <button className="btn w-[80px] px-5 rounded-3xl bg-[#5dc001] border-none text-white hover:bg-[#5dc001] text-2xl"> 23.99</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#5dc001] shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://images.pexels.com/photos/10048183/pexels-photo-10048183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-50 h-72 transition-transform duration-300 transform hover:scale-110" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold text-white hover:text-black">Organic Drinks</h2>
            <div className="flex gap-2 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-base text-white py-3">Organic farmers use compost, cover crops, and organic amendments to enrich the soil with essential nutrients.…</p>
            <div className="card-actions">
              <button className="btn w-[80px] px-5 rounded-3xl bg-black border-none text-white hover:text-black hover:bg-white text-2xl"> 23.99</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" className="rounded-full w-50 h-72 transition-transform duration-300 transform hover:scale-110" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-extrabold">Fresh Vegetables</h2>
            <div className="flex gap-2 text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-base text-gray-500 py-3">Organic farmers use compost, cover crops, and organic amendments to enrich the soil with essential nutrients.…</p>
            <div className="card-actions">
              <button className="btn w-[80px] px-5 rounded-3xl bg-[#5dc001] border-none text-white hover:bg-[#5dc001] text-2xl"> 19.99</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;