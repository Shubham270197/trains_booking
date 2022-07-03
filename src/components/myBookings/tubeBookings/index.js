import React, { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import images from '../../../themes/appImage'
// import tableLoading from '../common/tableloading'
import moment from 'moment'
import { Table, Breadcrumb, Modal, Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {
    useNavigate
} from "react-router-dom";
import { appConstants } from "../../../themes/appConstant";
const { Header, Content, Footer, Sider } = Layout;


const TubeBookings = (props) => {

    const { SubMenu } = Menu;
    const [screenTab, setScreenTab] = useState('1')
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
   
 
   
  //ondaybookings
  const dataSourceOneDaybookings = [
    {
        key: '1',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '2',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '3',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '4',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '5',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '6',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },
    {
        key: '7',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        bookingdate: '01/01/2021',
        number: '+44 9816214072',

    },


];



const columnsOneDaybookings = [{
    title: 'Sr. No.',
    dataIndex: 'srno',
    key: 'srno',
    sorterDirections: ['descend', 'ascend'],
    render: (value, item, index) => (index + 1)
},
{
    title: 'Ticket ID',
    dataIndex: 'ticketid',
    key: 'ticketid',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.ticketid}</div>
    }
},
{
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.email ? item.email : 'N/A'}</div>
    }
},
{
    title: 'Source Zone Name',
    dataIndex: 'Source',
    key: 'Source',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.Source ? item.Source : 'N/A'}</div>
    }
},

{
    title: 'Destination Zone Name',
    dataIndex: 'destination',
    key: 'destination',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.destination ? item.destination : 'N/A'}</div>
    }
},
{
    title: 'Booking Date',
    dataIndex: 'bookingdate',
    key: 'bookingdate',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.bookingdate ? item.bookingdate : 'N/A'}</div>
    }
},
{
    title: 'Phone Number',
    dataIndex: 'number',
    key: 'number',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.number ? item.number : 'N/A'}</div>
    }
},

{
    title: 'Action',
    dataIndex: 'Posted',
    key: 'Posted',
    render: (text, record) => {
        return (

            <div>
                <button type="submit" onClick={() => navigate("/onedaybookingdetails", record)} ><img src={images.view}/></button>


            </div>
        )
    }
},
];

const dataSource = [
    {
        key: '1',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'2 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '2',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'6 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '3',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'8 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '4',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'4 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '5',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'2 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '6',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'8 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '7',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Street',
        duration:'9 Months',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },


];



const columns = [{
    title: 'Sr. No.',
    dataIndex: 'srno',
    key: 'srno',
    sorterDirections: ['descend', 'ascend'],
    render: (value, item, index) => (index + 1)
},
{
    title: 'Ticket ID',
    dataIndex: 'ticketid',
    key: 'ticketid',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.ticketid}</div>
    }
},
{
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.email ? item.email : 'N/A'}</div>
    }
},
{
    title: 'Source Zone Name',
    dataIndex: 'Source',
    key: 'Source',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.Source ? item.Source : 'N/A'}</div>
    }
},

{
    title: 'Destination Zone Name',
    dataIndex: 'destination',
    key: 'destination',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.destination ? item.destination : 'N/A'}</div>
    }
},

{
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.duration ? item.duration : 'N/A'}</div>
    }
},
{
    title: 'Booking Date',
    dataIndex: 'bookingdate',
    key: 'bookingdate',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.bookingdate ? item.bookingdate : 'N/A'}</div>
    }
},


{
    title: 'Action',
    dataIndex: 'Posted',
    key: 'Posted',
    render: (text, record) => {
        return (

            <div>
                <button type="submit" onClick={() => navigate("/longduartionbookingdetails", record)} >
                    <img src = {images.view}/>
                </button>


            </div>
        )
    }
},
];



    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
    useEffect(() => {
        document.title = 'My Bookings';
        window.scrollTo(0, 0)

    }, [])



    return (
        <div>
                <div className="table-wrapper">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div className="d-flex buttons">
                            <button className={screenTab == 1 ? 'button text active' : 'button text'} onClick={() => { setScreenTab('1') }}>{appConstants.LongDurationBookings}</button>
                            <button className={screenTab == 2 ? 'button text active' : 'button text'} onClick={() => { setScreenTab('2') }}>{appConstants.OneDayBookings}</button>
                        </div>
                        <div>
                            <div className="">
                                <div className="search_bar">
                                    <input type="text" className="search_input" placeholder="Search..." />
                                   

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {
                            screenTab === '1' ?
                            <Table dataSource={dataSource}
                            columns={columns}
                            showSorterTooltip={false}
                            //  loading={tableLoading(onLoad)}
                            //  onChange={sortinghandlingchange}
                            pagination={true}
                        />
                                :
                              
                              
                            <Table dataSource={dataSourceOneDaybookings}
                            columns={columnsOneDaybookings}
                            showSorterTooltip={false}
                            //  loading={tableLoading(onLoad)}
                            //  onChange={sortinghandlingchange}
                            pagination={true}
                        />
                            
                        }
                    </div>

                    <div className="pagin_left">
                        {/* <Pagination
                                   Current={pagination ? pagination.currentPage:1} 
                                   total={!data ? 1 : (pagination ? pagination.totalCount:0)}
                                   onChange={handlePagination}/>
                                   </div> */}
                    </div>
                </div>
            </div>
    )
}
export default TubeBookings
