import './App.css';
import { Login } from './Login.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateOverview from './PrivateOverview.js';
import PrivateRoute from './PrivateRoute.js';
import Logout from './Logout';
import Register from './Register.js'
import { Navigation } from './Navigation.js';
import Home from './Home.js'

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/:id/overview" element={
            <PrivateRoute>
              <PrivateOverview />
            </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
