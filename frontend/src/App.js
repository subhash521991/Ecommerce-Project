import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() { 
  return (
<>
<BrowserRouter >  
<Header />
<div className="container">
<Routes>
<Route element={<PrivateComponent />} >
<Route path="/" element={<h1>Product Component</h1>} />
<Route path="/add" element={<h1>Add Product Component</h1>} />
<Route path="/update" element={<h1>Update Product Component</h1>} />
<Route path="/logout" element={<h1>Logout Component</h1>} />
<Route path="/profile" element={<h1>Profile Component</h1>} />
</Route>
<Route path="/login" element={<Login />} />

<Route path="/signup" element={<SignUp />} />
</Routes>
</div>
</BrowserRouter>
<Footer />

</>
);}

export default App;
