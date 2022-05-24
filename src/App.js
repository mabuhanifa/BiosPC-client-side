import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Compotent/Home/Home";
import Nav from "./Compotent/Nav/Nav";
import Summary from "./Compotent/Summary/Summary";
//import Footer from './Compotent/Footer/Footer';

function App() {
  return (
    <div className="m-10 ">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home></Home>} />

        {/* <Footer></Footer> */}
      </Routes>
      <Summary></Summary>
    </div>
  );
}

export default App;
