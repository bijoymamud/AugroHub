
import Accordiam from '../Accordiam/Accordiam';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Benefit from '../Benefit/Benefit';
import BlogSlider from '../BlogSlider/BlogSlider';
import Intro from '../Intro/Intro';
import PopularVag from '../PopularVag/PopularVag';
import Pricing from '../Pricing/Pricing';
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
      <Pricing />
      <Banner2 />
      <BlogSlider />
      <Accordiam />
    </div>
  );
};

export default Home;