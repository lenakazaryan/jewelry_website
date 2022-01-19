import'./Home.css';
import Slider from './SliderSection/Slider';
import SliderRef from './LeftSliderSection/SliderRef';
import Products from './ProductSection/Products';
import LinkedImgSection from './LinkedImgSection/LinkedImgSection';
import { bestSellerProducts } from '../../helpers/constants';
import { popularProducts } from '../../helpers/constants';



function Home() {
  return (
    <>
      <Slider />
      <Products title="Popular Products" productList={popularProducts}/>
      <SliderRef />
      <Products title="Best Sellers" productList={bestSellerProducts}/>
      <LinkedImgSection  />
    </>

  )
}

export default Home;
