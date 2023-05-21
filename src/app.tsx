import "./app.css";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import More from "./components/More";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import PackingAndStay from "./components/PackingAndStay";

export function App() {
  return (
    <>
      <Navbar />
      <OurStory />
      <Detail />
      <More />
      <PackingAndStay />
      <Footer />
    </>
  );
}
