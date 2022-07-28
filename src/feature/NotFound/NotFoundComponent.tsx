interface Props {}

export const NotFound = (props: Props) => {
	return (
		<div className='d-flex flex-fill align-self-center justify-content-center align-items-baseline fs-20'>
			<i className='fas fa-exclamation-triangle text-warning'></i>
			<span className='px-2 text-warning'>Page Not Found</span>
		</div>
	)
}
