import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu, Tooltip } from 'antd';
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


const AddCardDetails = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [value, setValue] = React.useState(1);
    const [oldblock, setOldBlock] = React.useState(false);


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    function onChange1(value) {
        console.log('changed', value);
    }

    const authenticationData = useSelector(getMemoizedAuthenticationData);
    const { drawerState } = authenticationData


    const handlewClick = () => {
        let action = drawerState ? false : true
        dispatch(drawerAction(action, 'drawerState'))
    }
    useEffect(() => {
        document.title = 'Add Card Details';
        window.scrollTo(0, 0)

    }, [])
    const [cardvalue, setCardValue] = useState(false);

    return (


        <div>
            <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
            <HeaderMain handleClick={handlewClick} />
            <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>Add Card Details</h3>
                </div>
            </div>
            <div className="press password_small">
                <div className="container-fluid">

                    <h2 className="line">Add Card Details</h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>

                    {!oldblock ?
                        <div className="container-text-l train_div">
                            <div className="debit_card">

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="text-input-filed">
                                            <div className="first-div-item firstmargin">
                                                <label>Card Type</label>
                                                <div className="text data-one">
                                                    <Radio.Group onChange={onChange} value={value}>
                                                        <Radio value='Debit'>Debit</Radio>
                                                        <Radio value='Credit'>Credit</Radio>
                                                    </Radio.Group>
                                                </div>
                                            </div>

                                            <div className="first-div-item">
                                                <label>Name</label>
                                                <div className="text">
                                                    <input type="text" className="form-control text-filed " placeholder="Name on card" />
                                                </div>
                                            </div>
                                            <div className="first-div-item">
                                                <label>Expiry Date</label>
                                                <div className="text spacert">
                                                    <Select className="form-control" placeholder="Month">
                                                        <Option title=" " value="1">01</Option>
                                                        <Option title=" " value="2">02</Option>
                                                        <Option title=" " value="3">03</Option>
                                                        <Option title=" " value="4">04</Option>
                                                        <Option title=" " value="5">05</Option>
                                                        <Option title=" " value="6">06</Option>
                                                        <Option title=" " value="7">07</Option>
                                                        <Option title=" " value="8">08</Option>
                                                        <Option title=" " value="9">09</Option>
                                                        <Option title=" " value="10">10</Option>
                                                        <Option title=" " value="11">11</Option>
                                                        <Option title=" " value="12">12</Option>
                                                    </Select>
                                                    <span style={{ visibility: 'hidden' }}>asdasd;</span>

                                                    <Select className="form-control" placeholder="Year">
                                                        <Option title=" " value="21">2021</Option>
                                                        <Option title=" " value="22">2022</Option>
                                                        <Option title=" " value="23">2023</Option>
                                                        <Option title=" " value="24">2024</Option>
                                                        <Option title=" " value="25">2025</Option>
                                                        <Option title=" " value="26">2026</Option>
                                                        <Option title=" " value="27">2027</Option>
                                                        <Option title=" " value="28">2028</Option>
                                                        <Option title=" " value="29">2029</Option>
                                                        <Option title=" " value="30">2030</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-input-filed margin_top">
                                            <div className="first-div-item">
                                                <label>Card Number</label>
                                                <div className="text">
                                                    <input type="text" className="form-control text-filed" placeholder="Card Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-input-filed margin_top" style={{ marginTop: '0' }}>
                                            <div className="first-div-item">
                                                <label style={{ width: '192px' }}>CVV</label>
                                                <div className="text cvv_text">
                                                    <div className="cvv_number">
                                                        <input type="password" className="form-control text-filed cvv" placeholder="CVV" />
                                                       
                                                            <span className="top_image" style={{ cursor: 'pointer' }}></span>
                                                    </div>
                                                    {/* <input type="text" className="form-control text-filed" placeholder="CVV" /> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {console.log("value = ", value)}
                            <div className="text-center button-center">
                                <button class="button text" onClick={() => { setOldBlock(!oldblock) }}>Add</button>
                            </div>

                        </div> :
                         <div className="text_wrapper_w payments pay_div crds-new add-cars_new">
                         <div className="text_top d-flex">
                             <div className="d-flex align-center bookert">
                                 <img src={images.shiptruck} />
                                 <p className="booker">Card Details</p>
                             </div>

                         </div>

                        <div className="first d-flex cards_text " style={{ flexDirection: 'column', position: 'relative' }}>
                            <div className="d-flex  card-div-crs justify-content-end " style={{ width: '100%' }}>
                                <div class="text-center button-center pay-button text_p"><button class="button text" onClick={() => { setOldBlock(!oldblock) }}>Remove</button></div>
                            </div>

                            <div className="d-flex  card-div-crs " style={{ width: '100%' }}>
                                <h2>Card Type</h2>
                                <p>Debit card</p>
                            </div>
                            <div className="d-flex  card-div-crs " style={{ width: '100%' }}>
                                <h2>Name</h2>
                                <p>Ankuj</p>
                            </div>
                            <div className="d-flex  card-div-crs " style={{ width: '100%' }}>
                                <h2>Expiry Date</h2>
                                <p>12/2021</p>
                            </div>
                            <div className="d-flex  card-div-crs " style={{ width: '100%' }}>
                                <h2>Card Details</h2>
                                <p>XXXX XXXX XXXX 6543</p>
                            </div>
                            
                            </div>

                        </div>}
                </div>
            </div>

            <FooterMain />
        </div>




    )
}
export default AddCardDetails;



