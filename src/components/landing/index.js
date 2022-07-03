import React, { useState, useEffect, useLayoutEffect } from "react"
import { Layout, Menu } from 'antd';
import images from "../../themes/appImage";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate
} from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication"
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
const Landing = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [imageSrc, setimageSrc] = useState(images.mobilecut)
  const [imageBanner, setBannerImg] = useState(images.banner1)
  const [maskImg, setMaskImg] = useState(images.maskvalue)
  const [imageBannerClass, setBannerImgClass] = useState('slide-top')
  const [fadeAnimClass, setFadeAnimClass] = useState('value-text-jo')

  const imagesArr = [images.passenger, images.cycle, images.mobilecut]
  const [resultIndex, setResultIndex] = useState(0)

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData

  let bannerArr = [images.banner1, images.banner2, images.banner3]
  let maskArr = [images.maskvalue, images.mask_1, images.mask_2]


  useLayoutEffect(() => {
    if (resultIndex < 2) {
      setResultIndex(resultIndex + 1)
    } else {
      setResultIndex(0)
    }
  }, [imageSrc])

  useEffect(() => {
    // setBannerImgClass('')
    setTimeout(() => {
      setimageSrc(imagesArr[resultIndex])
      setBannerImgClass('slide-top')
      setFadeAnimClass('value-text-jo')
      setBannerImg(bannerArr[resultIndex])
      setMaskImg(maskArr[resultIndex])
    }, 3000)

    setTimeout(() => {
      setBannerImgClass('')
      setFadeAnimClass('')
      setBannerImg(null)
    }, 2950)

  }, [imageSrc])


  const onMenuClick = (e) => {
    // history.push(e.key);
    // e.key === '/login' &&  dispatch(LogoutAction(history))
  };

  const { SubMenu } = Menu;


  const handlewClick = () => {
    let action = drawerState ? false : true
    dispatch(drawerAction(action, 'drawerState'))
  }
  //   useEffect(() => {
  //     document.title = 'Home';
  //     window.scrollTo(0, 0)

  // }, [])
  useEffect(() => {
    document.title = "Home"
    window.scrollTo(0, 0)
    window.history?.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history?.pushState(null, document.title, window.location.href);
    });

    return () => null

  }, [])

  return (


    <div>

      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="line-text-d">
                {/* onClick={()=>(navigate('/purchaseOystersearch'))} */}
                <img src={images.oyster} onClick={() => navigate('/purchaseOystersearch', { state: { key: "landingPage" } })} style={{ width: '200px', cursor: 'pointer' }} />
                <img src={images.travel} onClick={() => (navigate('/newBookings'))} style={{ width: '200px', cursor: 'pointer' }} />
              </div>
            </div>
            <div className="col-md-9">
              <div className="banner_text">
                <img src={imageBanner} className={imageBannerClass} style={{ width: '566px' }} />

                {/* <Carousel>
                  <div>
                   
                  </div>
                  <div>
                    <img src={images.shopping} style={{ width: '500px' }} />
                  </div>
                  <div>
                    <img src={images.shopping} style={{ width: '500px' }} />
                  </div>
                </Carousel> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-platform-section">
        <div className="container">
          <h2 className="line">One Simple <span className="color-d">Platform </span>To Do It All</h2>
          <div className="text-line">
            <img src={images.border1} style={{ width: '400px' }} />
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={images.mobile} style={{ width: '105%' }} />

            </div>
            <div className="col-md-6">
              <div className="line-text_text">
                <h2>Online  booking  and management</h2>
                <h2>Real-time tracking </h2>
                <h2>Analytics dashboard</h2>
                <button type="submit" className="button text text_simple des12_t" onClick={() => navigate('/register')}>Let's get started</button>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="logistics text-center">
        <div className="container">
          <h2 className="line">Simple, Transparent And Reliable <span class="color-d">Logistics </span></h2>
          <div className="text-line small-text">
            <img src={images.border1} style={{ width: '400px' }} />
          </div>
          <p className="one-item">Stay in control of your logistics with full visibility, competitive instant prices and trusted carriers.
            Plus the financing to grow your business. </p>
          <div className="row">
            <div className="col-md-4">
              <img src={images.box1} style={{ width: '100px' }} />
              <div className="shopp-text">
                <h4>Real-time tracking and support</h4>
                <p>A simple online platform to manage

                  shipments with a dedication support team.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={images.global1} style={{ width: '100px' }} />
              <div className="shopp-text">
                <h4>Trusted global carriers</h4>
                <p>We partner directly with the best

                  global carriers.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={images.cashpay1} style={{ width: '100px' }} />

              <div className="shopp-text">
                <h4>Competitive prices</h4>
                <p>Get fair and transparent priceswith

                  our online freight pricing tool.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="hub-section">
        <div className="container happy_sec" >
          <div className="row">

            <div className="col-md-4">
              <div className="item-alert">

                <img src={imageSrc} style={{ width: '283px' }} />
              </div>
            </div>
            <div className="col-md-8 passenger">
              <h3 class="top-left">How To Use The Passenger Hub</h3>
              <h4>Simple . Secure . Share</h4>
              <div className="code_text">
                <div className="time">
                  <img src={images.location} />
                  <h3>Plan</h3>
                  <p>Enter from & to location Select the time It's done</p>
                </div>
                <div className="time">
                  <img src={images.choose} />
                  <h3>Choose</h3>
                  <p>Check route match %
                    Compare carpool givers
                    Send invite</p>
                </div>
                <div className="time">
                  <img src={images.train1} />
                  <h3>Commute</h3>
                  <p>
                    <div>Track ETA</div>
                    <div>Check In Ride</div>
                    Give Feedback</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="happy-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 top-down">
              <h3>Want Happy Employees?</h3>
              <h4>Bring The Passenger Hub to your organisation</h4>
              <p>Foster a culture of carpooling within your
                company and reduce CO2, help your employees network better,
                get to work happier, and find parking without any stress
                with our Carpool for Companies programs.</p>
              <ul class="auto-switch mt-4 d-xl-block">
                <li className={resultIndex == 0 ? "button text first active" : "button text first"}>Reduce CO2</li>
                <li className={resultIndex == 1 ? "button text active long-b" : "button text long-b"}>Get to Work Happier</li>
                <li className={resultIndex == 2 ? "button text last active" : "button text last"}>Save Parking Space</li>
              </ul>
            </div>
            <div className="col-md-6">
              {
                <img src={maskImg} className={fadeAnimClass} style={{ width: '657px', height: '557px' }} />
              }
            </div>
          </div>
        </div>
      </div>

      <FooterMain />

    </div>


  )

}
export default Landing