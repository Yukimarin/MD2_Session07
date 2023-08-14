import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import ContactAdmin from "./components/ContactAdmin.jsx";
import ContactUser from "./components/ContactUser.jsx";
import ContactIndex from "./components/ContactIndex.jsx";
function App() {
  // Arrow Function
  // const activeColor = ()=>{return }
  // Demo className active Navlink
  const activeColor = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    backgroundColor: isActive ? "black" : "red",
  });
  return (
    <div className='App'>
      {/* Trong MD1 */}
      {/* <ul>
        <li>
          <a href='/'>Homepage</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul> */}
      {/* Ở MD2 sẽ sử dụng Link to */}
      {/* <ul>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
          <ul>
            <li>
              <Link to='/contact/contact-user'>Contact User</Link>
            </li>
            <li>
              <Link to='/contact/contact-admin'>Contact Admin</Link>
            </li>
          </ul>
        </li>
      </ul> */}
      {/* Sử dụng NavLink */}
      <ul>
        <li>
          <NavLink to='/' style={activeColor}>
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' style={activeColor}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' style={activeColor}>
            Contact
          </NavLink>
          <ul>
            <li>
              <NavLink to='/contact/contact-user' style={activeColor}>
                Contact User
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact/contact-admin' style={activeColor}>
                Contact Admin
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}>
          {/* Demo Index Router Contact */}
          <Route index element={<ContactIndex></ContactIndex>} />
          {/* Demo Nested Route  */}
          {/* /contact/contact-user */}
          <Route
            path='contact-user'
            element={<ContactUser></ContactUser>}
          ></Route>
          {/* /contact/contact-admin */}
          <Route
            path='contact-admin'
            element={<ContactAdmin></ContactAdmin>}
          ></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
