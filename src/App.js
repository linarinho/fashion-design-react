import './App.scss';
import Header from './components/header/Header';
import Banner from './pages/banner/Banner';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {
  return (
    <>
      <Header />

      <Home />
      <Banner />
      <Products />
    </>
  )
}

export default App;
