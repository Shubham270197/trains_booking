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
const { Option } = Select;


const EditProfile = (props) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {  drawerState } = authenticationData

  
  const handlewClick = () => {
    let action = !drawerState 
    dispatch(drawerAction(action, 'drawerState'))
  }
  useEffect(() => {
    document.title = 'Edit User & Billing Contact Details ';
    window.scrollTo(0, 0)

}, [])
  return (


    <div>
       <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      
      <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>Edit User & Billing Contact Details</h3>
                </div>
            </div>
            <div className="press password_small">
                <div className="container">


                    <h2 className="line">Edit <span className="color-d">User</span> Details</h2>
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
                                            <div className="text-input-filed">
                                            <Select  placeholder="Title" defaultValue="Mr" className="form-control new_form_groups">
                                                <Option value="1" title="">Mr.</Option>
                                                <Option value="2" title="">Miss.</Option>
                                                <Option value="3" title="">Mrs.</Option>
                                                <Option value="4" title="">Other</Option>
                                            </Select>
                                        </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" Value="John Doe" placeholder="Name"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" className="form-control"   placeholder="Email Address" Value="John@gmail.com"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group phone_number">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Phone Number" Value="9999999"/>
                                            <span className='text_phone edit'>+44</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Address" Value="New Street,365,LA"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Postal Code</label>
                                            <input type="text" className="form-control" placeholder="Postal Code" Value="1000000"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" className="form-control" Value="London"  placeholder="City"/>

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
                                            <input type="text" className="form-control" Value="John"  placeholder="First Name"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control"  placeholder="Last Name" Value="Doe"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group phone_number">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control"  placeholder="Phone Number" Value="99999999"/>
                                            <span className='text_phone edit'>+44</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Fax ID</label>
                                            <input type="text" className="form-control"  placeholder="Fax ID" Value="88888888"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" className="form-control" placeholder="Email Address" Value="John@gmail.com"/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Address" Value="New Street,365,LA"/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_bottom text-center">
                        <button class="button text small-width" onClick={()=>navigate('/Profile')}>Update</button>





                    </div>
                </div>
            </div>
            <FooterMain/>
    </div>




  )
}
export default EditProfile;



