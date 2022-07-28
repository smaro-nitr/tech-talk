import {customLog} from 'utility/logger'

export const calculateProfit = value => {
	customLog('calculateProfit function called')
	const profit = 10
	return Math.round(value * (1 + profit / 100))
}

export const calculateLoss = value => {
	customLog('calculateLoss function called')
	const loss = 10
	return Math.round(value * (1 - loss / 100))
}
