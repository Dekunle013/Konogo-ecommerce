import Banner from "./components/Banner"
// import Container from "./components/Container"
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./components/HomeBanner";
import Highlights from "./components/Highlights";


function App() {

  return (
    <main>
      <Banner />
      <HomeBanner />
      <Highlights />
    </main>
  )
}

export default App
