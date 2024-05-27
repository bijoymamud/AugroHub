

const Banner = () => {
  return (
    <section>

      <div className="hero h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/ZgDCN92/pexels-pixabay-219794.jpg)' }}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <div>
              <h1 className="mb-5  font-extrabold text-8xl "><span className="text-amber-500">TESTY</span> & HEALTHY</h1>

              <blockquote className="text-5xl mt-5 font-semibold t text-slate-900 py-2">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span className="relative text-white text-7xl font-extrabold tracking-widest">FRESH FOOD</span>
                </span>

              </blockquote>



              <div className="md:mt-10 w-4/6 mx-auto text-lg">
                <p className="mb-5 text-gray-200">Fresh Harvests, Direct to You: Connecting Farmers to Your Plate! Welcome to <span className="text-xl text-amber-600 font-bold">AGRO-HUB</span>, where we bridge the gap between farmers and consumers, delivering the freshest vegetables from local fields to your doorstep.</p>
                <button className="btn btn-primary bg-amber-600 border-none mt-5 hover:bg-black">Order Now</button>
              </div>
            </div>

            {/* <div>
            <img src="https://i.ibb.co/5scGjqb/Raununculus-Trays-2-removebg-preview.png" alt="" />
          </div> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;