import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./layouts/Footer";
import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <HomePage />
      <h1>spotify</h1>
      <Footer />
    </>
  );
}

export default App;
