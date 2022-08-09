import {customLog} from 'utility/logger'

export const calculateProfit = value => {
	customLog('calculateProfit function called')

	if (!value) return 0

	const profit = 10
	return Math.round((value * profit) / 100)
}

export const calculateLoss = value => {
	customLog('calculateLoss function called')

	if (!value) return 0

	const loss = 10
	return Math.round(-(value * loss) / 100)
}
