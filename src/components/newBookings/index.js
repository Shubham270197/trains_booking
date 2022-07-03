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


const NewBooking = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [value, setValue] = React.useState(1);

  const onChange = e => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  function onChange1(value) {
    console.log('changed', value);
  }

  //number increment
  const [Number, setNumber] = useState(0)
  const increment = () => {
    if (Number >= 0 && Number < 10) {
      setNumber(Number + 1)
    }
  }
  const decrment = () => {
    if (Number > 0)
      setNumber(Number - 1)
  }
  //number increment
  const [NumberSecond, setNumberSecond] = useState(1)
  const incrementOne = () => {
    if (NumberSecond >= 1 && NumberSecond < 10) {
      setNumberSecond(NumberSecond + 1)
    }
  }
  const decrmentone = () => {
    if (NumberSecond > 1)
      setNumberSecond(NumberSecond - 1)
  }
  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData


  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  }
  // useEffect(() => {
  //   document.title = 'New Booking';
  //   window.scrollTo(0, 0)

  // }, [])

  useEffect(() => {
    document.title = "New Booking"
    window.scrollTo(0, 0)
    window.history?.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history?.pushState(null, document.title, window.location.href);
    });
  
    return () => null
  
  }, [])

  const dateFormat = 'DD/MM/YYYY';
  const datedefault ='HH:MM:SS'
  return (


    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />

      <div className="mobileabout booktableview">
        <div className="container-fluid spacert">
          <h3>{appConstants.newBooking}</h3>
        </div>
      </div>
      <div className="press password_small">
        <div className="container-fluid">

          <h2 className="line">{appConstants.new} <span className="color-d">{appConstants.booking}</span></h2>
          <div className="text-line" style={{marginBottom:'12px'}}>
            <img src={images.border1} style={{ width: '400px' }} />
          </div>

          <div className="container-text-l train_div carddetails">
            <div className="row">
              <div className="col-sm-6">
                <div className="text-input-filed">
                  <div className="first-div-item firstmargin">
                    <label>{appConstants.TicketType}</label>
                    <div className="text data-one">
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>{appConstants.oneway}</Radio>
                        <Radio value={2}>{appConstants.roundtrip}</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="first-div-item">
                    <label>{appConstants.StationName}</label>
                    <div className="text">
                      <Select placeholder={appConstants.source} className="form-control">
                        <Option  title=" " value="jack">London</Option>
                        <Option  title=" " value="lucy">Manchester</Option>
                      </Select>
                      <div className="suffle">
                        <img src={images.arrow} />
                      </div>
                      <Select placeholder={appConstants.destination} className="form-control">
                        <Option  value="jack" title=" ">London</Option>
                        <Option  title=" " value="lucy">Manchester</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="first-div-item ">
                    <label>{appConstants.Date}</label>
                    <div className="text">
                      <Space direction="vertical">
                        <DatePicker placeholder={appConstants.dateformat} format={dateFormat} inputReadOnly />

                      </Space>
                    </div>
                  </div>
                  <div className="first-div-item time_data">
                    <label>{appConstants.Time}</label>
                    <div className="text" >
                      <TimePicker placeholder={appConstants.timeformat} inputReadOnly />
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-sm-6">
                <div className="text-input-filed margin_top">
                  <div className="first-div-item item-count">
                    <div className="first-i">
                      <label style={{ width: '138px' }}>{appConstants.ChildrenCount}</label>
                      <div className="number-input">
                        <input type="number" className={`${Number > 0 && 'colr-change'}`} value={Number} min={1} max={10} />
                        <img src={images.up} onClick={increment} className="first" />
                        <img src={images.up} onClick={decrment} className="second" />
                      </div>
                      {/* <InputNumber min={1} max={10} defaultValue={3} onChange={onChange1} /> */}
                    </div>
                    <div>
                      <div className="first-i">
                        <label style={{ width: '121px' }}>{appConstants.AdultCount}</label>
                        <div className="number-input">
                          {console.log("value = ", NumberSecond)}
                          <input className={`${NumberSecond > 0 && 'colr-change'}`} type="number" value={NumberSecond} min={1} max={10} placeholder="0" />
                          <img src={images.up} onClick={incrementOne} className="first" />
                          <img src={images.up} onClick={decrmentone} className="second" />
                        </div>
                        {/* <InputNumber min={1} max={10} defaultValue={3} onChange={onChange1} /> */}
                      </div>
                    </div>
                    {/* <input ty */}

                  </div>
                  <div className="first-div-item">
                    <label>{appConstants.Leave}</label>
                    <div className="text">
                    <Select  className="form-control" placeholder={appConstants.Leave} >
                          <Option value="jack" title=" ">Leave After</Option>
                          <Option value="lucy" title=" ">Leave Before</Option>
                        </Select>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {
              value == 2 &&
              <div>
                <h2 className="line top_space_bottom">Return<span className="color-d"> Details</span></h2>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="text-input-filed ">
                      <div className="first-div-item">
                        <label>{appConstants.Date}</label>
                        <div className="text">
                          <Space direction="vertical">
                            <DatePicker placeholder={appConstants.dateformat} format={dateFormat} inputReadOnly />

                          </Space>
                        </div>
                      </div>
                      <div className="first-div-item ">
                        <label>{appConstants.Time}</label>
                        <div className="text">
                          <TimePicker placeholder={appConstants.timeformat} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} inputReadOnly />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-sm-6">
                    <div className="text-input-filed margin_top" style={{ marginTop: '0px' }}>
                      <div className="first-div-item">
                        <label>{appConstants.Leave}</label>
                        <Select className="form-control" placeholder={appConstants.Leave}>
                          <Option value="jack">Leave After</Option>
                          <Option value="lucy">Leave Before</Option>
                        </Select>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            }
            <div className="text-center button-center">
              <button class="button text" onClick={() => navigate('/search', { state: { jorneyType: value } })}>{appConstants.Search}</button>
            </div>
          </div>

        </div>
      </div>
      <FooterMain />
    </div>




  )
}
export default NewBooking;



// import { useNavigate } from "react-router-dom";

// const NewBooking = () => {

//   const navigate = useNavigate()

//   return (
//     <div>
//       <h3>Welcome to New Bookings screen...</h3>
//       <div>
//         <div>
//           There is nav Links after Login
//         </div>
//         <button onClick={() => navigate("/newBookings")}>New Bookings</button>
//         <button onClick={() => navigate("/myBookings")}>My Bookings</button>
//         <button onClick={() => navigate("/Profile")}>My Profile</button>
//         <button onClick={() => navigate("/purchaseOyster")}>Purchase Oyster Card</button>
//       </div>
//     </div>
//   )
// }

// export default NewBooking