import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu } from 'antd';
import images from "../../../../themes/appImage";
// import tableLoading from '../common/tableloading'
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate
} from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../../../redux/selectors/authentication";
import { drawerAction } from "../../../../redux/actions/authentication";
import MobileSidebar from "../../../../common/mobilesidebar";
import HeaderMain from "../../../../common/header";
import FooterMain from "../../../../common/footer";



const OneDayBookingDetails = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authenticationData = useSelector(getMemoizedAuthenticationData);
    const {  drawerState } = authenticationData
  
    
    const handlewClick = () => {
      let action = drawerState ? false : true
      dispatch(drawerAction(action, 'drawerState'))
    }
    useEffect(() => {
        document.title = 'Booking Details';
        window.scrollTo(0, 0)

    }, [])
    

    return (
        <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      <div className="mobileabout">
                <div className="container-fluid spacert">
                    <h3>Booking Details</h3>
                </div>
            </div>
            <div className="press password_small view-detailspage">
                <div className="container">


                    <h2 className="line">Booking <span className="color-d">Details</span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Ticket ID</label>
                                    <input type="text" className="form-control" value="5454D45" disabled />

                                </div>
                                <div className="form-group">
                                    <label>Source Zone Name</label>
                                    <input type="text" className="form-control" value="Station 2" disabled />

                                </div>
                                <div className="form-group">
                                    <label>Duration</label>
                                    <input type="text" className="form-control" value="1 Day"  disabled/>

                                </div>
                                <div className="form-group">
                                    <label>Booking Date</label>
                                    <input type="text" className="form-control" value="01/01/2021" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Payment By </label>
                                    <input type="text" className="form-control" value="Card" disabled />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Passenger Type </label>
                                    <input type="text" className="form-control" value="Adult" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Destination Zone  Name</label>
                                    <input type="text" className="form-control" value="Station 1" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Ticket Price  </label>
                                    <input type="text" className="form-control" value="£200" disabled />
                                </div>
                                <div className="form-group">
                                    <label>Transaction ID</label>
                                    <input type="text" className="form-control" value="45646464" disabled />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="line top-usersd">User <span className="color-d">Details</span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>User ID</label>
                                    <input type="text" className="form-control" value="100" disabled />

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="text" className="form-control" value="john@yopmail.com" disabled />

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" value="132 Street, London" disabled/>

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" className="form-control" value="London" disabled />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" value="John Doe" disabled />

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" value="+44 999999999" disabled/>

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" className="form-control" value="100000"disabled />

                                </div>
                            </div>
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Status</label>
                                    <input type="text" className="form-control" value="Under Processing" disabled/>

                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <h2 className="line top-usersd">Courier <span className="color-d">Details</span></h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Delivery Partner</label>
                                    <input type="text" className="form-control" value="DHL" disabled />

                                </div>
                            </div>
                          
                            <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Tracking URL</label>
                                    <input type="text" className="form-control" value="N/A" disabled />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="text-input-filed">
                                <div className="form-group">
                                    <label>Tracking ID</label>
                                    <input type="text" className="form-control" value="56456416" disabled />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <FooterMain/>
        </div >

    )
}
export default OneDayBookingDetails;
