import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/login/Login";
import { useSelector } from 'react-redux';


const WithDraw = React.lazy(() => import("./components/withDraw/Withdraw"));
const Deposit = React.lazy(() => import("./components/deposit/Deposit"));
const AccountSummary = React.lazy(() => import("./components/accountSummary/AccountSummary"));
const SignUp = React.lazy(() => import("./components/signUp/SignUp"));




export default function App() {
  const userLogin = useSelector(state => state.loginUser.login);
  return (
    <div>
   
      <Routes>
      <Route
            path="/login"
            element={
              <React.Suspense fallback={<span>Loading</span>}>
                <Login />
              </React.Suspense>
            }
          />
            <Route
            path="/signUp"
            element={
              <React.Suspense fallback={<span>Loading</span>}>
                <SignUp />
              </React.Suspense>
            }
          />
    
      <Route  element={<Layout />}>
         
          <Route
            path="accountSummary"
            element={
              <React.Suspense fallback={<span>Loading</span>}>
                <AccountSummary />
              </React.Suspense>
            }
          />
         
           <Route
            path="withdraw"
            element={
              <React.Suspense fallback={<span>Loading</span>}>
                <WithDraw />
              </React.Suspense>
            }
          />
           <Route
            path="deposit"
            element={
              <React.Suspense fallback={<span>Loading</span>}>
                <Deposit />
              </React.Suspense>
            }
          />
          </Route>
          

      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
  
        <Home/> 
      <Outlet />
    </div>
  );
}

