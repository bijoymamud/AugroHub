import { FaArrowRight, FaCopyright, FaEnvelopeOpenText, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (

    <section>

      <div className="hero mt-10 h-[450px]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1158394/pexels-photo-1158394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="hero-overlay bg-opacity-60"></div>


        <div className="w-5/6 text-white mt-20 main_div ">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <FaEnvelopeOpenText className="text-7xl text-[#5dc001]" />
              <h2 className="font-extrabold text-3xl">Sign Up to Get Updates & <br /> News About Us</h2>
            </div>

            <div>
              <div className="flex items-center gap-5">
                <input type="text" placeholder="Email Address" className="input input-bordered rounded-full join-item bg-transparent border-white" />
                <button type="button" className="btn 
              border-none hover:bg-white hover:text-black btn-secondary rounded-full bg-[#448903] dark:text-gray-100">SUBSCRIBE</button>

              </div>
            </div>
          </div>
          <div className="border-b border-[#5dc001] my-10 "></div>

          <div className="2nd_mainDiv text-gray-300 flex items-center gap-32">

            <div className="w-2/6">
              <img className="mb-5 w-[95px] h-[90px]" src="https://i.ibb.co/5kcWs2q/Green-Minimalist-Urban-Fa…stration-Organic-Food-Logo-1-removebg-preview.png" alt="" />
              <p className="text-base">We provide specialized winterization services to safeguard your food during the off-season, and when spring arrives, we handle the thorough opening process.</p>

              <div className="w-3/4 grid  grid-cols-5 gap-5 mt-5 " >

                <button className="btn bg-transparent border-white hover:border-none hover:bg-[#5dc001]"><FaFacebookF className="text-xl text-white " /></button>

                <button className="btn bg-transparent border-white hover:border-none  hover:bg-[#5dc001]"><FaTwitter className="text-xl text-white " /></button>

                <button className="btn bg-transparent border-white hover:border-none hover:bg-[#5dc001]"><FaLinkedinIn className="text-xl text-white " /></button>

                <button className="btn bg-transparent border-white hover:border-none hover:bg-[#5dc001]"><FaInstagram className="text-xl text-white " /></button>


                <button className="btn bg-transparent border-white hover:border-none hover:bg-[#5dc001]"><FaYoutube className="text-xl text-white " /></button>

              </div>

            </div>

            <div>
              <div className="flex items-center gap-3">
                <img src="https://themeholy.com/wordpress/frutin/wp-content/plugins/frutin-core/assets/img/title_icon2.svg" alt="" />
                <h2>Categories</h2>
              </div>

              <div className="border-b pt-2 w-[130px] border-[#5dc001]"></div>

              <div className="py-10 text-base">
                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Fresh Fruits</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Fruit Juice</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Vegetables</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Meat & Fish</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Organic Fish</h1>
              </div>

            </div>

            <div>
              <div className="flex items-center gap-3">
                <img src="https://themeholy.com/wordpress/frutin/wp-content/plugins/frutin-core/assets/img/title_icon2.svg" alt="" />
                <h2>Quick Links</h2>
              </div>

              <div className="border-b pt-2 w-[130px] border-[#5dc001]"></div>

              <div className="text-base py-10">
                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />About Us</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Portfolio</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Help & FAQs</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Blog</h1>

                <h1 className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer"><FaArrowRight className="text-lg font-thin" />Contact Us</h1>
              </div>

            </div>

            <div className="mt-[43px]">
              <div className="flex items-center gap-3">
                <img src="https://themeholy.com/wordpress/frutin/wp-content/plugins/frutin-core/assets/img/title_icon2.svg" alt="" />
                <h2>Contact Us</h2>
              </div>

              <div className="border-b pt-2 w-[130px] border-[#5dc001]"></div>

              <div className="text-lg font-thin py-10">


                <div className="flex items-center gap-3 mb-5">
                  <button className="btn bg-gray-500 border-none hover:bg-[#5dc001]"><FaMapMarkerAlt className="text-base  text-white " /></button>

                  <h1 className="text-base ">8502 Preston Rd. <br /> Maine 98380</h1>
                </div>


                <div className="flex items-center gap-3 mb-5">

                  <button className="btn bg-gray-500 border-none hover:bg-[#5dc001]"><FaPhoneAlt className="text-white text-base  " /></button>
                  <h2 className="text-base ">+(163)-2654-3564 <br />+(163)-2654-5432</h2>

                </div>


                <div className="flex items-center gap-3" ><button className="btn bg-gray-500 border-none hover:bg-[#5dc001]"><FaMapMarkerAlt className="text-base  text-white " /></button>
                  <h2 className="text-base ">help24/7@agroHub.com</h2>
                </div>



              </div>

            </div>

          </div>

        </div>








      </div>
      <div>

        <footer className="footer text-white bg-[#404e3f]  px-10 py-4 border-t  border-base-300">
          <div className="w-5/6 ms-24 flex justify-between">
            <aside className="items-center grid-flow-col">

              <p className="flex items-center gap-2">Copyright <FaCopyright className="text-black" /> 2023 AgroHub. All Rights Reserved.</p>
            </aside>

            <nav >
              <img className="w-[100px]" src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/11/payment_methods.png" alt="" />

            </nav>
          </div>
        </footer>
      </div>
    </section>

  );
};

export default Footer;