import logo from './logo.svg';
import './App.css';
// import { UserProvider } from './Components/UserContext';
// import CompC from './Components/CompC';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Nav from "./Components/Nav";
import Products from "./Components/Products";
import SingleProduct from './Components/SingleProduct';
import SinaColaComp from './Components/Redux/SinaColaComp';


function App() {

  const user = {
    name: "fady",
    age: 39
  };

  return (
    <>

    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:d' element={<SingleProduct />} />
        <Route path="/sinacola" element={<SinaColaComp />} />
      </Routes>

      {/*   <UserProvider value={user} >
        <CompC />
      </UserProvider> */}


    </>
  );
}

export default App;
