import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import UserHomePage from "./pages/user/userHomePage/UserHomePage";
import CartPage from "./pages/shopkeeper/cartPage/CartPage";
import Demo from './Demo.js';
import OTP from "./pages/user/otpPage/OTP";
import PendingDelivery from "./pages/user/pendingDelivery/PendingDelivery";
import InfoPage from "./pages/shopkeeper/InfoPage/InfoPage";
import Login from "./pages/authentication/login/Login";
import HomeCommon from "./pages/commonPage/HomeCommon";
import Signup from "./pages/authentication/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Shopmap from "./pages/user/Shopmap/Shopmap";
import PendingPayment from "./pages/user/pendingPayments/PendingPayment";
import forgotPass from "./pages/authentication/forgotPass";
import Profile from "./pages/user/profile/Profile";
import ShowUsers from "./pages/shopkeeper/showUsers/ShowUsers";
import PendingPages from "./pages/shopkeeper/pendingPages/PendingPages";

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
        <Route path="/" element={<HomeCommon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forget-password" component={ forgotPass } />
        <Route path="/userHome" element={<UserHomePage />} />
        <Route path="/userProfile" element={<Profile />} />
        <Route exact path="/allocateUser" element={<CartPage />} />
        <Route exact path="/verifyOtp" element={<OTP />} />
        <Route exact path="/pendingDelivery" element={<PendingDelivery />} />
        <Route exact path="/pendingPayments" element={<PendingPayment />} />
        <Route exact path="/shopMap" element={<Shopmap />} />
        <Route exact path="/infoPage" element={<InfoPage />} />
        <Route exact path="/allUsers" element={<ShowUsers />} />
        <Route exact path="/pendingPaymentsShopkeeper" element={<PendingPages />} />
      </Routes>
    </div>
  );
}

export default App;


