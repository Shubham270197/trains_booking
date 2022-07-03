import React, { useLayoutEffect,useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useNavigate
} from "react-router-dom";

import { loginInitiate } from "../../redux/actions/authentication"
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { Layout, Menu,Modal } from 'antd';
import images from "../../themes/appImage";
import { Collapse,Select } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Option ={Select}



const Register = (props) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [mask,setMask ] = useState(false)
  const [confirmmask,setconfirmMask ] = useState(false)

  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  
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
    const { SubMenu } = Menu;
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
    }
    useEffect(() => {
        document.title = "Register"
        window.scrollTo(0, 0)

    }, [])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    const _modalView = () => {
        return (
          <Modal
            // title="Cancel Booking Reason"
            centered
            className="sharemodal registres thanks"
            width={536}
            visible={isModalVisible}
            footer={null}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
          >
            <div className="text_line_view">
                  <div className="text-center">
               <img src={images.thankyou} style={{width:'21%'}}/>
               <h4 className='success'>Success</h4>
               <p>Your account has been registered successfully. A verification email has been sent to your entered email
address. Please verify your email address first to login.</p>
              <button type="submit" className="button text"  onClick={()=>(navigate('/login'))}>Ok</button>
               </div>
            </div>
    
          </Modal>
    
        )
      }
    return (
        <div>
            <div className="wapper-Login register_i" style={{ overflowX: "hidden", }}>
                <div className="row">
                    <div className="col-sm-6">
                       
                        <div className="press password_small">
              <img src ={images.back} style={{width:'20px',cursor:'pointer',margin:'0 17px 33px'}} onClick={()=>navigate('/login')}/>
                        <div className="container">
                        <h2 className="line">Register</h2>
                        <div className="text-input-filed">
                        <div className="form-group">
                        <label>Title</label>
                        <div className="text">
                                            <Select placeholder="Title" className="form-control new_form_groups register">
                                                <Option value="1" title="">Mr.</Option>
                                                <Option value="2" title="">Miss.</Option>
                                                <Option value="3" title="">Mrs.</Option>
                                                <Option value="4" title="">Other</Option>
                                            </Select>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6">
                        <div className="form-group">
                        <label>First Name</label>
                        <input type ="text" className="form-control" placeholder="First Name" />
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type ="text" className="form-control" placeholder="Last Name" />
                        </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label>Address</label>
                        <input type ="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                        <label>Postal Code</label>
                        <input type ="text" className="form-control" placeholder="Postal Code" />
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                        <label>City</label>
                        <input type ="text" className="form-control" placeholder="City" />
                        </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label>Email Address</label>
                        <input type ="text" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group phone_number">
                        <label>Phone Number</label>
                        <input type ="text" className="form-control" placeholder="Phone Number" />
                        <span className='text_phone'>+44</span>
                        </div>
                        <div className="form-group password_change">
                        <label>Password</label>
                        <input type={mask?'text':'password'}
                                         className="form-control"
                                         placeholder="Password"
                                         value={password}
                                         onChange={event =>setPassword(event.target.value)}
                                          />
                                        <img src={password.length<=0?images.unmask:mask?images.eye:images.unmask}  onClick={handlepassword} className="icon_left" />


                        </div>
                        <div className="form-group password_change">
                        <label>Confirm Password</label>
                        <input type={confirmmask?'text':'password'}
                                         className="form-control"
                                         placeholder="Confirm Password"
                                         value={ConfirmPassword}
                                         onChange={event =>setConfirmPassword(event.target.value)}
                                          />
                                        <img src={ConfirmPassword.length<=0?images.unmask:confirmmask?images.eye:images.unmask}  onClick={Confirmhandlepassword} className="icon_left" />

                        </div>
                     
                        <h2 className="line billings_etxt">Billing Contact Details</h2>
                       
                        <div className="row">
                        <div className="col-sm-6">
                        <div className="form-group">
                        <label>First Name</label>
                        <input type ="text" className="form-control" placeholder="First Name" />
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type ="text" className="form-control" placeholder="Last Name" />
                        </div>
                        </div>
                        </div>
                        <div className="form-group phone_number">
                        <label>Phone Number</label>
                        <input type ="text" className="form-control" placeholder="Phone Number" />
                        <span className='text_phone'>+44</span>
                        </div>
                        <div className="form-group">
                        <label>Fax ID</label>
                        <input type ="text" className="form-control" placeholder="Fax ID" />
                        </div>
                        <div className="form-group">
                        <label>Email Address</label>
                        <input type ="text" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                        <label>Address</label>
                        <input type ="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className='login_button'>
                        <div className="button_bottom" style={{marginBottom:'20px'}}>
                        <button onClick={() => setIsModalVisible(true)}  class ="button text">Register</button>
                        </div>
                        </div>
                        {/* <div className="button_bottom top_space_remove">
                        <button class ="button text color_diff">Register</button>
                        </div> */}

                        </div>
                        </div>
                        </div>
                    </div>
            <div className="col-sm-6">
                <div className="slider_new">
                    <Slider {...settings}>
                        <div>
                            <img src={images.loginimage} />
                        </div>
                        <div>
                            <img src={images.loginimage} />
                        </div>
                        <div>
                            <img src={images.loginimage} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
            </div >
            {_modalView()}

        </div >

    )
}
export default Register;
