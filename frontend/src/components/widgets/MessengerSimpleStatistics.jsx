import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CountUp from 'react-countup';
import {translate} from 'react-switch-lang'

import { Bots, Month, Day } from '../../constant'


const MessengerSimpleStatistics = props => {

	return (
		<Card className="browser-widget">
		  <CardBody className="media card-body">
		    <div className="media-img"><img src={props.src} alt="" /></div>
		    <div className="media-body align-self-center">
		      <div>
		        <p>{props.t(Bots)}</p>
		        <h4><span className="counter">
		          <CountUp end={props.count} /></span></h4>
		      </div>
		      <div>
		        <p>{props.t(Month)}</p>
		        <h4><span className="counter">
		          <CountUp end={props.perMonth} /></span>{" ₽"}</h4>
		      </div>
		      <div>
		        <p>{props.t(Day)}</p>
		        <h4><span className="counter">
		          <CountUp end={props.perDay} /></span>{" ₽"}</h4>
		      </div>
		    </div>
		  </CardBody>
		</Card>
		)
}

export default translate(MessengerSimpleStatistics);