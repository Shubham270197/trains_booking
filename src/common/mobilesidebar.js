import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router"
import { Breadcrumb, Layout, Menu, Drawer } from 'antd';
import images from "./../themes/appImage";
import { useDispatch,useSelector } from "react-redux";
import {
  useNavigate

} from "react-router-dom";
import { getMemoizedAuthenticationData } from "../redux/selectors/authentication";
import { drawerAction, logoutInitiate } from "../redux/actions/authentication"
import { appConstants } from "../themes/appConstant";

const { Header, Content, Footer, Sider } = Layout;



const MobileSidebar = (props) => {

  const isLoggedOut = useSelector(getMemoizedAuthenticationData)
  const {
    logoutSuccess
  } = isLoggedOut

  useLayoutEffect(() => {
    if (logoutSuccess) {
      navigate('/')
    }
  }, [logoutSuccess])

  const navigate = useNavigate()
  const location = useLocation()
  const { SubMenu } = Menu;
  let token = localStorage.getItem('token')
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



  
  const dispatch = useDispatch()
  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {  drawerState } = authenticationData
  const handleClick = e => {
    console.log('click ', e);
    navigate(e.key);
    dispatch(drawerAction(!drawerState, 'drawerState'))
  };

  return (

    <Drawer placement="left"
      onClose={props.handlewClick}
      visible={props.isVisible}
      width={240}
      onClick={() =>props.handlewClick}>
      <Sider
        //   breakpoint="xxl"
        collapsedWidth="0"
        width="250"

        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {
          !token ? (
            <div className="header-home">
              <div className="container-fluid">

                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={[activeKey]}
                  defaultOpenKeys={[activeKey]}
                  selectedKeys={[activeKey]}
                  onClick={handleClick}>
                  <Menu.Item key="/landing">
                    <img src={images.logohome} style={{ width: '280px' }} />
                  </Menu.Item>

                  <Menu.Item key="/finance">
                    <span className="line_dash">Finance</span>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <span className="line_dash">About Us</span>
                  </Menu.Item>
                  <Menu.Item key="/investors">
                    <span className="line_dash">Investors</span>
                  </Menu.Item>
                  <Menu.Item key="/login">
                    <span className="line_dash button_space"><span className="button same">Sign In</span></span>
                  </Menu.Item>
                  <Menu.Item key="/register">
                    <span className="line_dash button_space" ><span className="button same">Sign Up</span></span>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          ) : (
            <div className="header-home">
              <div className="container-fluid">

                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={[activeKey]}
                  defaultOpenKeys={[activeKey]}
                  selectedKeys={[activeKey]}
                  destroyOnClose={true}
                  onClick={handleClick}>
                  

                  <Menu.Item key="/dashboard">
                    <img src={images.logohome} style={{ width: '280px' }} />
                  </Menu.Item>

                  <SubMenu key="SubMenu" title="My Account" className="item_team">
                    <Menu.Item key="/newBookings">{appConstants.newBooking}</Menu.Item>
                    <Menu.Item key="/mybookings">{appConstants.myBookings}</Menu.Item>
                    <Menu.Item key="/Profile">{appConstants.myProfile}</Menu.Item>
                    <Menu.Item key="/purchaseOystersearch">{appConstants.purchaseOC}</Menu.Item>
                    <SubMenu key="sub3" title="Settings" className="item_team_two responsive_two" >
                      <Menu.Item key="/addcarddetails">{appConstants.addDebitCreditCard}</Menu.Item>
                      <Menu.Item key="/seasontickets">{appConstants.requestSeasonTkt}</Menu.Item>
                      <Menu.Item key="/changepassword">{appConstants.changePassword}</Menu.Item>
                      <Menu.Item key="/landing" onClick={() => {
                         localStorage.clear()
                         navigate('/')
                         dispatch(logoutInitiate())
                      }}>Logout</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                  <Menu.Item key="/finance">
                    <span className="line_dash">{appConstants.finance}</span>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <span className="line_dash">{appConstants.aboutUs}</span>
                  </Menu.Item>
                  <Menu.Item key="/investors">
                    <span className="line_dash">{appConstants.Investors}</span>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          )
        }
      </Sider>
    </Drawer>

  )
}
export default MobileSidebar;