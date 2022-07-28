import {memo, useState} from 'react'
import {customLog} from 'utility/logger'
import ExternalChildren from './ExternalChildren'
import ExternalChildrenWithMemo from './ExternalChildrenWithMemo'

const AntiPatternComponent = () => {
	const [count, increaseCount] = useState(0)

	const InternalChildren = () => {
		customLog('#1 - Internal Children Loaded')
		return <h4>#1 - Internal Children</h4>
	}

	const InternalChildrenWithMemo = memo(() => {
		customLog('#1 - Internal Children With Memo Loaded')
		return <h4>#1 - Internal Children With Memo</h4>
	})

	customLog('#1 - Anti Pattern Parent Component Loaded')

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<h3>Target: Update Parent Component without re-rendering Child Component.</h3>
			<div className='d-flex flex-column p-4'>
				<div className={`box w-100 ${count > 0 ? 'text-danger' : ''}`}>
					<InternalChildren />
				</div>
				<div className={`box w-100 ${count > 0 ? 'text-danger' : ''}`}>
					<InternalChildrenWithMemo />
				</div>
				<div className={`box w-100 ${count > 0 ? 'text-danger' : ''}`}>
					<ExternalChildren />
				</div>
				<div className={`box w-100 ${count > 0 ? 'text-success' : ''}`}>
					<ExternalChildrenWithMemo />
				</div>
			</div>
			<div className='d-flex flex-fill flex-row'>
				<button type='button' className='mt-4 btn btn-info w-50 mr-4' onClick={() => increaseCount(count + 1)}>
					Increase Counter State
				</button>
				<h4 className='mt-4'>Count: {count}</h4>
			</div>
		</div>
	)
}

export default AntiPatternComponent
