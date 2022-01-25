import Slider from './SliderSection/Slider';
import SmallSliderSection from './SmallSliderSection/SmallSliderSection';
import Products from './ProductSection/Products';
import LinkedImgSection from './LinkedImgSection/LinkedImgSection';
import { bestSellerProducts } from '../../helpers/constants';
import { popularProducts } from '../../helpers/constants';
import imagesInfo from './LinkedImgSection/data';



function Home() {
  return (
    <>
      <Slider />
      <Products title="Popular Products" productList={popularProducts}/>
      <SmallSliderSection />
      <Products title="Best Sellers" productList={bestSellerProducts}/>
      <LinkedImgSection  data = {imagesInfo}/>
    </>
  )
}

export default Home;
