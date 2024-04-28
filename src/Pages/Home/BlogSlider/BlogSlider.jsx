

import { Component } from 'react';

class BlogSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }

  toggleShowAll = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll,
    }));
  };

  render() {
    const { showAll } = this.state;

    const cardData = [
      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-3-391x300.jpg',
        title: 'Improve Your Health By Organic Eating',
      },
      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-4-391x300.jpg',
        title: 'Transform Your Nutrition With Organic Meal',
      },
      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-1-391x300.jpg',
        title: 'Develop Your Health With Organic Food',
      },



      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/11/blog-s-1-6-391x300.jpg',
        title: 'Fresh Organic Food For Better  Healthy Life',
      },

      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-1-391x300.jpg',
        title: 'Develop Your Health With Organic Food',
      },

      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-1-391x300.jpg',
        title: 'Develop Your Health With Organic Food',
      },

      {
        image: 'https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/blog-s-1-1-391x300.jpg',
        title: 'Develop Your Health With Organic Food',
      },
    ];

    const renderCards = () => {
      if (showAll) {
        return cardData.map((card, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={card.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center ms-10 mt-5 text-start">
              <h2 className="card-title mb-5 w-2/3">{card.title}</h2>
              <div className="card-actions pb-5">
                <button className="btn btn-primary">READ MORE</button>
              </div>
            </div>
          </div>
        ));
      } else {
        // Show only the first 3 cards
        const slicedCards = cardData.slice(0, 3);
        return slicedCards.map((card, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={card.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center ms-10 mt-5 text-start">
              <h2 className="card-title mb-5 w-2/3">{card.title}</h2>
              <div className="card-actions pb-5">
                <button className="btn btn-primary">READ MORE</button>
              </div>
            </div>
          </div>
        ));
      }
    };

    return (
      <section className='w-5/6 mx-auto text-start py-32'>
        <h2 className='text-2xl font-semibold text-center'>Our Blogs</h2>
        <div className="border-b-4 w-[75px] mx-auto border-amber-500"></div>
        <h2 className='text-5xl pt-5 pb-20 font-extrabold text-center'>Latest News & Articles</h2>
        <div className='grid grid-cols-3 gap-10'>
          {renderCards()}
        </div>
        <div className="text-center mt-14">
          <button onClick={this.toggleShowAll} className=' text-lg font-bold text-center mx-auto btn btn-wide bg-[#5dc001] border-none text-white hover:text-black'>
            {showAll ? 'SEE LESS' : 'SEE MORE'}
          </button>
        </div>
      </section>
    );
  }
}

export default BlogSlider;

