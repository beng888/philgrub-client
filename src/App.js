import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { UserRoute, WithTokenRoute, AdminRoute } from "./utils/SecuredRoutes";
import Alert from "./components/Alert";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import * as R from "./pages";
import Loader from "./components/Loader";
//* R = RoutePage

const App = () => {
  // console.log(process.env.REACT_APP_MAILCHIMP_URL);
  // console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  console.log(process.env.REACT_APP_URL);
  console.log(process.env.NODE_ENV);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Alert />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<R.Home />} />
          <WithTokenRoute path="signup" element={<R.Signup />} />
          <Route path="lost-password" element={<R.LostPassword />} />
          <Route path="reset-password/:token" element={<R.ResetPassword />} />
          <Route path="solutions" element={<R.Solutions />} />
          <Route path="cart" element={<R.Cart />} />
          <Route path="checkout" element={<R.Checkout />} />
          <Route path="delivery" element={<R.Delivery />} />
          <Route path="contact-us" element={<R.ContactUs />} />
          <Route path="faq" element={<R.Faq />} />
          <Route path="sitemap" element={<R.SiteMap />} />
          <Route path="privacy-policies" element={<R.PrivacyPolicies />} />
          <Route path="categories" element={<R.Categories />}>
            <Route path="/" element={<R.CategoryList />} />
            <Route path=":category" element={<R.Category />} />
            <Route path=":category/:slug" element={<R.CategoryItem />} />
          </Route>
          <UserRoute path="dashboard" element={<R.Dashboard />}>
            <Route path="/" element={<R.Welcome />} />
            <Route path="orders" element={<R.Orders />} />
            <Route path="subscriptions" element={<R.Orders />} />
            <Route path="accountdetails" element={<R.AccountDetails />} />
            <Route path="addresses" element={<Outlet />}>
              <Route path="/" element={<R.Addresses />} />
              <Route path="billing" element={<R.Billing />} />
              <Route path="shipping" element={<R.Shipping />} />
            </Route>
            <AdminRoute path="admin" element={<R.Menus />}>
              <Route path="/" element={<R.MenusHome />} />
              <Route path="create" element={<R.CreateMenu />} />
              <Route path="manage" element={<R.ManageMenu />} />
              <Route path="messages" element={<R.Messages />} />
              <Route path="delivery" element={<R.AdminDelivery />} />
            </AdminRoute>
          </UserRoute>
          <Route path="*" element={<R.NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
