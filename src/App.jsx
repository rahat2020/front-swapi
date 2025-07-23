import StarWarCharacters from "./components/StarWarCharacters";
import Topbar from "./components/topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <StarWarCharacters />
      <Footer />
    </div>
  );
};

export default App;
