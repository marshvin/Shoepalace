import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import SpecialOffer from '../Components/SpecialOffer';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';

function Homepage() {
    return (

        <div>
          <Navbar />
          <Home />
          <ProductCard/>
          <SpecialOffer />
          <Services />
          <Footer />

        </div>
    
    );
  }
  
  export default Homepage;