import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu, Tooltip } from 'antd';
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


const CardDetails = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [value, setValue] = React.useState(1);
    const [cardvalue, setCardValue] = useState(false);

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
        document.title = 'Card Details';
        window.scrollTo(0, 0)

    }, [])
    return (


        <div>
            <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
            <HeaderMain handleClick={handlewClick} />
            <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>Card Details</h3>
                </div>
            </div>
            <div className="press password_small view-detailspage">
                <div className="container-fluid">

                    <h2 className="line">Card Details</h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>
                    <div className="search-result">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="text_wrapper_w payments pay_div crds-new add-cars_new">
                                    <div className="text_top d-flex">
                                        <div className="d-flex align-center bookert">
                                            <img src={images.shiptruck} />
                                            <p className="booker">Card Details</p>
                                        </div>

                                    </div>

                                    <div className="first d-flex cards_text " style={{flexDirection:'column',position:'relative'}}>

                                                <div className="d-flex  card-div-crs" style={{ width: '100%' }}>

                                                    <div class="text-center"><button class="button text" style={{ padding: '0px 6px', minWidth: '170px' }} onClick={() => { navigate('/addcarddetails') }}>Add New Card</button></div>
                                                </div>
                                                <div className="d-flex  card-div-crs justify-content-end " style={{ width: '100%'}}>
                                                    {/* <h2>Card Details</h2> */}
                                                    {/* <p>XXXX XXXX XXXX 6543</p> */}
                                                    <div class="text-center button-center pay-button text_p"><button class="button text" onClick={() => { setCardValue(1) }}>Remove</button></div>
                                                </div>
                                                {
                                                    cardvalue ==! '1' ?
                                                    <>
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
                                                <div className="d-flex  card-div-crs " style={{ width: '100%' }}>
                                                    <h2>CVV</h2>
                                                    <p>786</p>
                                                </div>
                                                </>
                                                :
                                                <div></div>
                                               }
                                                </div>
                                              
                                                
                                </div>
                            </div>
                        </div>
                        {console.log("value = ", value)}
                        {/* <div className="text-center button-center">
                            <button class="button text" onClick={() => (navigate('/addCarddetails'))}>Submit</button>
                        </div> */}

                    </div>


                </div>
            </div>

            <FooterMain />
        </div>




    )
}
export default CardDetails;



