import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import ApexCharts from 'react-apexcharts'
import {General, Dashboard, Summary, Daily, Weekly, Yearly, Monthly, Store, Online, ReferralEarning, CashBalance, SalesForcasting} from '../../constant'
import { Currentlysale } from '../../data/chartsData/apex-charts-data'

const OverviewDashboard = props => {

	return (
		<Card className="earning-card">
		  <CardBody className="p-0">
		    <Row className="m-0">
		      <Col xl="3" className="earning-content p-0">
		        <Row className="m-0 chart-left">
		          <Col xl="12" className="p-0 left_side_earning">
		            <h5>{Dashboard}</h5>
		            <p className="font-roboto">{"Overview of last month"}</p>
		          </Col>
		          <Col xl="12" className="p-0 left_side_earning">
		            <h5>{"$4055.56"} </h5>
		            <p className="font-roboto">{"This Month Earning"}</p>
		          </Col>
		          <Col xl="12" className="p-0 left_side_earning">
		            <h5>{"$1004.11"}</h5>
		            <p className="font-roboto">{"This Month Profit"}</p>
		          </Col>
		          <Col xl="12" className="p-0 left_side_earning">
		            <h5>{"90%"}</h5>
		            <p className="font-roboto">{"This Month Sale"}</p>
		          </Col>
		          <Col xl="12" className="p-0 left-btn"><a className="btn btn-gradient" href="#javascript">{Summary}</a></Col>
		        </Row>
		      </Col>
		      <Col xl="9" className="p-0">
		        <div className="chart-right">
		          <Row className="m-0 p-tb">
		            <Col xl="8" md="8" sm="8" className="col-12 p-0">
		              <div className="inner-top-left">
		                <ul className="d-flex list-unstyled">
		                  <li>{Daily}</li>
		                  <li className="active">{Weekly}</li>
		                  <li>{Monthly}</li>
		                  <li>{Yearly}</li>
		                </ul>
		              </div>
		            </Col>
		            <Col xl="4" md="4" sm="4" className="col-12 p-0 justify-content-end">
		              <div className="inner-top-right">
		                <ul className="d-flex list-unstyled justify-content-end">
		                  <li>{Online}</li>
		                  <li>{Store}</li>
		                </ul>
		              </div>
		            </Col>
		          </Row>
		          <Row>
		            <Col xl="12">
		              <CardBody className="p-0">
		                <div className="current-sale-container">
		                  <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={240} />
		                </div>
		              </CardBody>
		            </Col>
		          </Row>
		        </div>
		        <Row className="border-top m-0">
		          <Col xl="4" md="6" sm="6" className="pl-0">
		            <div className="media p-0">
		              <div className="media-left"><i className="icofont icofont-crown"></i></div>
		              <div className="media-body">
		                <h6>{ReferralEarning}</h6>
		                <p>{"$5,000.20"}</p>
		              </div>
		            </div>
		          </Col>
		          <Col xl="4" md="6" sm="6">
		            <div className="media p-0">
		              <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
		              <div className="media-body">
		                <h6>{CashBalance}</h6>
		                <p>{"$2,657.21"}</p>
		              </div>
		            </div>
		          </Col>
		          <Col xl="4" md="12" className="pr-0">
		            <div className="media p-0">
		              <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
		              <div className="media-body">
		                <h6>{SalesForcasting}</h6>
		                <p>{"$9,478.50"}</p>
		              </div>
		            </div>
		          </Col>
		        </Row>
		      </Col>
		    </Row>
		  </CardBody>
		</Card>
		)
}

export default OverviewDashboard;