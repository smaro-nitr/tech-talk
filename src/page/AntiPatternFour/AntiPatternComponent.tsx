import {useMemo, useState} from 'react'
import {customLog} from 'utility/logger'
import {calculateLoss, calculateProfit} from './AntiPatternHelper'

const AntiPatternComponent = () => {
	const [profitBaseAmount, setProfitBaseAmount] = useState(0)
	const [lossBaseAmount, setLossBaseAmount] = useState(0)

	const profit = useMemo(() => calculateProfit(profitBaseAmount), [profitBaseAmount])
	const loss = calculateLoss(lossBaseAmount)

	customLog('Anti Pattern Component Loaded')

	return (
		<div className='d-flex flex-fill flex-row'>
			<div className='d-flex flex-column w-50 p-4'>
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
				<h4>Total Value with Profit: {profit} </h4>
			</div>
			<div className='d-flex flex-column w-50 p-4'>
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
				<h4>Total Value with Loss: {loss} </h4>
			</div>
		</div>
	)
}

export default AntiPatternComponent
