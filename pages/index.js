import Header from "../components/Header/Header";
import About from "../components/About/About";
import Sponsors from "../components/Sponsors/Sponsors";
import Registration from "../components/Registration/Registration";
import Speakers from "../components/Speakers/Speakers";
import Program from "../components/Program/Program";
import Faq from "../components/FAQ/Faq";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from '../components/Footer/Footer';


export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Sponsors />
      <Registration />
      <Speakers/>
      <Program />
      <Faq/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
