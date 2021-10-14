import './App.scss';
import Header from './components/header/Header';
import Banner from './pages/banner/Banner';
import Contact from './pages/contact/Contact';
import Deal from './pages/deal/Deal';
import Featured from './pages/featured/Featured';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Review from './pages/review/Review';

function App() {
  return (
    <>
      <Header />

      <Home />
      <Banner />
      <Products />
      <Deal />
      <Featured />
      <Review />
      <Contact />
    </>
  )
}

export default App;
