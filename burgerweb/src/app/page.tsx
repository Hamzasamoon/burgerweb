import Banner from "./component/Banner";
import Carousel from "./component/Carousel";
import Navebar from "./component/Navebar";      // Spelling wahi rakhi hai
import Offer from "./component/Offer";
import ProductList from "./component/ProductList";
import Progressor from "./component/Progressor";
import Card from "./component/Card";
import Testimonals from "./component/Testimonal";     // Spelling wahi rakhi hai
import Footer from "./component/Footer";
import Menuitem from "./component/Menuitem";
import Reservation from "./component/Reservation";
import Menu from "./component/Man";                   // Spelling wahi rakhi hai
import ProductCard from "./component/ProductCard";

const App = () => {
  // Sample Product Data
  // const sampleProduct = {
  //   id: 1,
  //   name: "Sample Product",
  //   price: 29.99,
  //   image: "https://via.placeholder.com/150",
  //   onAddToCart: (id: number) => console.log(`Added product ${id} to cart`),
  // };

  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen">
      <Navebar />  
      <Carousel />
      <Progressor />
      <Banner />
      <ProductList />
      
      {/* @ts-expect-error Async */}
      <ProductCard  />  
      <Menu />
      <Offer />
      <Card />
      <Reservation />
      {/* Props ko correctly pass kiya */}

      

      <Testimonals />  
      <Menuitem />
      <Footer />
    </div>
  );
};

export default App;
