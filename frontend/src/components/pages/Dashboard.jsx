import React, { Fragment, useState } from 'react';
import {translate} from 'react-switch-lang'
import {Container,Row,Col,Card,CardHeader,CardBody, Form, FormGroup, Input, InputGroup, Label, Button} from 'reactstrap';
import { Clock as ClockIcon } from 'react-feather'

import Breadcrumb from '../../layout/breadcrumb'
import { getUserFromLocalStorage } from '../../actions/auth'
import { Currentlysale, Marketvalue } from '../../data/chartsData/apex-charts-data'
import ClockCard from '../widgets/Clock'
import ProfileGreetingCard from '../widgets/ProfileGreeting'
import ContactUsCard from '../widgets/ContactUs'
import OverviewDashboard from '../widgets/OverviewDashboard'
import MessengerSimpleStatisticsCard from '../widgets/MessengerSimpleStatistics'
import {General, Dashboard as DashboardText, Summary, Daily, Weekly, Yearly, Monthly, Store, Online, ReferralEarning, CashBalance, SalesForcasting} from '../../constant'


import TelegramLogo from '../../assets/images/dashboard/telegram.png'
import VKLogo from '../../assets/images/dashboard/vk.png'
import ViberLogo from '../../assets/images/dashboard/viber.png'



const Dashboard = (props) => {
  
  const [daytimes,setDayTimes] = useState()
  const [date, setDate] = useState(new Date());
  const user = getUserFromLocalStorage()


  const handleChange = date => {
    setDate(date)
  }

    return (
         <Fragment>
         <Breadcrumb parent={General} title={DashboardText}/>
          <Container fluid={true}>
            <Row className="second-chart-list third-news-update">
            {/*<Col xl="12 xl-100" lg="12" className="calendar-sec box-col-6">
              <ClockCard /> 
            </Col>*/}
              <Col xl="7 xl-50" lg="12" className="morning-sec box-col-12">
                <ProfileGreetingCard />
              </Col>
            {/* График */}
             {/*<Col xl="8 xl-100" className="dashboard-sec box-col-12">
                <OverviewDashboard />
              </Col>*/}
            <Col xl="5 xl-50" lg="12" className="contact-sec box-col-6">
              <ContactUsCard />
            </Col>
            <Col md="4" sm="12">
              <MessengerSimpleStatisticsCard 
              src = {TelegramLogo}
              count = {1}
              perMonth = {1500}
              perDay = {30}
              />
            </Col>
            <Col md="4" sm="12">
              <MessengerSimpleStatisticsCard 
              src = {VKLogo}
              count = {0}
              perMonth = {0}
              perDay = {0}
              />
            </Col>
            <Col md="4" sm="12">
              <MessengerSimpleStatisticsCard 
              src = {ViberLogo}
              count = {2}
              perMonth = {1800}
              perDay = {60}
              />
            </Col>
            
            </Row>
          </Container>   
         </Fragment> 
    );
}

export default translate(Dashboard);