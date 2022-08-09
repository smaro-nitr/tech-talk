import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {AntiPatternSelector} from './AntiPatternSlicer'

interface Props {}

const ComponentA = (props: Props) => {
	const {defaultUser} = useSelector(AntiPatternSelector)
	const [userDataA, setUserDataA] = useState([])
	const [visualize, setVisualize] = useState(false)

	useEffect(() => {
		defaultUser.data && setUserDataA(defaultUser.data)
	}, [defaultUser])

	const addUser = user => {
		const newUserDataA = JSON.parse(JSON.stringify(userDataA))
		newUserDataA.push(user)
		setUserDataA(newUserDataA)
	}

	const toggleData = () => setVisualize(!visualize)

	if (defaultUser.isLoading) return <>Loading...</>

	return (
		<>
			{visualize && (
				<>
					<div className='d-flex flex-column w-100 my-2 p-2 border bg-fee'>
						<h5>Component A : State</h5>
						<b>userDataA</b>
						<pre className='d-flex w-100'>{JSON.stringify(userDataA)}</pre>
					</div>
					<div className='d-flex flex-column w-100 mb-2 p-2 border bg-fee'>
						<h5>Component A : Memoized Constant</h5>
						<b>NA</b>
						<pre className='d-flex w-100'>{JSON.stringify(null)}</pre>
					</div>
				</>
			)}
			<h4>
				Component A
				<span className='badge badge-pill badge-info cursor-pointer ml-4' onClick={toggleData}>
					{visualize ? <>&#x2716;</> : <>&#10003;</>}
				</span>
			</h4>
			<div className='input-group mb-3'>
				<input
					id={'user-a'}
					type='text'
					className='form-control'
					placeholder='Add Username Only in Component A'
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
				{userDataA?.map(name => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</>
	)
}

export default ComponentA
