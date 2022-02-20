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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
    </div>
  );
}

export default App;
