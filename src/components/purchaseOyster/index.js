import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu } from 'antd';
import images from "../../themes/appImage";
import { Collapse, Select, DatePicker, Space } from 'antd';
import { Radio, InputNumber, TimePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate
} from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication"
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";




const PurchaseOyster = (props) => {
  // console.log(props,"-------------------------props")
  const { Option } = Select;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [value, setValue] = React.useState(1);
  const [duration, setDuraton] = React.useState(null)


  const { SubMenu } = Menu;

  

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData


  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  };

  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  }
  useEffect(() => {
    document.title = 'Purchase Oyster Card';
    window.scrollTo(0, 0)

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
                      <Select placeholder="Zone Name" className="form-control" >
                        <Option value="jack">Zone1</Option>
                        <Option value="lucy">Zone2</Option>
                      </Select>
                      <div className="suffle">
                        <img src={images.arrow} />
                      </div>
                      <Select placeholder="Zone Name" className="form-control">
                        <Option value="jack">Zone1</Option>
                        <Option value="lucy">Zone2</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="first-div-item">
                    <label>Duration</label>
                    <div className="text">
                      <Select placeholder="Duration" className="form-control" onSelect={(item) => {
                        setDuraton(item)
                      }} >
                        <Option value="1" >1 Day $70</Option>
                        <Option value="2" >3 Months $200</Option>
                      </Select>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-sm-6">
                <div className="text-input-filed">
                  <div className="first-div-item">
                    <label style={{textAlign:'right',marginRight:'20px'}}>Passenger Type</label>
                    <div className="text">
                      <Select placeholder="Passenger Type" className="form-control">
                        <Option value="jack">Adult</Option>
                        <Option value="lucy">Children</Option>
                      </Select>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            <div className="text-center button-center">
              <button class="button text"  onClick={()=> navigate('/paymentshipping',{state: {cardDuration: duration}})}>Pay</button>
            </div>
          </div>

        </div>
      </div>
      <FooterMain/>
    </div>

  )
}
export default PurchaseOyster;