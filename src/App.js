import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Compotent/About/About";
import Blogs from "./Compotent/Blogs/Blogs";
import Dashboard from "./Compotent/Dashboard/Dashboard";
import Footer from "./Compotent/Footer/Footer";
import Home from "./Compotent/Home/Home";
import RequireAuth from "./Compotent/hooks/requiredAuth";
import Items from "./Compotent/Items/Items";
import UpdateItem from "./Compotent/Items/UpdateItem";
import Login from "./Compotent/Login/Login";
import Nav from "./Compotent/Nav/Nav";
import NotFound from "./Compotent/NotFound/NotFound";
import Purchase from "./Compotent/Puchase/Purchase";
import PurchaseProducts from "./Compotent/Puchase/PurchaseProducts";
import SignUp from "./Compotent/Signup/Signup";

function App() {
  return (
    <div className="m-10 ">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/blogs" element={<Blogs></Blogs>} />
      <Route path="/purchase" element={
        <RequireAuth>
      <Purchase></Purchase></RequireAuth>} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} />
      <Route path="/items" element={<Items></Items>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/update/:id" element={<UpdateItem></UpdateItem>} />
      <Route path="/purchase/:id" element={<PurchaseProducts></PurchaseProducts>} />

      <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
