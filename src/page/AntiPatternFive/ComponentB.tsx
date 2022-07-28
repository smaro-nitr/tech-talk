import {useMemo, useState} from 'react'
import {useSelector} from 'react-redux'
import {AntiPatternSelector} from './AntiPatternSlicer'

interface Props {
	visualize: boolean
}

const ComponentB = (props: Props) => {
	const {visualize} = props
	const {defaultUser} = useSelector(AntiPatternSelector)
	const [userDataB, setUserDataB] = useState([])

	const addUser = user => {
		const newUserDataB = JSON.parse(JSON.stringify(userDataB))
		newUserDataB.push(user)
		setUserDataB(newUserDataB)
	}

	const combinedData = useMemo(() => {
		const reduxData = defaultUser?.data
		return [...reduxData, ...userDataB]
	}, [defaultUser, userDataB])

	if (defaultUser.isLoading) return <>Loading...</>

	return (
		<>
			{visualize && (
				<>
					<div className='d-flex flex-column w-100 my-2 ml-2 p-2 border bg-efe'>
						<h5>Component B State</h5>
						<b>userDataB</b>
						<pre className='d-flex w-100'>{JSON.stringify(userDataB)}</pre>
					</div>
					<div className='d-flex flex-column w-100 mb-2 ml-2 p-2 border bg-efe'>
						<h5>Component B Memoized Constant</h5>
						<b>combinedData</b>
						<pre className='d-flex w-100'>{JSON.stringify(combinedData)}</pre>
					</div>
				</>
			)}
			<h4 className='ml-2'>Component B</h4>
			<div className='input-group mb-3 ml-2'>
				<input
					id={'user-a'}
					type='text'
					className='form-control'
					placeholder='Add Username Only in Component B'
					aria-label='Enter User 1'
					aria-describedby='enter-user-1'
				/>
				<div className='input-group-append'>
					<button
						className='btn btn-outline-secondary'
						type='button'
						onClick={() => addUser((document.getElementById('user-a') as HTMLInputElement).value)}
					>
						Add User
					</button>
				</div>
			</div>
			<ul>
				{combinedData?.map(name => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</>
	)
}

export default ComponentB
