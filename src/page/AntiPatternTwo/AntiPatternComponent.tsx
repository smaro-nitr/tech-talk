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
		<>
			<div className='p-4'>
				<div className={count > 0 ? 'text-danger' : ''}>
					<InternalChildren />
				</div>
				<div className={count > 0 ? 'text-danger' : ''}>
					<ExternalChildren />
				</div>
				<div className={count > 0 ? 'text-danger' : ''}>
					<InternalChildrenWithMemo />
				</div>
				<div className={count > 0 ? 'text-success' : ''}>
					<ExternalChildrenWithMemo />
				</div>
				<hr />
				<button type='button' className='mt-4 btn btn-info' onClick={() => increaseCount(count + 1)}>
					Increase Counter State
				</button>
				<h3 className='mt-4'>Count: {count}</h3>
			</div>
		</>
	)
}

export default AntiPatternComponent
