import React, { Fragment, useEffect, useState } from 'react'
import { Col } from 'reactstrap'

import MessengerSimpleStatisticsCard from './MessengerSimpleStatistics'

import TelegramLogo from '../../assets/images/dashboard/telegram.png'
import VKLogo from '../../assets/images/dashboard/vk.png'
import ViberLogo from '../../assets/images/dashboard/viber.png'


const MessengersCard = props => {


	const getBotsByMessenger = name => {
		// Return Array of Bots with current messenger name
		return props.bots.filter(bot => bot.messenger==name)
	}

	const getPerDay = array => {
		var count = 0
		array.map(bot => {count+=parseFloat(bot.costPerDay)})
		return count
	}
	const telegramBots = getBotsByMessenger('TG')
	const VKBots = getBotsByMessenger('VK')
	const viberBots = getBotsByMessenger('VB')

	return (
	<Fragment>
		<Col md="4" sm="12">
		  <MessengerSimpleStatisticsCard 
		  src = {TelegramLogo}
		  count = {telegramBots.length}
		  perDay = {getPerDay(telegramBots)}
		  />
		</Col>
		<Col md="4" sm="12">
		  <MessengerSimpleStatisticsCard 
		  src = {VKLogo}
		  count = {VKBots.length}
		  perDay = {getPerDay(VKBots)}
		  />
		</Col>
		<Col md="4" sm="12">
		  <MessengerSimpleStatisticsCard 
		  src = {ViberLogo}
		  count = {viberBots.length}
		  perDay = {getPerDay(viberBots)}
		  />
		</Col>
	</Fragment>
		)
}

export default MessengersCard;