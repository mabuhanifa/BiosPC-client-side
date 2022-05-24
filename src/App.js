import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Compotent/Blogs/Blogs";
import Dashboard from "./Compotent/Dashboard/Dashboard";
import Footer from "./Compotent/Footer/Footer";
import Home from "./Compotent/Home/Home";
import Nav from "./Compotent/Nav/Nav";
import NotFound from "./Compotent/NotFound/NotFound";
import Purchase from "./Compotent/Puchase/Purchase";

function App() {
  return (
    <div className="m-10 ">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/blogs" element={<Blogs></Blogs>} />
      <Route path="/purchase" element={<Purchase></Purchase>} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="/items" element={<Dashboard></Dashboard>} />

      <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
