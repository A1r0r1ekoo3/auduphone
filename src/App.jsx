// react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// RootLoyout
import RootLoyout from "./layout/RootLoyout";
import HomeLoyout from "./layout/HomeLoyout";
import EarLoyout from "./layout/EarLoyout";
import SpeakersLoyout from "./layout/speakersLoyout";
import Headloyout from "./layout/Headloyout";
import ChecLoyout from "./layout/ChecLoyout";
import SignupLoyout from "./layout/SignupLoyout";
import LogoutLoyout from "./layout/LogoutLoyout";

// Pages
import Home from "./pages/home/Home";
import Speakers from "./pages/speakers/Speakers";
import Earphone from "./pages/earphone/Earphone";
import Headphone from "./pages/headphone/Headphone";
import Checkout from "./pages/checkout/Checkout";
import Signup from "./pages/signup/Signup";
import Logout from "./pages/logout/Logout";

// A elements
import Head1 from "./components/A/head1";
import Head2 from "./components/A/Head2";
import Head3 from "./components/A/Head3";
import Speak1 from "./components/A/Speak1";
import Speak2 from "./components/A/Speak2";
import Ear from "./components/A/Ear";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route element={<RootLoyout />}>
          <Route path="/" element={<HomeLoyout />}>
            <Route index element={<Home />} />
            <Route path="headphones1" element={<Head1 />} />
            <Route path="speakers1" element={<Speak1 />} />
            <Route path="speakers2" element={<Speak2 />} />
            <Route path="earphones1" element={<Ear />} />
          </Route>
          <Route path="/headphone" element={<Headloyout />}>
            <Route index element={<Headphone />} />
            <Route path="headphones1" element={<Head1 />} />
            <Route path="headphones2" element={<Head2 />} />
            <Route path="headphones3" element={<Head3 />} />
          </Route>
          <Route path="/speakers" element={<SpeakersLoyout />}>
            <Route index element={<Speakers />} />
            <Route path="speakers1" element={<Speak1 />} />
            <Route path="speakers2" element={<Speak2 />} />
          </Route>
          <Route path="/earphone" element={<EarLoyout />}>
            <Route index element={<Earphone />} />
            <Route path="earphones1" element={<Ear />} />
          </Route>
          <Route path="/checkout" element={<ChecLoyout />}>
            <Route index element={<Checkout />} />
            <Route path="checkout1" element={<Checkout />} />
          </Route>
        </Route>
        <Route path="/logout" element={<LogoutLoyout />}>
          <Route index element={<Logout />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/signup" element={<SignupLoyout />}>
            <Route index element={<Signup />} />
            <Route path="signup" element={<Signup />} />
          </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
