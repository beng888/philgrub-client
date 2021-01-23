import { lazy } from "react";

export const Home = lazy(() => import("./Home"));
export const Signup = lazy(() => import("./Signup"));
export const Solutions = lazy(() => import("./Solutions"));
export const Cart = lazy(() => import("./Cart"));
export const Checkout = lazy(() => import("./Checkout"));
export const Delivery = lazy(() => import("./Delivery"));
export const ContactUs = lazy(() => import("./ContactUs"));
export const Faq = lazy(() => import("./Faq"));
export const SiteMap = lazy(() => import("./SiteMap"));
export const PrivacyPolicies = lazy(() => import("./PrivacyPolicies"));
export const LostPassword = lazy(() => import("./LostPassword"));
export const ResetPassword = lazy(() => import("./ResetPassword"));
export const NotFound = lazy(() => import("./NotFound"));

//*MENU_CATEGORIES
export const Categories = lazy(() => import("./Categories"));
export const CategoryList = lazy(() => import("./Categories/CategoryList"));
export const Category = lazy(() => import("./Categories/Category"));
export const CategoryItem = lazy(() => import("./Categories/CategoryItem"));

//*DASHBOARD
export const Dashboard = lazy(() => import("./Dashboard"));
export const Welcome = lazy(() => import("./Dashboard/Welcome"));
export const Orders = lazy(() => import("./Dashboard/Orders"));
export const Addresses = lazy(() => import("./Dashboard/Addresses"));
export const AccountDetails = lazy(() => import("./Dashboard/AccountDetails"));
export const Billing = lazy(() => import("./Dashboard/Addresses/Billing"));
export const Shipping = lazy(() => import("./Dashboard/Addresses/Shipping"));

//*ADMIN
export const Menus = lazy(() => import("./Dashboard/Menus"));
export const MenusHome = lazy(() => import("./Dashboard/Menus/MenusHome"));
export const CreateMenu = lazy(() => import("./Dashboard/Menus/CreateMenu"));
export const ManageMenu = lazy(() => import("./Dashboard/Menus/ManageMenu"));
export const Messages = lazy(() => import("./Dashboard/Menus/Messages"));
export const AdminDelivery = lazy(() => import("./Dashboard/Menus/Delivery"));
