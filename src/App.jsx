import Banner from "./components/Banner"
// import Container from "./components/Container"
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./components/HomeBanner";
import Highlights from "./components/Highlights";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import DiscountedBanner from "./components/DiscountedBanner";
import Blog from "./components/Blog";


function App() {

  return (
    <main>
      <Banner />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </main>
  )
}

export default App
