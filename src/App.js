import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Compotent/About/About";
import Blogs from "./Compotent/Blogs/Blogs";
import AllProducts from "./Compotent/Dashboard/AllProducts";
import Dashboard from "./Compotent/Dashboard/Dashboard";
import Sold from "./Compotent/Dashboard/Sold";
import Users from "./Compotent/Dashboard/Users";
import Footer from "./Compotent/Footer/Footer";
import Home from "./Compotent/Home/Home";
import RequireAuth from "./Compotent/hooks/requiredAuth";
import Items from "./Compotent/Items/Items";
import UpdateItem from "./Compotent/Items/UpdateItem";
import Login from "./Compotent/Login/Login";
import MyFortfolio from "./Compotent/MyFortfolio.js/MyFortfolio";
import Nav from "./Compotent/Nav/Nav";
import NotFound from "./Compotent/NotFound/NotFound";
import Purchase from "./Compotent/Puchase/Purchase";
import PurchaseProducts from "./Compotent/Puchase/PurchaseProducts";
import Reviews from "./Compotent/Reviews/Reviews";
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
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path="/dashboard/additem" element={<Items></Items>}></Route>
          <Route path="/dashboard/allproducts"  element={<AllProducts></AllProducts>}></Route>
          <Route path="/dashboard/users"  element={<Users></Users>}></Route>
          <Route path="/dashboard/sold"  element={<Sold></Sold>}></Route>
          <Route path="/dashboard/reviews"  element={<Reviews></Reviews>}></Route>
          <Route path="/dashboard/myportfolio"  element={<MyFortfolio></MyFortfolio>}></Route>
        
      </Route>
      <Route path="/about" element={<About></About>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/update/:id" element={<UpdateItem></UpdateItem>} />
      <Route path="/purchase/:id" element={ <RequireAuth><PurchaseProducts></PurchaseProducts></RequireAuth> } />

      <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
