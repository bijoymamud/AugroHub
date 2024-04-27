import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';
import PopularVag from '../PopularVag/PopularVag';
import SellingProduct from '../SellingProduct/SellingProduct';

const Home = () => {
  return (
    <div>
      {/* <h2>This is home</h2>
      <img src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/hero_4_1.png" alt="" />

      <img src="https://themeholy.com/wordpress/frutin/wp-content/uploads/2024/03/hero_bg_4_1.jpg" alt="" /> */}
      <Banner />
      <Intro />
      <SellingProduct />
      <PopularVag />
    </div>
  );
};

export default Home;