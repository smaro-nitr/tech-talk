import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {customLog} from 'utility/logger'
import {looper, looperWithId} from './AntiPatternConstant'

const AntiPatternComponent = () => {
	const [loop, setLoop] = useState(looper)
	const [loopWithId, setLoopWithId] = useState(looperWithId)

	const updateLoop = () => {
		const message = 'new data inserted'
		loop.splice(2, 0, {message})
		loopWithId.splice(2, 0, {id: uuid(), message})
		setLoop(JSON.parse(JSON.stringify(loop)))
		setLoopWithId(JSON.parse(JSON.stringify(loopWithId)))
	}

	customLog('Anti Pattern Component Loaded')

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<h3 className='mb-4'>Target: Visualizing the impact of key atrribute on ReactJs rendering.</h3>
			<div className='d-flex flex-fill flex-row mt-4'>
				<div className='d-flex flex-column w-50'>
					<h4 className='text-danger'>Loop with Index</h4>
					<ul>
						{loop.map((item, index) => {
							return (
								<li key={index} className={looper.length === 5 && index >= 2 ? 'text-danger' : ''}>
									{item.message} - {index}
								</li>
							)
						})}
					</ul>
				</div>
				<div className='d-flex flex-column w-50'>
					<h4 className={'text-success'}>Loop with Id</h4>
					<ul>
						{loopWithId.map((item, index) => {
							return (
								<li key={index} className={item.message === 'new data inserted' ? 'text-success' : ''}>
									{item.message} - {item.id}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<button type='button' className='m-4 btn btn-info' onClick={updateLoop}>
				Insert Data at 2nd Index
			</button>
		</div>
	)
}

export default AntiPatternComponent
