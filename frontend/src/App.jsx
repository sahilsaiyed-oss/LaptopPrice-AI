import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate 
} from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Charts from "./pages/Charts";
import Logs from "./pages/Logs";


import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";



function App() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Public Routes */}

        <Route 
          path="/" 
          element={<Navigate to="/login" />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/signup" 
          element={<Signup />} 
        />



        {/* Protected Routes */}


        <Route

          element={

            <ProtectedRoute>

              <Layout />

            </ProtectedRoute>

          }

        >


          <Route 
            path="/dashboard" 
            element={<Dashboard />} 
          />


          <Route 
            path="/predict" 
            element={<Prediction />} 
          />


          <Route 
            path="/charts" 
            element={<Charts />} 
          />


          <Route 
            path="/logs" 
            element={<Logs />} 
          />


        </Route>



        {/* Unknown Route */}

        <Route

          path="*"

          element={
            <Navigate to="/dashboard" />
          }

        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;