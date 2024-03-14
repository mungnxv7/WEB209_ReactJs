import BannerHero from "./components/BannerHero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Products from "./components/Products";

const App = () => {
  const menu = ["Home", "About", "Shop", "Contact"];
  return (
    <div>
      <Header menu={menu} />
      <Modal />
      <BannerHero />
      <Products />
      <Footer></Footer>
    </div>
  );
};

export default App;
