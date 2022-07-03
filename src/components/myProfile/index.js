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
const { Option } = Select;


const Profile = (props) => {
  
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
    document.title = 'Profile & Billing Contact Details';
    window.scrollTo(0, 0)

}, [])
  return (


    <div>
       <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>Profile & Billing Contact Details</h3>
                </div>
            </div>
            <div className="press password_small view-detailspage">
                <div className="container">


                    <h2 className="line">Profile <span className="color-d">Details</span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="row">
                        <div className="text-input-filed" style={{ width: '100%' }} >
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" className="form-control" Value="Mr." disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" Value="John Doe" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" className="form-control" Value="John@gmail.com" disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" Value="+44 9999999" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" Value="New Street,365,LA" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Postal Code</label>
                                            <input type="text" className="form-control" Value="1000000" disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" className="form-control" Value="London" disabled />

                                        </div>
                                    </div>
                                </div>
                               
                            </div>




                        </div>
                    </div>


                    <h2 className="line space-text_D" >Billing <span className="color-d">Contact</span> Details</h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="row">
                        <div className="text-input-filed" style={{ width: '100%' }} >
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" className="form-control" Value="John" disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" Value="Doe" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" Value="+44 99999999" disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Fax ID</label>
                                            <input type="text" className="form-control" Value="88888888" disabled />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" className="form-control" Value="John@gmail.com" disabled />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" Value="New Street,365,LA" disabled />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_bottom text-center">
                        <button class="button text small-width" onClick={() => navigate('/editprofile')}>Edit</button>





                    </div>
                </div>
            </div>
      
     <FooterMain/>
    </div>




  )
}
export default Profile;



