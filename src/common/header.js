import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router"
import { Breadcrumb, Layout, Menu } from 'antd';
import images from "./../themes/appImage";
import {
  Link,
  useNavigate

} from "react-router-dom";
import {
  MenuOutlined
} from '@ant-design/icons';

import { getMemoizedAuthenticationData } from "../redux/selectors/authentication"
import { logoutInitiate } from "../redux/actions/authentication"
import { appConstants } from "../themes/appConstant";

const { Header, Content, Footer, Sider } = Layout;



const HeaderMain = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const isLoggedOut = useSelector(getMemoizedAuthenticationData)
  const {
    logoutSuccess
  } = isLoggedOut
  const { SubMenu } = Menu;
  let token = localStorage.getItem('token')

  useLayoutEffect(() => {
    if (logoutSuccess) {
      navigate('/')
    }
  }, [logoutSuccess])
  console.log("navigate = ", location)
  let activeKey = ""
  switch (location.pathname) {
    case "/finance":
      activeKey = "/finance"
      break;
    case "/about":
      activeKey = "/about"
      break;
    case "/investors":
      activeKey = "/investors"
      break;
    case "/login":
      activeKey = "/login"
      break;
    case "/register":
      activeKey = "/register"
      break;
    //newbooking
    case "/newBookings":
      activeKey = "/newBookings"
      break;
    case "/search":
      activeKey = "/newBookings"
      break;
    case "/paymentbooking":
      activeKey = "/newBookings"
      break;
    //mybookings
    case "/mybookings":
      activeKey = "/mybookings"
      break;
    case "/bookingdetails":
      activeKey = "/mybookings"
      break;
    case "/futurebookingdetails":
      activeKey = "/mybookings"
      break;
    case "/pastbookingdetails":
      activeKey = "/mybookings"
      break;
    case "/onedaybookingdetails":
      activeKey = "/mybookings"
      break;
    case "/longduartionbookingdetails":
      activeKey = "/mybookings"
      break;

    //profile
    case "/Profile":
      activeKey = "/Profile"
      break;
    case "/editprofile":
      activeKey = "/Profile"
      break;
    //oyster
    case "/purchaseOystersearch":
      activeKey = "/purchaseOystersearch"
      break;
    case "/PurchaseOyster":
      activeKey = "/purchaseOystersearch"
      break;
    case "/paymentshipping":
      activeKey = "/purchaseOystersearch"
      break;
    case "/addcarddetails":
      activeKey = "/addcarddetails"
      break;
    case "/carddetails":
      activeKey = "/addcarddetails"
      break;
    case "/seasontickets":
      activeKey = "/seasontickets"
      break;
    case "/changepassword":
      activeKey = "/changepassword"
      break;
    case "/landing":
      activeKey = "/landing"
      break;

  }

  // localStorage.setItem('token', '123456789')

  const handleClick = (e) => {
    navigate(e.key);
    console.log('click ', e);
    // e.key === '/login' &&  dispatch(LogoutAction(history))
  };

  return (
    <>
      {
        !token ? (
          <div className="header-home">
            <div className="container-fluid">
              <div className="header-desktop">
                <Menu
                  theme="dark"
                  // mode="inline"
                  responsive="false"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={[activeKey]}
                  selectedKeys={[activeKey]}
                  mode="horizontal"
                  onClick={handleClick}>
                  <Menu.Item key="/landing">
                    <Link to="/landing" >
                      <img src={images.logohome} style={{ width: '280px' }} />
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="/finance">
                    <Link to="/finance" >
                      <span className="line_dash">Finance</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <Link to="/about" >
                      <span className="line_dash">About Us</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/investors">
                    <Link to='/investors'>
                      <span className="line_dash">Investors</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/login">
                    <Link to="/login" >
                      <span className="line_dash button_space"><span className="button same" style={{ backgroundColor: '#11475B', color: '#fff' }}>Sign In</span></span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/register">
                    <Link to="/register" >
                      <span className="line_dash button_space" ><span className="button same">Sign Up</span></span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </div>
              <div className="menu_left_toogle d-flex responsive-header">
                <img src={images.logohome} style={{ width: '280px' }} />
                <div className="lite-text" onClick={() => props.handleClick()} ><MenuOutlined /></div>
              </div>

            </div>
          </div>
        ) : (
          <div className="header-home">
            <div className="container-fluid">
              <div className="header-desktop">
                <Menu
                  theme="dark"
                  // mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={[activeKey]}
                  selectedKeys={[activeKey]}
                  mode="horizontal"
                  onClick={handleClick}>

                  <Menu.Item key="/landing" onClick={() => {
                    localStorage.clear()
                    navigate('/')
                    dispatch(logoutInitiate())
                  }}>  <img src={images.logohome} style={{ width: '280px' }} />

                  </Menu.Item>

                  <SubMenu key="SubMenu" title="My Account" className="item_team">
                    <Menu.Item key="/newBookings">
                      <Link to="/newBookings">

                        {appConstants.newBooking}</Link></Menu.Item>
                    <Menu.Item key="/mybookings">
                      <Link to="/mybookings">
                        {appConstants.myBookings}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/Profile">
                      <Link to="/Profile ">
                        {appConstants.myProfile}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/purchaseOystersearch">
                      <Link to="/purchaseOystersearch">{appConstants.purchaseOC}</Link></Menu.Item>
                    <SubMenu key="sub3" title="Settings" className="item_team_two">
                      <Menu.Item key="/addcarddetails"><Link to="/addcarddetails">{appConstants.addDebitCreditCard}</Link></Menu.Item>
                      <Menu.Item key="/seasontickets"><Link to="/seasontickets">{appConstants.requestSeasonTkt}</Link></Menu.Item>
                      <Menu.Item key="/changepassword"><Link to="/changepassword">{appConstants.changePassword}</Link></Menu.Item>

                      <Menu.Item key="/landing" onClick={() => {
                        localStorage.clear()
                        navigate('/')
                        dispatch(logoutInitiate())
                      }}>Logout</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                  <Menu.Item key="/finance">
                    <Link to="/finance"> <span className="line_dash">{appConstants.finance}</span></Link>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <Link to="/about">
                      <span className="line_dash">{appConstants.aboutUs}</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="/investors">
                    <Link to="/investors">
                      <span className="line_dash">{appConstants.Investors}</span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </div>
              <div className="menu_left_toogle d-flex responsive-header">
                <img src={images.logohome} style={{ width: '280px' }} />
                <div className="lite-text" onClick={() => props.handleClick()} ><MenuOutlined /></div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}
export default HeaderMain;