import StarWarCharacters from "./components/StarWarCharacters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nabvar from "./components/Nabvar";

const App = () => {
  return (
    <div>
      <Nabvar />
      <Header />
      <StarWarCharacters />
      <Footer />
    </div>
  );
};

export default App;
