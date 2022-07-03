import React, { useState, useEffect } from "react"
import { Layout, Menu } from 'antd';
import images from '../../../themes/appImage'
// import tableLoading from '../common/tableloading'
import moment from 'moment'
import { Table, Breadcrumb, Modal, Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux"
import {
  useNavigate
} from "react-router-dom";
import { appConstants } from "../../../themes/appConstant";



const { Header, Content, Footer, Sider } = Layout;



const TrainBookings = (props) => {

    const [screenTab, setScreenTab] = useState('1')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      const navigate = useNavigate()
      const dispatch = useDispatch()

      useEffect(() => {
        document.title = 'My Bookings';
        window.scrollTo(0, 0)

    }, [])
    // const userData = useSelector(state => state.UserManagementReducer.UserData)
    // const onLoad = useSelector(state => state.UserManagementReducer.onLoad)
    // const pagination = useSelector(state => state.UserManagementReducer.pagination)

    //     console.log('dashboardData....',userData)
    //     console.log('pagination....',pagination)
    //     const dispatch = useDispatch();
    //     const history = useHistory();

    //     const [data ,setdata] = useState(userData)
    //     const [search ,setSearch] = useState('')
    //     const [offset, setOffset] = useState(0)
    //     const [limit, setLimit] = useState(5)
    //     const [sortBy ,setSortby] = useState(null)
    //     const [sortOrder, setSortOrder] = useState(null)



    //      useEffect(() => {
    //         handlelisting()
    //     }, [])

    //     const handlelisting = () =>{
    //     let data = {
    //         offset: offset,
    //         limit: limit,
    //         search: search,
    //         order:sortOrder ,
    //        sortBy:sortBy,      
    //     }
    //     dispatch(UserManagementAction(data,history))

    // }

    // const sortinghandlingchange = (pagination, filters, sorter) =>{

    //     console.log(sorter,'...................')
    //     let sortOrder = ""
    //     if(sorter.order === 'ascend'){
    //         sortOrder = 1;
    //     }
    //     else if(sorter.order === 'descend'){
    //         sortOrder = -1;
    //     }
    //     else{
    //         sortOrder = 0;
    //     }
    //     let data = {
    //         offset: offset,
    //         limit: limit,
    //         search: search,
    //         order:sortOrder,
    //         sortBy:sorter.field,      
    //     }

    //     setSortOrder(sortOrder)
    //     setSortby(sorter.field)
    //     dispatch(UserManagementAction(data,history))

    // }

    //  const handlePagination = (page) =>{
    //      let offset = (10*(page - 1))
    //         let data = {
    //         offset: offset,
    //         limit: limit,
    //         search: search,
    //         sortBy: sortBy,
    //         order: sortOrder
    //       }
    //       setOffset(offset)
    //       setLimit(limit)
    //       dispatch(UserManagementAction(data, history))


    //  }
    // const handlesearch = (e) =>{

    //     let data = {
    //         offset: offset,
    //         limit: limit,
    //         search: e.target.value,
    //         sortBy: sortBy,
    //         order: sortOrder
    //       }
    //       setSearch(e.target.value)
    //       dispatch(UserManagementAction(data, history))



    // }
    const dataSource = [
        {
            key: '1',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '2',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '3',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '4',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '5',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '6',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '7',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
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
        title: 'Source Station Name',
        dataIndex: 'Source',
        key: 'Source',
        sorter: true,
        sorterDirections: ['descend', 'ascend'],
        render: (index, item) => {
            return <div>{item.Source ? item.Source : 'N/A'}</div>
        }
    },

    {
        title: 'Destination Station Name',
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
        title: 'Booking Status',
        dataIndex: 'bookingstatus',
        key: 'bookingstatus',
        sorter: true,
        sorterDirections: ['descend', 'ascend'],
        render: (index, item) => {
            return <div>{item.bookingstatus ? item.bookingstatus : 'N/A'}</div>
        }
    },

    {
        title: 'Action',
        dataIndex: 'Posted',
        key: 'Posted',
        render: (text, record) => {
            return (

                <div>
                    <button type="submit" onClick={() =>navigate("/bookingdetails", record)} >
                        <img src = {images.view}/>
                    </button>


                </div>
            )
        }
    },
    ];

    //future booking
    const dataSourceFuture = [
        {
            key: '1',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '2',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '3',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '4',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '5',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '6',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },
        {
            key: '7',
            ticketid: 120053793,
            email: 'john@yopmail.com',
            Source: 'Source Street',
            destination: 'Destination Station Name',
            bookingdate: '01/01/2021',
            bookingstatus: 'Active'

        },


    ];



    const columnsfuture = [{
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
        title: 'Source Station Name',
        dataIndex: 'Source',
        key: 'Source',
        sorter: true,
        sorterDirections: ['descend', 'ascend'],
        render: (index, item) => {
            return <div>{item.Source ? item.Source : 'N/A'}</div>
        }
    },

    {
        title: 'Destination Station Name',
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
        title: 'Booking Status',
        dataIndex: 'bookingstatus',
        key: 'bookingstatus',
        sorter: true,
        sorterDirections: ['descend', 'ascend'],
        render: (index, item) => {
            return <div>{item.bookingstatus ? item.bookingstatus : 'N/A'}</div>
        }
    },

    {
        title: 'Action',
        dataIndex: 'Posted',
        key: 'Posted',
        render: (text, record) => {
            return (

                <div>
                      <button type="submit"  onClick={() => setIsModalVisible(true)} ><img src = {images.cancel}/></button>
                    <button type="submit" onClick={() => navigate("/futurebookingdetails", record)} > <img src = {images.view}/></button>


                </div>
            )
        }
    },
    ];
  //past booking
  const dataSourcePast = [
    {
        key: '1',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '2',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '3',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '4',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '5',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '6',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },
    {
        key: '7',
        ticketid: 120053793,
        email: 'john@yopmail.com',
        Source: 'Source Street',
        destination: 'Destination Station Name',
        ticket:'£200',
        bookingdate: '01/01/2021',
        bookingstatus: 'Active'

    },


];



const columnspast = [{
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
    title: 'Source Station Name',
    dataIndex: 'Source',
    key: 'Source',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.Source ? item.Source : 'N/A'}</div>
    }
},

{
    title: 'Destination Station Name',
    dataIndex: 'destination',
    key: 'destination',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.destination ? item.destination : 'N/A'}</div>
    }
},
{
    title: 'Ticket Price',
    dataIndex: 'ticket',
    key: 'ticket',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.ticket ? item.ticket : 'N/A'}</div>
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
    title: 'Booking Status',
    dataIndex: 'bookingstatus',
    key: 'bookingstatus',
    sorter: true,
    sorterDirections: ['descend', 'ascend'],
    render: (index, item) => {
        return <div>{item.bookingstatus ? item.bookingstatus : 'N/A'}</div>
    }
},

