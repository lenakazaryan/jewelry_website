import'./Home.css';
import Slider from './SliderSection/Slider';
import Products from './ProductSection/Products';
import { bestSellerProducts } from '../../helpers/constants';
import { popularProducts } from '../../helpers/constants';
import References from './RefSection/References';

function Home() {
  return (
    <>
      <Slider />
      <Products title="Popular Products" productList={popularProducts}/>
      <References />
      <Products title="Best Sellers" productList={bestSellerProducts}/>
    </>

  )
}

export default Home;
