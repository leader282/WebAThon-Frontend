import "./App.css";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import About from "./components/about/About";
import Timeline from "./components/timeline/Timeline";
import Footer from "./components/footer/Footer";
import Rules from "./components/rules_eligibility/Rules";
// import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Preloader />
      {/* <Sidebar /> */}
      <Header />
      <Slider />
      <About />
      <br />
      <br />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <br />
      <br />
      <Rules />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
