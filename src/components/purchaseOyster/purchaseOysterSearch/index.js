import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu } from 'antd';
import images from "../../../themes/appImage";
import { Collapse, Select, DatePicker, Space } from 'antd';
import { Radio, InputNumber, TimePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate
} from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../../redux/selectors/authentication";
import { drawerAction } from "../../../redux/actions/authentication"
import MobileSidebar from "../../../common/mobilesidebar";
import HeaderMain from "../../../common/header";
import FooterMain from "../../../common/footer";
import { useLocation } from "react-router"




const PurchaseOysterSearch = (props,naviagation) => {
  const { state } = useLocation()
  // console.log(props,"-------------------------props",location)

  const { Option } = Select;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [value, setValue] = React.useState(1);


  const { SubMenu } = Menu;
  let token = localStorage.getItem('token')


  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData


  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  };
  useEffect(() => {
    document.title = 'Purchase Oyster Card';
    window.scrollTo(0, 0)
}, [])

useEffect(() => {
  console.log('stateChangeTest===>',state)
  if(state?.key=='fromLoginScreen'){
 window.history?.pushState(null, document.title, window.location.href);
  window.addEventListener("popstate", function (event) {
    window.history?.pushState(null, document.title, window.location.href);
  });

  return () => null
  }
 

}, [])


  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout booktableview">
        <div className="container-fluid spacert">
          <h3>Purchase Oyster Card</h3>
        </div>
      </div>
      <div className="press password_small">
        <div className="container-fluid">

          <h2 className="line">Purchase <span className="color-d">Oyster</span> Card</h2>
          <div className="text-line">
            <img src={images.border1} style={{ width: '400px' }} />
          </div>

          <div className="container-text-l train_div">
            <div className="row">
              <div className="col-sm-6">
                <div className="text-input-filed">
                  <div className="first-div-item">
                    <label>Zone Name</label>
                    <div className="text">
                      <Select placeholder="Zone Name" className="form-control">
                        <Option value="jack" title="">Zone1</Option>
                        <Option value="lucy" title="">Zone2</Option>
                      </Select>
                      <div className="suffle">
                        <img src={images.arrow} />
                      </div>
                      <Select placeholder="Zone Name" className="form-control">
                        <Option value="jack" title="">Zone1</Option>
                        <Option value="lucy" title="">Zone2</Option>
                      </Select>
                    </div>
                  </div>
                  {/* <div className="first-div-item">
                    <label>Duaration</label>
                    <div className="text">
                      <Select defaultValue="Duaration" className="form-control">
                        <Option value="jack">1 Day $70</Option>
                        <Option value="lucy">3 Months $200</Option>
                      </Select>
                    </div>
                  </div> */}
                </div>

              </div>
              <div className="col-sm-6">
                <div className="text-input-filed">
                  <div className="first-div-item">
                    <label>Passenger Type</label>
                    <div className="text">
                      <Select placeholder="Passenger Type" className="form-control">
                        <Option title="" value="jack">Adult</Option>
                        <Option title="" value="lucy">Children</Option>
                      </Select>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            <div className="text-center button-center">
              <button class="button text" onClick={()=>{!token?(navigate('/login',{state:{key:"fromPurchaseOyster"}})):(navigate('/PurchaseOyster'))}}>Search</button>
            </div>
          </div>

        </div>
      </div>
      <FooterMain/>
    </div>

  )
}
export default PurchaseOysterSearch;