import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="h-full flex flex-col">
      <div className=" h-full flex flex-grow">
        <Dashboard />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
