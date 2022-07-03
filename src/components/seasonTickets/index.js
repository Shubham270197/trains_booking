import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu,Modal } from 'antd';
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
import Footer from "../../common/footer";
import FooterMain from "../../common/footer";
const { Option } = Select;


const SeasonTickets = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
  const navigate = useNavigate()
  const dispatch = useDispatch()
   

  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {  drawerState } = authenticationData


  const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
  };
  function onChange1(value) {
      console.log('changed', value); 
  }
  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  }
  useEffect(() => {
    document.title = 'Season Ticket Details';
    window.scrollTo(0, 0)

}, [])
const dateFormat = 'DD/MM/YYYY';

  
  const _modalView = () => {
    return (
        <Modal
            title="Confirmation"
            centered
            className="sharemodal loginer Confirmationseasons"
            width={536}
            visible={isModalVisible}
            footer={null}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
        >
            <div className="text_line_view data-view">
                <div className="d-flex">
                    <h2>Amount</h2>
                    <p>£200</p>
                </div>
                <div className="d-flex">
                    <h2>Payment Option</h2>
                    <p>
                        <div className=" text data-one"> <Radio.Group onChange={onChange} value={value}>
                            <Radio value='pay'>Pay</Radio>
                            <Radio value='finance'>Finance</Radio>
                        </Radio.Group></div></p>
                </div>





                <div className="text-center top_model_data">
                    <button type="submit" className="button text color_diff" onClick={() => setIsModalVisible(false)}>Cancel</button>&nbsp;	&nbsp;	&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="button text" onClick={() => navigate('/mybookings')}>Submit</button>
                </div>
            </div>

        </Modal>

    )
}
  return (
    <div>
       <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick}/>
      <div className="mobileabout booktableview">
                <div className="container-fluid spacert">
                    <h3>Season Ticket Details</h3>
                </div>
            </div>
            <div className="press password_small">
                <div className="container-fluid">
                    <h2 className="line">Season Ticket Details</h2>
                    <div className="text-line">
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div>

                    <div className="container-text-l train_div carddetails">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="text-input-filed top_cers_new">
                                <div className="first-div-item">
                                    <label>Ticket ID<span style={{visibility:'hidden'}}>i1</span></label>
                                    <div className="text">
                                        <p>768953</p>
                                    </div>
                                </div>
                                <div className="first-div-item">
                                    <label>User Type</label>
                                    <div className="text">
                                        <p>Children</p>
                                    </div>
                                </div>
                                <div className="first-div-item">
                                    <label>Source</label>
                                    <div className="text">
                                        <p className="processing_div">Leeds</p>
                                    </div>
                                </div>
                                <div className="first-div-item">
                                    <label>Destination</label>
                                    <div className="text">
                                        <p className="processing_div">London</p>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="text-input-filed top_cers_new">
                                <div className="first-div-item">
                                    <label>Start Date</label>
                                    <div className="text">
                                        <p>01/01/2019</p>
                                    </div>
                                </div>
                                <div className="first-div-item">
                                    <label>Expiry Date</label>
                                    <div className="text">
                                        <p>01/01/2022</p>
                                    </div>
                                </div>
                                <div className="first-div-item">
                                    <label>Status</label>
                                    <div className="text">
                                        <p className="processing_div">Under Processing</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="text-input-filed">
                                    <div className="first-div-item">
                                        <label>Station Name</label>
                                        <div className="text">
                                            <Select  className="form-control" placeholder="Source">
                                                <Option value="jack" title="">London</Option>
                                                <Option value="lucy" title="">Manchester</Option>
                                            </Select>
                                            <div className="suffle">
                                                <img src={images.arrow} />
                                            </div>
                                            <Select className="form-control" placeholder="Destination">
                                                <Option value="jack" title="">Manchester</Option>
                                                <Option value="lucy" title="">London</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="first-div-item">
                                        <label>Duration</label>
                                        <div className="text">
                                            <Select className="form-control" placeholder="Duration">
                                                <Option value="1" title="">1 Month</Option>
                                                <Option value="2" title="">6 Months</Option>
                                                <Option value="3" title="">12 Months</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="first-div-item">
                                        <label>Leave</label>
                                        <Select className="form-control" placeholder="Leave">
                                                <Option value="jack" title="">Leave After</Option>
                                                <Option value="lucy" title="">Leave Before</Option>
                                            </Select>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="text-input-filed">
                                    <div className="first-div-item">
                                        <label className="date_space">Start Date</label>
                                        <div className="text">
                                            <Space direction="vertical" >
                                                <DatePicker placeholder="dd/mm/yyyy" format={dateFormat} inputReadOnly />
                                            </Space>

                                        </div>

                                    </div>

                                    <div className="first-div-item firstmargin">
                                        <label className="date_space">User Type</label>
                                        <div className="text data-one one">
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Radio value='1'>Adult</Radio>
                                                <Radio value='2'>Children</Radio>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="text-center button-center">
                            <button class="button text" onClick={() => setIsModalVisible(true)}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <FooterMain/>
            {_modalView()}
    </div>
  )
}
export default SeasonTickets;



