import React, { useState, useEffect } from 'react'
import { Card, CardBody } from 'reactstrap'
import ApexCharts from 'react-apexcharts'
import { Clock as ClockIcon, Plus } from 'react-feather'
import {translate} from 'react-switch-lang'

import { radialChart as getRadialChart } from '../../data/chartsData/radial-chart-data'
import { MakePayment } from '../../constant'
import { getDaysToBlock } from '../../actions/user'


const ProfileGreeting = props => {
	const today = new Date()
  	const curHr = today.getHours()
  	const curMi = today.getMinutes()
  	const daysToBlock = getDaysToBlock(props.user)
  	const radialChart = getRadialChart(daysToBlock)

	return (
		<Card className="o-hidden profile-greeting">
		  <CardBody>
		    <div className="media">
		      <div className="badge-groups w-100">
		        <div className="badge f-12">
		          <ClockIcon style={{width:"16px" ,height:"16px"}} className="mr-1"/>
		          <span id="txt">{curHr}:{curMi < 10 ? "0"+curMi :curMi}</span>
		        </div>
		        <div className="badge f-12"><i className="fa fa-spin fa-cog f-14"></i></div>
		      </div>
		    </div>
		    <div className="greeting-user text-center">
		        <ApexCharts options={radialChart.options} series={radialChart.series} height="245" type="radialBar" /> 
		      <h4 className="f-w-600">
		      	<span id="greeting">{daysToBlock} {props.t('Days')} </span>
		      	<span className="right-circle">
		      		<i className="fa fa-check-circle f-14 middle"></i>
		      	</span>
		      </h4>
		      <p>
		      	<span> {props.t("Days until the balance is depleted.")}</span>
		      </p>
		      <div className="whatsnew-btn">
		      	<a className="btn btn-primary" href="#javascript">{props.t(MakePayment)}</a>
		      </div>
		      {/*<div className="left-icon"><i className="fa fa-bell"> </i></div>*/}
		    </div>
		  </CardBody>
		</Card>
		)
}

export default translate(ProfileGreeting);