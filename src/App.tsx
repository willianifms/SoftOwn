import Oferta from "./secoes/Oferta/oferta";
import Benefits from "./secoes/Benefits/benefits";
import ComeceContact from "./secoes/Contact/comeceContact";
import Precing from "./secoes/Precing/precing";
import "./App.css";
import FAQ from "./secoes/Faq/faq";
import AgendeContact from "./secoes/Contact/agendeContact";
import Footer from "./secoes/Footer/footer";

function App() {
  return (
    <>
      <Oferta />
      <Benefits />
      <ComeceContact />
      <Precing />
      <FAQ />
      <AgendeContact />
      <Footer/>
    </>
  );
}

export default App;
