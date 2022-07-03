import React, { useState, useEffect } from "react";
import { useLocation } from "react-router"
import { Breadcrumb, Layout, Menu,Drawer } from 'antd';
import images from "./../themes/appImage";
import {
  useNavigate

} from "react-router-dom";
import { appConstants } from "../themes/appConstant";
const { Header, Content, Footer, Sider } = Layout;

const FooterMain = () =>{
    const navigate = useNavigate()
   return(
       <div>
            <div className="footer">
        <div className="container-fluid">
          <div className="row d-flex footer-draw">
            <div className="">
              <div class="wrapper footers">
                <img src={images.logohome} style={{ width: '' }} />
                <h2 className="black-line">Subject to status. Over 18 only.</h2>
              </div>
            </div>
            <div className="">
              <div class="wrapper footers first_text">
                <h4>In the office</h4>
                <ul className="lisit-trends">
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span  onClick={()=>(navigate('/finance'))}>{appConstants.finance}</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/about'))}>About Us</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span span onClick={()=>(navigate('/careers'))}>Careers</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/press'))}>Press</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/terms'))}>Terms & Conditions</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/privacypolicy'))}>Privacy Policy</span></li>
                </ul>


              </div>
            </div>
            <div className="">
              <div class="wrapper footers second_text">
                <h4>On the go</h4>
                <ul className="lisit-trends">
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/faq'))}>FAQ</span></li>
                  <li><img src={images.cursor} style={{ width: '30px' }} /><span onClick={()=>(navigate('/contactUs'))}>Contact Us</span></li>
                </ul>


              </div>

            </div>
            <div className="">
              <div class="wrapper footers icons-footer" style={{ textAlign: 'right' }}>
                <h4>Follow us</h4>

                <img src={images.fb} style={{ width: '30px' }} />
                <img src={images.tw} style={{ width: '30px' }} />
                <img src={images.youtube} style={{ width: '30px' }} />
              </div>
            </div>



          </div>
        </div>
      </div>
      <div className="copyright">
        <p>The Passenger Hub Ltd. Registered in England, Scotland, Ireland and Wales.</p>

      </div>

       </div>
   )

}
export default FooterMain