import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {

  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetch('../../../public/product.json')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  return (
    <section className="">
      <div className='product_banner'>

        <div className="hero h-[250px]" style={{ backgroundImage: 'url(	https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/breadcumb-bg.jpg)' }}>
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-black text-5xl font-bold">Our Products</h1>
            </div>
          </div>
        </div>


      </div>

      <div className='py-32'>
        <div className=' text-base bg-[#f0eccf]  p-2 rounded-xl w-4/6 mx-auto  upper_div flex items-center justify-between'>



          <div className='ps-4'>
            <p>Showing {products.length} results</p>
          </div>

          <div>

            <div className="join ">

              <select className="select w-[150px] rounded-full select-bordered join-item">
                <option disabled selected>Default sorting</option>
                <option>Short by popularity</option>
                <option>Short by rating</option>
                <option>Short by price</option>

              </select>

            </div>
          </div>

        </div>
      </div>

      <div className="w-4/6 mx-auto">

        <div className="grid grid-cols-4 gap-10">

          {
            products.map(product => <SingleProduct key={product.id}
              product={product}
            ></SingleProduct>)
          }

        </div>

      </div>
    </section>

  );
};

export default Products;