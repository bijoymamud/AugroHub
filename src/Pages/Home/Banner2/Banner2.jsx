

import Lottie from "lottie-react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

import Modal from 'react-modal';
import PlayButton from "../../../assets/YouTube.json";
Modal.setAppElement('#root');

const Banner2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
     
        <div className="hero h-[350px] " style={{ backgroundImage: 'url(https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/cta_bg_6.jpg)' }}>
          <div className="w-11/12 flex items-center px-20 ">
            <div className=" w-1/2 text-start text-white">
              <h1 className="mb-2 text-6xl font-extrabold tracking-tighter">Agriculture Matters To </h1>
              <blockquote className="text-5xl mt-2 font-semibold t text-slate-900 py-2">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span className="relative text-teal-100 mb-5 text-5xl font-extrabold tracking-tighter">The Future Of Bangladesh</span>
                </span>
              </blockquote>
              <p className="mb-5 text-lg my-10 w-1/2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn flex items-center justify-center border-none text-white hover:text-black text-lg font-bold bg-[#5dc001] ">BUY PRODUCTS <FaLocationArrow /></button>
            </div>
            <div>
              <div className=" " style={{ cursor: 'pointer' }}>
                <div className="play-icon-container" onClick={openModal}>
                  <Lottie animationData={PlayButton} className="h-[150px] ms-32" />

                </div>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                      width: '30%',
                      height: '30%',
                      margin: 'auto',
                      padding: 0,
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }
                  }}
                >
                  <div style={{ width: '100%', height: '100%' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/8JxUU0RnvYQ?si=vqevljItlTOn4t5l"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
    
    </section>
  );
};

export default Banner2;
