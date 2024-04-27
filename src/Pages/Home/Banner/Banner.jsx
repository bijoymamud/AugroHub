

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZgDCN92/pexels-pixabay-219794.jpg)' }}>
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <div>
            <h1 className="mb-5  font-extrabold text-8xl "><span className="text-amber-500">TESTY</span> & HEALTHY</h1>
            <h1 className="font-extrabold text-7xl text-white">FRESH <span className="text-[#5dc001] font-semibold">FOOD</span></h1>
            <div className="md:mt-10 w-5/6 mx-auto">
              <p className="mb-5 text-gray-200">Fresh Harvests, Direct to You: Connecting Farmers to Your Plate! Welcome to <span className="text-xl text-amber-600 font-bold">AGRO-HUB</span>, where we bridge the gap between farmers and consumers, delivering the freshest vegetables from local fields to your doorstep. Our platform champions transparency, sustainability, and community, ensuring you receive top-quality produce while empowering farmers with fair compensation. .</p>
              <button className="btn btn-primary bg-amber-600 border-none mt-5 hover:bg-black">Order Now</button>
            </div>
          </div>

          {/* <div>
            <img src="https://i.ibb.co/5scGjqb/Raununculus-Trays-2-removebg-preview.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;