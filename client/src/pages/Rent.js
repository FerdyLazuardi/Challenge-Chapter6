import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

function Rent() {
  return (
    <>
      <Navbar />
      <LandingPage showButton={false} />
      <FormSection />
      <Footer />
    </>
  );
}

export default Rent;
