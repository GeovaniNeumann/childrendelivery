import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import DeliveryArea from "./components/DeliveryArea/DeliveryArea";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <HowItWorks />
        <DeliveryArea />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;