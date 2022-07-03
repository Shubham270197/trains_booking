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
import { useLocation } from 'react-router'
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication"
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";




const SearchBooking = (props) => {
    console.log("data data")
    const { Option } = Select;

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { state } = useLocation()

    console.log("location = ", state)

    const [value, setValue] = React.useState(1);


    const { SubMenu } = Menu;



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
        document.title = 'New Booking';
        window.scrollTo(0, 0)

    }, [])
    return (
        <div>
            <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
            <HeaderMain handleClick={handlewClick} />
            <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>New Booking</h3>
                </div>
            </div>
            <div className="press">
                <div className="container-fluid">

                    <h2 className="line">Search Result</h2>
                    <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="search-result">
                        <div className="row">
                            {state?.jorneyType == '2' ? (<>
                                <div className="col-sm-4 col-xs-4">
                                    <div className="text_wrapper_w height_W">
                                        <div className="text_top d-flex">
                                            <div className="d-flex align-items-center">
                                            <img src={images.trainout} />
                                            <p class="booker">Out</p>
                                            </div>
                                            <div className="text-wed">
                                                <h4> Wed 17 Nov 2021</h4>
                                                <p>Station 1 to Station 2 </p>
                                            </div>

                                        </div>
                                        <div className="first d-flex button-current">
                                            <button type="submit"><img src={images.top} />Earlier</button>
                                        </div>
                                        <div className="scroll_el">
                                        <div className="first d-flex standard_class">
                                            <div style={{ visibility: 'hidden' }}>
                                                <h2>01:50 AM - 02:50 PM</h2>
                                            </div>
                                            <div>
                                                <h2>Standard</h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">1st Class <span style={{ visibility: 'hidden' }}>Ava</span> </p>
                                            </div>
                                        </div>

                                        <div className="first d-flex actives">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2>  <Radio.Group onChange={onChange} value={value}><Radio>£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex ">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first1">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second1">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second2">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="first d-flex button-current">
                                            <button type="submit " className="latercolor"><img src={images.recent} />Later</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-4">
                                    <div className="text_wrapper_w height_W">
                                        <div className="text_top d-flex">
                                        <div className="d-flex align-items-center">
                                            <img src={images.train} />
                                            <p class="booker">Return</p>
                                            </div>
                                            <div className="text-wed">
                                                <h4> Wed 17 Nov 2021</h4>
                                                <p>Station 1 to Station 2 </p>
                                            </div>

                                        </div>
                                        <div className="first d-flex button-current">
                                            <button type="submit"><img src={images.top} />Earlier</button>
                                        </div>
                                        <div className="scroll_el">
                                        <div className="first d-flex standard_class">
                                            <div style={{ visibility: 'hidden' }}>
                                                <h2>01:50 AM - 02:50 PM</h2>
                                            </div>
                                            <div>
                                                <h2>Standard</h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">1st Class <span style={{ visibility: 'hidden' }}>Ava</span> </p>
                                            </div>
                                        </div>
                                        <div className="first d-flex actives">
                                            <div>
                                                <h2  className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2>  <Radio.Group onChange={onChange} value={value}><Radio  name="amount" value="first10" >£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex ">
                                            <div>
                                                <h2  className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first9">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first5">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2  className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second4">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2  className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second3">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="first d-flex button-current">
                                            <button type="submit " className="latercolor"><img src={images.recent} />Later</button>
                                        </div>
                                    </div>
                                </div>
                                 </>) : (
                                       <div className="col-sm-8 col-xs-8">
                                      <div className="text_wrapper_w height_W">
                                        <div className="text_top d-flex">
                                            <div className ="d-flex align-items-center">
                                            <img src={images.trainout} />
                                            <p class="booker">Out</p>
                                            </div>
                                            <div className="text-wed">
                                                <h4> Wed 17 Nov 2021</h4>
                                                <p>Station 1 to Station 2 </p>
                                            </div>

                                        </div>
                                       
                                        <div className="first d-flex button-current">
                                            <button type="submit"><img src={images.top} />Earlier</button>
                                        </div>
                                        <div className="scroll_el">
                                        <div className="first d-flex standard_class">
                                            <div style={{ visibility: 'hidden' }}>
                                                <h2>01:50 AM - 02:50 PM</h2>
                                            </div>
                                            <div>
                                                <h2>Standard <span style={{ visibility: 'hidden' }}>41</span></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">1st Class <span style={{ visibility: 'hidden' }}>Ava</span> </p>
                                            </div>
                                        </div>
                                        <div className="first d-flex actives">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2>  <Radio.Group onChange={onChange} value={value}><Radio  name="amount" value="first10" >£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex ">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first9">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        <div>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <h2><Radio name="amount" value="first5">£135.50</Radio></h2>
                                            </Radio.Group>
                                        </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second4">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        <div className="first d-flex">
                                            <div>
                                                <h2 className="mr_bootom">01:50 AM - 02:50 PM</h2>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                            <div>
                                                <h2><Radio.Group onChange={onChange} value={value}><Radio name="amount" value="second3">£135.50</Radio></Radio.Group></h2>
                                            </div>
                                            <div>
                                                <p className="left-bold">Not Available</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="first d-flex button-current">
                                            <button type="submit " className="latercolor"><img src={images.recent} />Later</button>
                                        </div>
                                    </div>
                                   </div>
                                )}
                            <div className="col-sm-4">
                                <div className="item_box_item">
                                    <h2>Total</h2>
                                    <p>£271.00</p>
                                    <h3 className="adult">1 Adult, 2 Children</h3>
                                    <div class="text-center button-center"><button class="button text" onClick={()=>{(navigate('/paymentbooking'))}}>Continue</button></div>
                                </div>
                                <p className="text_line_e">pLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain/>
        </div >

    )
}
export default SearchBooking;