{
    title: 'Action',
    dataIndex: 'Posted',
    key: 'Posted',
    render: (text, record) => {
        return (

            <div>
                <button type="submit" onClick={() => navigate("/pastbookingdetails", record)} > <img src = {images.view}/></button>


            </div>
        )
    }
},
];


    const [isVisible, setVisible] = useState(false)
    const handlewClick = () => {
        setVisible(!isVisible)
    }
   
 //// Share modal view
 const _modalView = () => {
    return (
      <Modal
        title="Cancel Booking Reason"
        centered
        className="sharemodal titles"
        width={536}
        visible={isModalVisible}
        footer={null}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <div className="text_line_view">
          <h2>Reason</h2>
          <div className="form-group">
              <textarea className="form-control" placeholder="Reason"></textarea>
              </div>
              <div className="text-center">
          <button type="submit" className="button text"  onClick={() => setIsModalVisible(false)}>Submit</button>
           </div>
        </div>

      </Modal>

    )
  }


    return (
        <div>
          

                <div className="table-wrapper">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div className="d-flex buttons">
                            <button className={screenTab == 1 ? 'button text active' : 'button text'} onClick={() => { setScreenTab('1') }}>{appConstants.activebooking}</button>
                            <button className={screenTab == 2 ? 'button text active' : 'button text'} onClick={() => { setScreenTab('2') }}>{appConstants.futurebookings}</button>
                            <button  className={screenTab == 3 ? 'button text active' : 'button text'} onClick={() => { setScreenTab('3') }}>{appConstants.pastbookings}</button>
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

                                screenTab === '2' ?
                                <Table dataSource={dataSourceFuture}
                                    columns={columnsfuture}
                                    showSorterTooltip={false}
                                    //  loading={tableLoading(onLoad)}
                                    //  onChange={sortinghandlingchange}
                                    pagination={true}
                                />
                                :
            
                                <Table dataSource={dataSourcePast}
                                columns={columnspast}
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

                {_modalView()}
            </div>

            




    )
}
export default TrainBookings
