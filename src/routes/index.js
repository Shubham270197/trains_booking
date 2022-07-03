import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
    useNavigate,
    Outlet,
} from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from '../components/home'
import Login from "../components/login";
import Landing from "../components/landing";
import Register from "../components/register"
import ForgotPassword from '../components/forgotPassword'
import Finance from '../components/finance'
import AboutUs from '../components/about'
import Investors from "../components/investors"
import Press from "../components/press"
import Careers from "../components/careers"
import TermsConditions from "../components/termsCondition"
import PrivacyPolicy from "../components/privacyPolicy"
import Facts from "../components/faq"
import ContactUs from "../components/contactUs"
// Private Routes
import NewBooking from "../components/newBookings"
import MyBookings from "../components/myBookings"
import Profile from "../components/myProfile"
import PurchaseOyseterCard from "../components/purchaseOyster"
import SearchBooking from "../components/searchBookings"
import ActiveBookingDetails from "../components/myBookings/trainBookings/activeBookingDetails";
import PastBookingDetails from "../components/myBookings/trainBookings/pastBookingDetails";
import FutureBookingDetails from "../components/myBookings/trainBookings/futureBookingDetails";
import LongDuartionBookingDetails from "../components/myBookings/tubeBookings/longDurationBookingsDetails";
import OneDayBookingDetails from "../components/myBookings/tubeBookings/oneDayBookingDetails";
import PurchaseOysterSearch from "../components/purchaseOyster/purchaseOysterSearch";
import PaymentAddCard from "../components/payment.js";
import PaymentShipping from "../components/payment.js/paymentShipping";
import PaymentRemovedCard from "../components/payment.js/paymentRemovecard";
import AddCardDetails from "../components/addCarddetails";
import SeasonTickets from "../components/seasonTickets";
import ChangePassword from "../components/changepassword";
import EditProfile from "../components/myProfile/editProfile";
import PaymentBooking from "../components/payment.js/paymentBooking";



// import SideBar from "../sideBar";
import { getMemoizedAuthenticationData } from "../redux/selectors/authentication";
import CardDetails from "../components/addCarddetails/carddetails";



const CommonRoutes = () => {

    const authenticationData = useSelector(getMemoizedAuthenticationData);
    const { loginData, loginSuccess, loginLoader } = authenticationData
    let token = localStorage.getItem('token')
    console.log("token = ", token)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={token ? <Navigate to="/newBookings" /> : <Navigate to="/landing" />} />
                    {
                        token && (
                            <>
                                {/* <Route path="/" element={token ? <Home /> : <Landing />} /> */}
                                {/* <Route path="/home" element={<Home />} /> */}
                                <Route exact path="/newBookings" element={<NewBooking />} />
                                <Route exact path="/search" element={<SearchBooking/>} />
                                <Route path="/myBookings" element={<MyBookings />} />
                                <Route path="/bookingdetails" element={<ActiveBookingDetails/>} />
                                <Route path="/pastbookingdetails" element={<PastBookingDetails/>} />
                                <Route path="/futurebookingdetails" element={<FutureBookingDetails/>} />
                                <Route path="/longduartionbookingdetails" element={<LongDuartionBookingDetails/>} />
                                <Route path="/onedaybookingdetails" element={<OneDayBookingDetails/>} />
                                <Route path="/Profile" element={<Profile />} />
                                <Route path="/purchaseoyster" element={<PurchaseOyseterCard />} />
                                <Route path="/purchaseoystersearch" element={<PurchaseOysterSearch />} />
                                <Route path="/Paymentaddcard" element={<PaymentAddCard />} />
                                <Route path="/Paymentshipping" element={<PaymentShipping />} />
                                <Route path="/paymentremovedcard" element={<PaymentRemovedCard />} />
                                <Route path="/seasontickets" element={<SeasonTickets />} />
                                <Route path="/changepassword" element={<ChangePassword />} />
                                <Route path="/EditProfile" element={<EditProfile />} />
                                <Route path="/paymentbooking" element={<PaymentBooking />} />
                                <Route path="/addcarddetails" element={<AddCardDetails />} />
                                <Route path="/carddetails" element={<CardDetails />} />
                                

                            </>
                        )
                        
                    }


                    <Route path="/landing" element={!token ? <Landing /> : <Navigate to="/newBookings" />} />
                    <Route exact path="/finance" element={<Finance />} />
                    <Route exact path="/about" element={<AboutUs />} />
                    <Route exact path="/investors" element={<Investors />} />
                    <Route path="/login" element={!token ? <Login /> : <Navigate to="/newBookings" />} />
                    <Route path="/register" element={!token ? <Register /> : <Navigate to="/newBookings" />} />
                    <Route path="/forgotPassword" element={!token ? <ForgotPassword /> : <Navigate to="/newBookings" />} />
                    <Route exact path="/careers" element={<Careers />} />
                    <Route exact path="/press" element={<Press />} />
                    <Route path="/myBookings" element={<MyBookings />} />
                    <Route exact path="/newBookings" element={<NewBooking />} />
                    <Route path="/purchaseoystersearch" element={<PurchaseOysterSearch />} />
                    <Route exact path="/terms" element={<TermsConditions />} />
                    <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route exact path="/faq" element={<Facts />} />
                    <Route exact path="/contactUs" element={<ContactUs />} />
                   <Route path="/*" element={token ? <Navigate to="/newBookings" /> : <Navigate to="/landing" />} />

                </Routes>
            </Router>
        </>
    )
}

export default CommonRoutes


