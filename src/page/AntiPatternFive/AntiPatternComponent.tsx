import {useDispatch, useSelector} from 'react-redux'
import {customLog} from 'utility/logger'
import {getDefaultUser} from './AntiPatternAction'
import {AntiPatternSelector} from './AntiPatternSlicer'
import FirstChildren from './ComponentA'
import SecondChildren from './ComponentB'

interface Props {
	location: {hash: string; search: string}
}

const AntiPatternFive = (props: Props) => {
	const dispatch = useDispatch()
	const {defaultUser} = useSelector(AntiPatternSelector)

	const getAllUser = () => {
		dispatch(getDefaultUser())
	}

	customLog('Anti Pattern Component Loaded')

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<div className='d-flex flex-row w-100 justify-content-between'>
				<h3>Requirement: Get default user from server. Add custom username seperately to the individual component.</h3>
				{defaultUser?.data?.length === 0 && <input type='button' onClick={getAllUser} value='Get User from Server' />}
			</div>
			<div className='d-flex flex-column w-100 border bg-eee mx-1 p-2 mt-4'>
				<h5>Redux State</h5>
				<b>defaultUser.data</b>
				<pre className='d-flex w-100'>{JSON.stringify(defaultUser?.data)}</pre>
			</div>
			<div className='d-flex flex-row w-100'>
				<div className='d-flex flex-column w-50 mt-2'>
					<FirstChildren />
				</div>
				<div className='d-flex flex-column w-50 mt-2'>
					<SecondChildren />
				</div>
			</div>
		</div>
	)
}

export default AntiPatternFive
