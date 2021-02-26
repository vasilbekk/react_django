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

export const getUserPermissions = user => {
	if (user) return user.permissions 
		else return []
}

export const isUserHavePermission = (user, permission) => {
	if (!permission) return true
	return getUserPermissions(user).indexOf(permission) !== -1
}

export const getUserBots = user => user.bots || []

