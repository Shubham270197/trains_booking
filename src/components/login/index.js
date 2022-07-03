import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    useNavigate
} from "react-router-dom";

import { loginInitiate } from "../../redux/actions/authentication"
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { Layout, Menu, Modal } from 'antd';
import images from "../../themes/appImage";
import { Collapse } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router"




const Login = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { state } = useLocation()


    const handleLogin = () => {
        // localStorage.setItem('token', '123456789')
        console.log('stateOyetrer',state)
        if (state?.key=='fromPurchaseOyster') {
            navigate('/purchaseOystersearch',{state:{key:"fromLoginScreen"}})
            dispatch(loginInitiate({}, navigate))
        }
        else {
            dispatch(loginInitiate({}, navigate))
        }
    }
    const [screenTab, setScreenTab] = useState('1')
    const [mask, setMask] = useState(false)
    const [password, setPassword] = useState('');

    const handlepassword = () => {
        if (password.length > 0) {
            setMask(!mask)
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    const { SubMenu } = Menu;
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        lazyLoad: true,

        autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
    }
    useEffect(() => {
        document.title = "Log In"
    }, [])
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const _modalView = () => {
        return (
            <Modal
                title="Forgot Password"
                centered
                className="sharemodal loginer"
                width={536}
                visible={isModalVisible}
                footer={null}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
            >
                <div className="text_line_view">
                    <h2>Email Address</h2>
                    <div className="text-input-filed">
                        <div className="form-group">
                            <input type="text" placeholder="Email Address" className="form-control jackitems" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="button text" onClick={() => handleCancel()}>Send</button>
                    </div>
                </div>

            </Modal>

        )
    }
    return (
        <div>
            <div className="wapper-Login" style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="press password_small">
                            <div className="container">

                                <h2 className="line">Log In</h2>
                                <div className="text-input-filed">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group password_change">
                                        <label>Password</label>
                                        <input type={mask ? 'text' : 'password'}
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={event => setPassword(event.target.value)}
                                        />
                                        <img src={password.length <= 0 ? images.unmask : mask ? images.eye : images.unmask} onClick={handlepassword} className="icon_left" />
                                        <div className='text-right' style={{ marginTop: '6px' }}>
                                            <span className="forgot-pass" onClick={() => setIsModalVisible(true)}>Forgot Password?</span>
                                        </div>
                                    </div>
                                    <div className="catchpa">
                                        <img src={images.catchpa} />
                                    </div>
                                    <div className='login_button'>
                                        <div className="button_bottom">
                                            <button class="button text" onClick={handleLogin}
                                            >Login</button>
                                        </div>
                                        <div className="button_bottom top_space_remove">
                                            <button onClick={() => (navigate('/register'))} class="button text color_diff">Register</button>
                                        </div>
                                    </div>

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
            </div>
            {_modalView()}

        </div>

    )
}
export default Login;
