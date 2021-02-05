import React, { Fragment } from 'react';
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import Footer from '../layout/footer'
import {ToastContainer} from 'react-toastify'



const Dashboard = ({children}) => {
  console.warn = () => {}
  return (
    <Fragment>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Header/>
      <div className="page-body-wrapper sidebar-icon">
        <Sidebar/>
        <div className="page-body">
          {children}
        </div>
        <Footer/>
        </div>
      </div>
      <ToastContainer/>
    </Fragment>
  );
}

export default Dashboard;