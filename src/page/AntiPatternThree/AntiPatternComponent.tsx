import {useRef, useState} from 'react'
import {customLog} from 'utility/logger'

const AntiPatternComponent = () => {
	const [onchange, setOnchange] = useState('')
	const [showOnchange, setShowOnchange] = useState(false)

	const usingref: any = useRef(null)
	const [showUsingref, setShowUsingref] = useState(false)

	const [elementById, setElementById] = useState(null)

	customLog('Anti Pattern Component Loaded')

	return (
		<div className='d-flex flex-column px-4 py-2'>
			<h3>Target: To show input value only on click of "Show" button.</h3>
			<div className='box border-bottom my-4 py-2'>
				<h4 className={showOnchange ? 'text-danger' : ''}>Handling Input with onChange</h4>
				<div className='input-group mb-3'>
					<input
						type='text'
						className='form-control'
						placeholder='Enter Text'
						aria-label='Enter Text 1'
						aria-describedby='enter-text-1'
						onChange={e => setOnchange(e?.target?.value)}
					/>
					<div className='input-group-append'>
						<button className='btn btn-outline-secondary' type='button' onClick={() => setShowOnchange(true)}>
							Show
						</button>
					</div>
				</div>
				<h4>onChange Value: {showOnchange ? onchange : ''} </h4>
			</div>
			<div className='box border-bottom my-4 py-2'>
				<h4 className={showUsingref ? 'text-danger' : ''}>Handling Input with useRef </h4>
				<div className='input-group mb-3'>
					<input
						ref={usingref}
						type='text'
						className='form-control'
						placeholder='Enter Text'
						aria-label='Enter Text 2'
						aria-describedby='enter-amount-2'
					/>
					<div className='input-group-append'>
						<button
							className='btn btn-outline-secondary'
							type='button'
							onClick={() => {
								console.log(usingref)
								setShowUsingref(true)
							}}
						>
							Show
						</button>
					</div>
				</div>
				<h4>useRef Value: {usingref?.current?.value} </h4>
			</div>
			<div className='box border-bottom my-4 py-2'>
				<h4 className={elementById ? 'text-success' : ''}>Handling Input with Js document.getElementById </h4>
				<div className='input-group mb-3'>
					<input
						id='inp-id'
						type='text'
						className='form-control'
						placeholder='Enter Text'
						aria-label='Enter Text 2'
						aria-describedby='enter-text-2'
					/>
					<div className='input-group-append'>
						<button
							className='btn btn-outline-secondary'
							type='button'
							onClick={() => setElementById((document.getElementById('inp-id') as HTMLInputElement).value)}
						>
							Show
						</button>
					</div>
				</div>
				<h4>document.getElementById Value: {elementById} </h4>
			</div>
		</div>
	)
}

export default AntiPatternComponent
