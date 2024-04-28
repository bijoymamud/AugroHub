
import Banner from '../Banner/Banner';
import Benefit from '../Benefit/Benefit';
import Intro from '../Intro/Intro';
import PopularVag from '../PopularVag/PopularVag';
import SellingProduct from '../SellingProduct/SellingProduct';
import OurStuff from '../Stuff/OurStuff';

const Home = () => {
  return (
    <div>

      <Banner />
      <Intro />
      <SellingProduct />
      <PopularVag />
      <Benefit />
      <OurStuff />
    </div>
  );
};

export default Home;