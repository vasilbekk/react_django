import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody, Form, FormGroup, Input, InputGroup, Label, Button} from 'reactstrap';
import { getUserFromLocalStorage } from '../../actions/auth'

import { Clock as ClockIcon } from 'react-feather'

import { Currentlysale, Marketvalue } from '../../data/chartsData/apex-charts-data'


import ClockCard from '../widgets/Clock'
import ProfileGreetingCard from '../widgets/ProfileGreeting'
import ContactUsCard from '../widgets/ContactUs'
import OverviewDashboard from '../widgets/OverviewDashboard'
import {General, Dashboard, Summary, Daily, Weekly, Yearly, Monthly, Store, Online, ReferralEarning, CashBalance, SalesForcasting} from '../../constant'

const  Sample = (props) => {
  
  const [daytimes,setDayTimes] = useState()
  const [meridiem,setMeridiem] = useState("AM")
  const [date, setDate] = useState(new Date());
  const user = getUserFromLocalStorage()


  const handleChange = date => {
    setDate(date)
  }

    return (
         <Fragment>
         <Breadcrumb parent={General} title={Dashboard}/>
          <Container fluid={true}>
            <Row className="second-chart-list third-news-update">
            {/*<Col xl="12 xl-100" lg="12" className="calendar-sec box-col-6">
              <ClockCard /> 
            </Col>*/}
              <Col xl="8 xl-50" lg="12" className="morning-sec box-col-12">
                <ProfileGreetingCard />
              </Col>
            {/* График */}
             {/*<Col xl="8 xl-100" className="dashboard-sec box-col-12">
                <OverviewDashboard />
              </Col>*/}
            <Col xl="4 xl-50" lg="12" className="calendar-sec box-col-6">
              <ContactUsCard />
            </Col>
            
            </Row>
          </Container>   
         </Fragment> 
    );
}

export default Sample;