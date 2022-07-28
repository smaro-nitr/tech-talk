import {useDispatch, useSelector} from 'react-redux'
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

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<h3>Requirement: Get default user from server. Add few custom username to the list.</h3>
			{defaultUser?.data?.length === 0 && (
				<div className='d-flex w-100 mb-4'>
					<input type='button' onClick={getAllUser} value='Get User from Server' />
				</div>
			)}
			<div className='d-flex flex-column w-100 border bg-eee mx-1 p-2'>
				<h5>Redux State</h5>
				<b>defaultUser.data</b>
				<pre className='d-flex w-100'>{JSON.stringify(defaultUser?.data)}</pre>
			</div>
			<div className='d-flex flex-row w-100'>
				<div className='d-flex flex-column w-50'>
					<FirstChildren visualize={false} />
				</div>
				<div className='d-flex flex-column w-50'>
					<SecondChildren visualize={false} />
				</div>
			</div>
		</div>
	)
}

export default AntiPatternFive
