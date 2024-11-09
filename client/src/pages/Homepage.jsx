import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Featuredproducts from '../Components/Featuredproducts';
import SpecialOffer from '../Components/SpecialOffer';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import ShoeCategories from '../Components/ShoeCategories';

function Homepage() {
    return (
        <div>
          <Navbar />
          <Home />
          <ShoeCategories />
          <Featuredproducts />
          <SpecialOffer />
          <Services />
          <Footer />
        </div>
    );
  }
  
  export default Homepage;