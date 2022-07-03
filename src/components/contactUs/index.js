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
import { appConstants } from "../../themes/appConstant";
const { Option } = Select;


const ContactUS = (props) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {  drawerState } = authenticationData

  
  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  }
  useEffect(() => {
    document.title = 'Contact Us';
    window.scrollTo(0, 0)

  }, [])
  return (


    <div>
       <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      
      <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>{appConstants.contact}</h3>
                </div>
            </div>
            <div className="press password_small">
                <div className="container small-xs-container">

                <h2 className="line">{appConstants.contactfirst} <span className="color-d">{appConstants.contactsecond}</span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="text-input-filed">
                     <div className="form-group phone_number">
                         <label>{appConstants.phonenumber}</label>
                         <input type ="text" className="form-control" placeholder={appConstants.phonenumber}/>
                         <span className='text_phone'>+44</span>
                        
                     </div>
                     <div className="form-group">
                         <label>{appConstants.EmailAddress}</label>
                         <input type ="text" className="form-control" placeholder={appConstants.EmailAddress}/>

                     </div>
                     <div className="form-group">
                         <label>{appConstants.message}</label>
                         <textarea className="form-control lef-contact" placeholder={appConstants.message}></textarea>
                     </div>
                     <div className="button_bottom text-center">
                     <button class="button text">{appConstants.submit}</button>
                     </div>
                      
                    </div>
                </div>
            </div>
            <FooterMain/>

    </div>




  )
}
export default ContactUS;



