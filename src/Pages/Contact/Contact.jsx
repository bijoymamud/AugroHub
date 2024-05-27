import { useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiRocketLaunch } from "react-icons/hi2";

const Contact = () => {
  const form = useRef();
  return (
    <div className="min-h-[50vh] w-5/6 container mx-auto p-5 py-36">


      <div className="md:grid grid-cols-2 gap-10 items-center pt-3 space-y-5">

        <div className="md:w-3/4 md:ms-10">
          <div className="mb-10">


            <h1 className="border-l-8 border-teal-600 text-3xl font-semibold ps-5 mb-3">
              Contact Us
            </h1>







            <p className='text-gray-500 text-xl'>
              If you have any specific questions or need to reach out for
              support, you can try sending an email.
            </p>
          </div>
          <div className="space-y-5 text-gray-500">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p className='text-xl'>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-black" />
              <p className='text-xl'>
                +880 1234567890 <br /> +8802364786732
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p className='text-xl'>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p className='text-xl'>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="w-4/5 md:gap-20">
          <form
            data-aos="fade-down"
            data-aos-duration="1000"
            ref={form}
            // onSubmit={sendEmail}
            className="pb-5 border-2 shadow-md  rounded-lg md:py-10 card-body"
          >
            <h2 className='text-center pb-10'><blockquote className="text-3xl mt-5 font-semibold t text-slate-900">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">Message Us</span>
              </span>

            </blockquote></h2>





            <div className="">

              <div className="form-control">
                <label className="label">
                  <p className="text-xl">Your name</p>
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"

                  className="outline text-base outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="text-xl">Email address</p>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="outline outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="text-xl">Message</p>
                </label>
                <textarea
                  required
                  name="message"
                  className="outline outline-1 textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-6">
                <button className=" btn hover:-translate-y-1 btn-primary">
                  <span>Send Message</span><HiRocketLaunch></HiRocketLaunch>
                </button>
                {/* <p className="z-20 mt-3 ">{msg}</p> */}
              </div>

            </div>
          </form>
        </div>




      </div>
    </div>
  );
};

export default Contact;