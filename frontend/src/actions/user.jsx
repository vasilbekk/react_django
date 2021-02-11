export const botsPayPerDay = bots => {
  var count = 0
  bots.map((bot) => count+=parseFloat(bot.costPerDay))
  return count
}

export const getDaysToBlock = user => {
	let perDay = botsPayPerDay(user.bots)
	if (perDay > 0) {
		return Math.floor(user.balance/perDay)
	} else return 31
}

