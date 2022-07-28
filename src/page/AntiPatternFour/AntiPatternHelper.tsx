import {customLog} from 'utility/logger'

export const calculateProfit = value => {
	if (!value) return 0

	customLog('calculateProfit function called')
	const profit = 10
	return Math.round((value * profit) / 100)
}

export const calculateLoss = value => {
	if (!value) return 0

	customLog('calculateLoss function called')
	const loss = 10
	return Math.round(-(value * loss) / 100)
}
