import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import ShoeCard from '../Components/Card';
import SpecialOffer from '../Components/SpecialOffer';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

function Homepage() {
    return (

        <div>
          <Navbar />
          <Home />
          <ShoeCard />
          <SpecialOffer />
          <Services />
          <Footer />

        </div>
    
    );
  }
  
  export default Homepage;