import {useMemo, useState} from 'react'
import {customLog} from 'utility/logger'
import {calculateLoss, calculateProfit} from './AntiPatternHelper'

const AntiPatternComponent = () => {
	const [profitBaseAmount, setProfitBaseAmount] = useState(null)
	const [lossBaseAmount, setLossBaseAmount] = useState(null)

	const profit = useMemo(() => calculateProfit(profitBaseAmount), [profitBaseAmount])
	const loss = calculateLoss(lossBaseAmount)

	customLog('Anti Pattern Component Loaded')

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<h3>Target: To prevent logic calculation untill requested exclusively.</h3>
			<div className='d-flex box flex-column w-100 my-4'>
				<h4 className={profit > 0 && loss === 0 ? 'text-danger' : profit > 0 && loss > 0 ? 'text-success' : ''}>
					Profit Calculator (Assuming 10% Profit){' '}
				</h4>
				<div className='input-group mb-3'>
					<input
						id={'profit-id'}
						type='text'
						className='form-control'
						placeholder='Enter Amount'
						aria-label='Enter Amount 1'
						aria-describedby='enter-amount-1'
					/>
					<div className='input-group-append'>
						<button
							className='btn btn-outline-secondary'
							type='button'
							onClick={() =>
								setProfitBaseAmount(Number((document.getElementById('profit-id') as HTMLInputElement).value))
							}
						>
							Calculate
						</button>
					</div>
				</div>
				{profitBaseAmount && (
					<h4>
						Total Profit for {profitBaseAmount} INR: {profit} INR
					</h4>
				)}
			</div>
			<div className='d-flex box flex-column w-100 mt-4'>
				<h4 className={profit > 0 || loss > 0 ? 'text-danger' : ''}>Loss Calculator (Assuming 10% Loss) </h4>
				<div className='input-group mb-3'>
					<input
						id={'loss-id'}
						type='text'
						className='form-control'
						placeholder='Enter Amount'
						aria-label='Enter Amount 2'
						aria-describedby='enter-amount-2'
					/>
					<div className='input-group-append'>
						<button
							className='btn btn-outline-secondary'
							type='button'
							onClick={() => setLossBaseAmount(Number((document.getElementById('loss-id') as HTMLInputElement).value))}
						>
							Calculate
						</button>
					</div>
				</div>
				{lossBaseAmount && (
					<h4>
						Total Loss for {lossBaseAmount} INR: {loss} INR
					</h4>
				)}
			</div>
		</div>
	)
}

export default AntiPatternComponent
