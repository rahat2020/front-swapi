import StarWarCharacters from "./components/StarWarCharacters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Topbar from "./components/topbar";

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
