import React, { useEffect } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Cell from "./Component/Cell/Cell";
import Dog from "./Component/Dog/Dog";
import Electronics from "./Component/Electronics/Electronics";
import Automotive from "./Component/Automotive/Automotive";
import Jewellery from "./Component/Jewelry/Jewellery";
import MedicalEquipment from "./Component/MedicalEquipment/MedicalEquipment";
import Pet from "./Component/Pet/Pet";
import MusicEquipment from "./Component/Music-Equipment/MusicEquipment";
import PowerSports from "./Component/Power-Sports/PowerSports";
import Vehical from "./Component/Vehical/Vehical";
import Tire from "./Component/Tire/Tire";
import Tools from "./Component/Tools/Tools";
import ProfessionalTools from "./Component/Professional-Tools/ProfessionalTools";
import Recreation from "./Component/Recreation/Recreation";
import PersonalProduct from "./Component/Personal-Product/PersonalProduct";
import LandscapEquipment from "./Component/Landscap-Equipment/LandscapEquipment";
import LivestockEquipment from "./Component/Livestock-equipment/LivestockEquipment";
import Home2 from "./Component/Home-2/Home2";
import About from "./Component/About/About";
import Faqs from "./Component/FAQS/Faqs";
import Testimonial from "./Component/Testimonial/Testimonial";
import SnowEquipment from "./Component/SnowEquipment/SnowEquipment";
import Kiosk from "./Component/Kiosk/Kiosk";
import Ebike from "./Component/Ebike/Ebike";
import ScubaDiving from "./Component/Scuba-diving/ScubaDiving";
import Form from "./Component/Form/Form";
import NotFound from "./Component/NotFound";
import ScrollToTop from "./Component/ScrollToTop";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import DashBoardUser from "./Pages/DashBoardUser";
import ForgotPassword from "./Pages/ForgotPassword";
import ApplicationsDashboard from "./Pages/ApplicationsDashboard";
import MarketPlace from "./Pages/MarketPlace";
import TearmsAndConditions from "./Pages/TearmsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Users from "./Pages/Users";
import ViewUser from "./Pages/ViewUser";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import AdminApplicationDashboard from "./Pages/AdminApplicationDashboard";
import AdminForgotPassword from "./Pages/AdminForgotPassword";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminMarketPlace from "./Pages/AdminMarketPlace";
import AdminNotifications from "./Pages/AdminNotifications";
import AdminPrivacyPolicy from "./Pages/AdminPrivacyPolicy";
import AdminProfile from "./Pages/AdminProfile";
import AdminSignIn from "./Pages/AdminSignIn";
import AdminSignup from "./Pages/AdminSignup";
import AdminTearmsAndConditions from "./Pages/AdminTermsAndConditions";
import { useDispatch, useSelector } from "react-redux";
import { setPersonRole } from "./features/personRole";
import AdminProductDetail from "./Pages/AdminProductDetail";
import AdminSelectOffer from "./Pages/AdminSelectOffer";
import AdminBankingInfo from "./Pages/AdminBankingInfo";
import AdminOrderDetail from "./Pages/AdminOrderDetail";
import AdminCheckOut from "./Pages/AdminCheckOut";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.value);
  const role = useSelector((state) => state.person.value);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname.includes("/admin")) {
    dispatch(setPersonRole("admin"));
  } else {
    dispatch(setPersonRole("app"));
  }

  // useEffect(() => {
  //   if (role !== "" && authenticate == true) {
  //     ("");
  //   } else if (authenticate == false && !pathname.includes("/signup")) {
  //     navigate(`${role}/signin`);
  //   }

  //   const token = localStorage.getItem("LoginToken");
  //   if (!token) {
  //     navigate(`${role}/signin`);
  //   }
  // }, [pathname]);

  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/medical-equipment" element={<MedicalEquipment />} />
        <Route path="/cell" element={<Cell />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/music-equipment" element={<MusicEquipment />} />
        <Route path="/power-sports" element={<PowerSports />} />
        <Route path="/vehical" element={<Vehical />} />
        <Route path="/tire" element={<Tire />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/professional-tools" element={<ProfessionalTools />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/personal-product" element={<PersonalProduct />} />
        <Route path="/landscap-equipment" element={<LandscapEquipment />} />
        <Route path="/livestock-equipment" element={<LivestockEquipment />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/snow-equipment" element={<SnowEquipment />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/e-bike" element={<Ebike />} />
        <Route path="/scuba-diving" element={<ScubaDiving />} />
        <Route path="/become-partner" element={<Form />} />

        <Route path="/app/signup" element={<Signup />} />
        <Route path="/app/signin" element={<SignIn />} />
        <Route path="/app/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/app/dashboard" element={<DashBoardUser />} />
        <Route
          path="/app/dashboard/applications"
          element={<ApplicationsDashboard />}
        />
        <Route
          path="/app/dashboard/applications"
          element={<ApplicationsDashboard />}
        />
        <Route path="/app/dashboard/marketplace" element={<MarketPlace />} />
        <Route
          path="/app/dashboard/terms&condition"
          element={<TearmsAndConditions />}
        />
        <Route
          path="/app/dashboard/privacy&policy"
          element={<PrivacyPolicy />}
        />
        {/* <Route path="/app/dashboard/users" element={<Users />} /> */}
        <Route path="/app/dashboard/users/view-user" element={<ViewUser />} />
        <Route
          path="/app/dashboard/notifications"
          element={<Notifications />}
        />
        <Route path="/app/dashboard/profile" element={<Profile />} />

        {/* Admin Routes */}
        {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route
          path="/admin/forgot-password"
          element={<AdminForgotPassword />}
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/dashboard/applications"
          element={<AdminApplicationDashboard />}
        />

        <Route
          path="/admin/dashboard/marketplace"
          element={<AdminMarketPlace />}
        />
        <Route
          path="/admin/dashboard/terms&condition"
          element={<AdminTearmsAndConditions />}
        />
        <Route
          path="/admin/dashboard/privacy&policy"
          element={<AdminPrivacyPolicy />}
        />
        <Route path="/admin/dashboard/users" element={<Users />} />
        <Route path="/admin/dashboard/users/view-user" element={<ViewUser />} />
        <Route
          path="/admin/dashboard/notifications"
          element={<AdminNotifications />}
        />
        <Route path="/admin/dashboard/profile" element={<AdminProfile />} />
        <Route
          path="/admin/dashboard/marketplace/product/product-detail"
          element={<AdminProductDetail />}
        />
        <Route
          path="/admin/dashboard/cart/select-offer"
          element={<AdminSelectOffer />}
        />
        <Route
          path="/admin/dashboard/cart/banking-info"
          element={<AdminBankingInfo />}
        />
        <Route
          path="/admin/dashboard/cart/order-details"
          element={<AdminOrderDetail />}
        />
        <Route
          path="/admin/dashboard/cart/checkout"
          element={<AdminCheckOut />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
