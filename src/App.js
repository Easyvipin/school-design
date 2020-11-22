
import Banner from "./component/Banner"
import Bestchild from "./component/Bestchild"
import Enrollbanner from "./component/Enrollbanner"
import Features from "./component/Features"
import Footer from "./component/Footer"
import Gallery from "./component/Gallery"
import Navbar from "./component/Navbar"
import Newsletter from "./component/Newsletter"
import Our from "./component/Our"
import OurServices from "./component/OurServices"
import Slidercards from "./component/Slidercards"
import Testi from "./component/Testi"
import Videobanner from "./component/Videobanner"
import "./styles/main.scss"


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Features/>
    <OurServices/>
    <Slidercards/>
    <Bestchild/>
    <Videobanner/>
    <Gallery/>
    <Testi/>
    <Enrollbanner/>
    <Our/>
    <Newsletter/>
    <Footer/>
    </div>
  );
}

export default App;
