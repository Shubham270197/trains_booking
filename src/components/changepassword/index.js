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
import { logoutInitiate } from "../../redux/actions/authentication"

const { Option } = Select;


const ChangePassword = (props) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [mask,setMask ] = useState(false)
  const [confirmmask,setconfirmMask ] = useState(false)
  const [newmask,setnewMask ] = useState(false)


  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');


  
   const handlepassword = () =>{
      if(password.length > 0){     
          setMask(!mask)
      } 
   }
   const Confirmhandlepassword = () =>{
    if(ConfirmPassword.length > 0){     
        setconfirmMask(!confirmmask)
    } 
 }
 const newhandlepassword = () =>{
  if(newPassword.length > 0){     
      setnewMask(!newmask)
  } 
}

  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {  drawerState } = authenticationData

  
  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  }
  useEffect(() => {
    document.title = 'Change Password';
    window.scrollTo(0, 0)

  }, [])
  return (


    <div>
       <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      <div className="mobileabout desktop">
                <div className="container-fluid spacert">
                    <h3>Change Password</h3>
                </div>
            </div>
            <div className="press password_small">
                <div className="container small-xs-container">

                <h2 className="line">Change <span className="color-d">Password </span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="text-input-filed password_change">
                     <div className="form-group">
                         <label>Old Password</label>
                         <input type={mask?'text':'password'}
                                         className="form-control"
                                         placeholder="Old Password"
                                         value={password}
                                         onChange={event =>setPassword(event.target.value)}
                                          />
                                        <img src={password.length<=0?images.unmask:mask?images.eye:images.unmask}  onClick={handlepassword} className="icon_left" />

                     </div>
                     <div className="form-group">
                         <label>New Password</label>
                         <input type={confirmmask?'text':'password'}
                                         className="form-control"
                                         placeholder="New Password"
                                         value={ConfirmPassword}
                                         onChange={event =>setConfirmPassword(event.target.value)}
                                          />
                                        <img src={ConfirmPassword.length<=0?images.unmask:confirmmask?images.eye:images.unmask}  onClick={Confirmhandlepassword} className="icon_left" />

                     </div>
                     <div className="form-group">
                         <label>Confirm New Password</label>
                         <input type={newmask?'text':'password'}
                                         className="form-control"
                                         placeholder="Confirm New Password"
                                         value={newPassword}
                                         onChange={event =>setnewPassword(event.target.value)}
                                          />
                                        <img src={newPassword.length<=0?images.unmask:newmask?images.eye:images.unmask}  onClick={newhandlepassword} className="icon_left" />

                     </div>
                     <div className="button_bottom text-center">
                     <button class="button text mb-10"onClick={() => {
                      localStorage.clear()
                      navigate('/login')
                      dispatch(logoutInitiate())}}>Submit</button>
                     </div>
                      
                    </div>
                </div>
            </div>
            <FooterMain/>
     
    </div>




  )
}
export default ChangePassword;



